<template>
  <div>
    <ul class="title" v-if="choose">
      <li v-for="(item,index) in list" :class="choose===(index+1)?'choose':''" :key="index">{{index+1}}.{{item}}</li>
    </ul>
    <keep-alive>
      <component :is="currentTabComponent" :fatherSource="source"></component>
    </keep-alive>

    <div class="public" v-show="currentTabComponent !== 'ReceiveOrder'" >
      <div class="buyer">
        <div class="buyer-remark">
          <p><span>买家留言：</span>{{orderInfo.message || "- - -"}}</p>
          <div><span>发票信息：</span>{{orderInfo.invoiceTitle  || "- - -"}}    |    纳税人识别号：{{orderInfo.invoiceCode  || "- - -"}}
            <span class="invoice" @click="invoiceRule=true">发票开具规则</span></div>

        </div>
        <div class="buyer-infor">
          <h2>买家信息</h2>
          <div><span>买家： {{orderInfo.buyer.name}} </span><i class="chat"></i><span>联系电话：{{orderInfo.buyer.mobile}}</span></div>
        </div>
        <div class="receive">
          <h2>收货信息</h2>
          <ul>
            <li>收货人：  {{orderInfo.recipient.name}}<i v-if="orderInfo.recipient.legalNumber=''">（身份证号：{{orderInfo.recipient.legalNumber }}）</i></li>
            <li>收货电话：{{orderInfo.recipient.mobile}}</li>
            <li>邮政编码：{{orderInfo.recipient.postCode }} </li>
            <li>收货地址：{{orderInfo.recipient.address  }} </li>
            <li>快递单号：{{orderInfo.packages.expressNo  || "- - -"  }} <span class="logistics-btn" v-if="logisticsAmend" @click="logisticsAmend">修改物流</span><span class="logistics-btn" v-if="logistics" @click="logistics">查看物流详情</span></li>
            <li>快递公司：{{orderInfo.packages.expressName  || "- - -" }}</li>
          </ul>

        </div>
      </div>
      <!--购买商品-->
      <div class="goods">
        <div class="goods-title"><span>商品信息</span><span>订单号：{{orderInfo.orderNo}} </span><span class="print-order" @click="print">打印发货单</span></div>
        <div class="goods-table">
          <el-table :data="orderInfo.goods" style="width: 100%">
            <el-table-column
              align="center"
              label="商品"
              width="400">
              <template slot-scope="scope">
                <div class="goods-img">
                  <img :src="scope.row.image" alt="">
                  <div>{{scope.row.title }}</div>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="规格">
              <template slot-scope="scope">
                <span class="goods-specification">{{scope.row.spec }}</span>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="单价"
              width="140">
              <template slot-scope="scope">
                <div class="goods-price">
                  <p>¥{{scope.row.realPrice  }}</p>
                  <p v-if="scope.row.oldPrice!==''">¥{{scope.row.sellPrice }}</p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="数量"
            >
              <template slot-scope="scope">
                <span class="goods-num">{{scope.row.quantity }}</span>
              </template>
            </el-table-column>


            <el-table-column
              align="center"
              label="合计"
            >
              <template slot-scope="scope">
                <span class="goods-total">{{(scope.row.quantity *(parseFloat(scope.row.realPrice))).toFixed(2)}}</span>
              </template>
            </el-table-column>

          </el-table>

        </div>

      </div>
      <!--付款金额-->
      <div class="compute">
        <div class="compute-main">
          <div class="compute-left">
              <ul>
                <li  v-if="validTime(orderInfo.createAt)"><label>下单时间：</label><span>{{orderInfo.createAt}}</span></li>
                <li v-if="validTime(orderInfo.payAt)"><label>支付时间：</label><span>{{orderInfo.payAt}}</span></li>
                <li v-if="validTime(orderInfo.acceptAt)"><label>接单时间：</label><span>{{orderInfo.acceptAt}}</span></li>
                <li v-if="validTime(orderInfo.shipAt)"><label>发货时间：</label><span>{{orderInfo.shipAt}}</span></li>
                <li v-if="validTime(orderInfo.completeAt)"><label>收货时间：</label><span>{{orderInfo.completeAt}}</span></li>
                <li v-if="validTime(orderInfo.cancelAt)"><label>取消时间：</label><span>{{orderInfo.cancelAt}}</span></li>
              </ul>
          </div>
          <div  class="compute-right">
            <ul>
              <li>商品总价：￥ {{orderInfo.payment.sellMoney }}</li>
              <li>运费：￥ {{orderInfo.payment.sellFreight  }}</li>
              <li>商品优惠： <span>-</span>￥ {{orderInfo.payment.shopDiscount  }}<el-tooltip class="item" effect="light" content="限时折扣,满折优惠金额" placement="bottom-end"><i class="el-icon-warning"></i></el-tooltip></li>
              <li>店铺优惠券：<span>-</span> ￥{{orderInfo.payment.shopCouponMoney  }}</li>
              <li>订单总额：￥ {{ (orderInfo.payment.realMoney + orderInfo.payment.sellFreight).toFixed(2) }}</li>
              <li>修改价格：商品-￥ {{orderInfo.payment.shopChangeMoney  }}，运费 -￥{{orderInfo.payment.expressChangeMoney }}<el-tooltip class="item" effect="light" content="修改说明:" placement="bottom-end"><i class="el-icon-warning"></i></el-tooltip></li>
              <li>应收款：￥{{(orderInfo.payment.payMoney + orderInfo.payment.beanMoney + orderInfo.payment.voucherMoney ).toFixed(2)  }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="btn">
        <el-button>返  回</el-button>
      </div>
      <!--开具发票规则-->
      <el-dialog class="invoice-rule"
                 title=""
                 :visible.sync="invoiceRule"
                 width="600px"
      >
        <span slot="title" class="dialog-title"></span>
        <div class="dialog-main">
          <h2>满集商城发票开具规则（scfp-1.0.0）</h2>
          <ul>
            <span>一、开具发票的条件及流程</span>
            <li>1、买家购买的商品必须是通过满集网线上交易；</li>
            <li>2、买家在下订单时，应在“发票信息”栏目中注明开票信息；</li>
            <li>3、若买家在提交的订单未提及提供发票且商品未发货，可通过“满集聊天”向商家说明情况，商家应承诺为买家开具发票并与商品一并邮寄；</li>
            <li>4、若买家在提交的订单未提及提供发票且商品已发货，买家可在15天内通过“满集聊天”向商家说明情况，商家应为买家补开发票；</li>
          </ul>
          <ul>
            <span>二、商家义务及违规处理</span>
            <li>1、无论购买金额大小，商家应该无条件给买家开具发票，不得以任何理由拒绝给买家开发票，若出现提供虚假发票或不提供发票，每次信誉值扣20分，情况严重者，则关闭店铺；涉及违反国家税法等规定的，将上报当地危机公关处理。</li>
            <li>2、若属于特价商品、活动商品，明确低于正常价格30%—50%的且事前公示不能开具发票的，此类商品可不予提供发票；</li>
            <li>3、商家为买家开具的发票应合法合规，并保证按照国家相关规定自行承担相应税费。</li>
            <li>4、商品发货之前买家已明确需开发票，而商家并未同时寄出的，商家应通过“满集聊天”向买家说明情况同时承担寄送发票的运费；</li>
            <li>5、买家可在商品发货之后15天内通过“满集聊天”向商家申请补开发票，但买家应承担寄送发票的运费；</li>
            <li>6、若因商家发票开具错误、未开具发票或者其他发票问题引起的纠纷，均由商家承担相应的法律责任，如造成满集网损失的，商家应予以赔偿。</li>
            <li>7、若因买家提供的发票信息错误导致重新开具发票的，产生的费用包括但不限于邮费等均由买家承担。</li>
            <li>8、若商品产生退货退款，无论部分退款还是全额退款，发票均应退还至商家；若属于部分退款，原发票退还后商家应重新开具未退还商品的发票，邮寄发票产生费用根据退款原因判定责任方承担相应费用。</li>
            <li>9、电子发票和纸质发票具有同等效力，可以作为合法的交易凭证和保修凭证。</li>
          </ul>
        </div>

      </el-dialog>

      <!--查看物流详情-->
      <el-dialog  class="logistics"
                  title="请核对快递信息"
                  :visible.sync="logistics"
                  width="440px"
      >
        <ul>
          <li>快递公司：<span>顺丰速运</span></li>
          <li>快递单号：<span>5263522241663</span></li>
          <li>发票快递公司：<span>中通快递</span></li>
          <li>发票快递单号：<span>452635215852</span></li>
        </ul>
        <p>注：若有易碎商品请务必包装后进行发货，以免商品运输过程中导致损坏</p>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logistics = false">确定</el-button>
        <el-button @click="logistics = false">返回</el-button>
      </span>
      </el-dialog>
      <!--修改物流-->
      <el-dialog
        class="logistics-amend"
        title="修改物流信息"
        :visible.sync="logisticsAmend"
        width="520px"
      >
        <el-form :model="logisticsAmendForm" :rules="logisticsAmendRules" ref="logisticsAmendForm" label-width="120px" class="demo-logisticsAmend">
          <el-form-item label="请输入快递单号" prop="code">
            <el-input v-model="logisticsAmendForm.code"></el-input>
          </el-form-item>

          <el-form-item label="快递公司" prop="company">
            <!--<el-input v-model="logisticsAmendForm.company"></el-input>-->
            <el-cascader
              v-model="logisticsAmendForm.company"
              placeholder="请选择快递公司"
              :options="expressCompany"
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="logisticsAmendSure('logisticsAmendForm')">确定</el-button>
            <el-button @click="logisticsAmendCancel('logisticsAmendForm')">取消</el-button>
          </el-form-item>
        </el-form>



      </el-dialog>
    </div>
  </div>
</template>

<script>

  import GetProvinceList  from  '@/api/base/GetProvinceList.js';
  import moment from 'moment';
  import GetOrderDetial from '../../../api/Order/GetOrderDetial';
  import WaitPayOrder from './waitPayOrder';   //待付款,待接单
  import ReceiveOrder from './receiveOrder';    //接单
  import WaitDeliverGoods from './waitDeliverGoods';  //待发货
  import AlreadyDeliverGoods from './alreadyDeliverGoods'; //已发货
  import OrderResult from './orderResult';  //已结算，已收货，已取消
  import _ from 'underscore';
  export default {
    name: "Details",
    components:{
      WaitPayOrder,
      ReceiveOrder,
      WaitDeliverGoods,
      AlreadyDeliverGoods,
      OrderResult,
    },
    data(){
      return{
        list:['买家提交订单','买家付款','商家接单','商家发货','买家确认收货','订单结算'],
        choose:2,
        source:{},
        index:0,
        invoiceRule:false,    //是否显示发票框
        logistics:false,      //是否显示物流详情
        logisticsAmend:false,
        currentTabComponent:'',//加载什么页面
        logisticsAmendForm:{
          code:'',
          company:[],
        },
        logisticsAmendRules:{
          code:[{required: true, message: '至少输入5位数的运单号', trigger: 'blur'}]
        },
        expressCompany: [
          {value: 'A', label: 'A', children: [{value: '安能物流', label: '安能物流',}, {value: '澳世速递', label: '澳世速递',}]},
          {value: 'B', label: 'B', children: [{value: '百世快通', label: '百世快通',}, {value: '百世快递', label: '百世快递',}]},
        ],
        orderInfo:{
          rowVer:'',//版本号
          buyer:{},//购买人信息
          createAt:'',//下单时间
          payAt:'',//支付时间
          acceptAt:'',//接单时间
          completeAt:'',//收货时间
          cancelAt:'',//取消时间
          shipAt:'',//发货时间
          message:'',//买家留言
          invoiceTitle:'',//发票信息
          invoiceCode:'',//纳税人识别号
          orderNo:'',//订单号
          recipient:{},//收件人信息
          goods: [],//购买的商品
          packages:{expressNo :'',expressName :''},//包裹
          changeAmountRemark:'',//改价说明
          payment:{},//付款人信息
          buttons:'',//订单安全
          globalState:0,
          sellerTag:'',//标记
          state:0, //订单状态
          latestTaskDate:''//任务提示时间
        },
      }
    },
    methods:{
      change(val){
        this.choose=val
      },
      validTime(date) {
        return date && date !== "1900-01-01 00:00:00";
      },
      handleShow(){
        this.isShow=!this.isShow
      },
      print(){
        this.$router.push({name:'Printer'});
      },
      logisticsAmendSure(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      logisticsAmendCancel(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      let sessionId=sessionStorage.getItem('sessionId')
      let date=new Date()
      date=moment(date).format('YYYY-MM-DD HH:mm:ss')
      //GetProvinceList.call(this,`?input.sessionId=${sessionId}&input.clientTimespan=${date}`).then((res)=>{
         //console.log('df',res)
      //})

      this.orderNo =this.$route.query.orderNo;
      this.orderType= this.$route.query.type;
      this.time = new Date().toLocaleString();
      GetOrderDetial.call(this,`?input.orderNo=${this.orderNo}&input.orderType=${this.orderType}&input.clientTimespan=${this.time}`).then(res=>{
        if(res.data.code === 1){
          let data = res.data.data;
          let father = data;
          var editPrice=  _.any(data.buttons, item => item.id === 2000);//修改价格 待付款
          var acceptOrder =_.any(data.buttons, item => item.id === 2001);//待结单
          if (editPrice ==true || acceptOrder==true)
          {
            this.currentTabComponent = "WaitPayOrder";
            father["editPrice"]= editPrice;
            father["acceptOrder"]= acceptOrder;
          }
          let settle = data.globalState === 666666;//结算
          let cancel = _.contains([403, 404, 402, 401, 400], data.state);//取消订单
          let receive = _.contains([601, 600], data.state) && _.contains([1, 6], data.globalState);//确认收货
          if(cancel ==true || settle ==true || receive==true)
          {
            this.currentTabComponent = "OrderResult";
            let stateName='';
             if (cancel==true) { stateName="已取消";}
             if (settle ==true) {stateName="已结算";}
             if (receive ==true) {stateName="买家已收货";}
            father["stateName"]= stateName;
            father["cancel"]= cancel;
            father["receive"]= receive;
            father["payMoney"]= data.payment.realMoney;
          }
          this.orderInfo = data;
          this.source =father;
        }
      });
    },
    mounted(){

    }
  }
</script>

<style lang="less" scoped>
  @import "./less/deal.less";





</style>
