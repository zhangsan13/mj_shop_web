<template>
  <!--接单-->
  <div class="container">
    <!--<ul class="title">-->
      <!--<li v-for="(item,index) in list" :class="index===2?'choose':''" :key="index">{{index+1}}.{{item}}</li>-->
    <!--</ul>-->
    <div class="main">
      <div class="head-remind">
        <ul>
          <span>重要提醒：</span>
          <li>一、1小时未接单，系统提醒经办人；</li>
          <li>二、2小时未接单，系统提醒负责人；</li>
          <li>三、3小时未接单，客服提醒经办人、负责人；</li>
          <li>四、4小时未接单，系统自动取消订单并退款</li>
        </ul>
      </div>

      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品"
            width="480">
            <template slot-scope="scope">
              <div class="goods">
                <img :src="scope.row.src" alt="">
                <div>{{scope.row.infor}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="规格"
            width="220">
            <template slot-scope="scope">
              <div class="specification">
                <div>颜色分类：{{scope.row.color}}</div>
                <div>商品编号：{{scope.row.serialNum}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="数量"
            width="100">
            <template slot-scope="scope">
              <div class="number">{{scope.row.num}}件</div>
            </template>
          </el-table-column>
          <el-table-column
            label="金额"
            width="100">
            <template slot-scope="scope">
              <div class="money">{{scope.row.money}}</div>
            </template>
          </el-table-column>


          <el-table-column label="操作" width="400">
            <template slot-scope="scope">
              <div class="operation">
                <ul>
                  <li class="btnone" @click="handleOne(scope.$index,scope.row,scope)">立即接单</li>
                  <li class="btntwo" @click="handleTwo(scope.$index,scope.row,scope)">无货退款</li>
                  <li class="btnthree hide" @click="handleThree(scope.$index,scope.row,scope)">延迟发货</li>
                  <li class="btnfour hide" @click="handleFour(scope.$index,scope.row,scope)">暂时无货</li>
                  <li class="btnfive hide" @click="handleFive(scope.$index,scope.row,scope)">永久无货</li>
                </ul>
              </div>

            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="foot">
        <ul class="foot-left">
          <li><span>发票抬头：</span>重庆满集网络科技有限公司</li>
          <li><span>纳税人识别号：</span>91500105MA5U44R75T</li>
          <li><span>发票类型：</span>普通发票</li>
          <li><span>发票内容：</span>商品明细</li>
          <li><span>下单时间：</span>2016-08-09 16：15：05  </li>
          <li><span>支付时间：</span>2016-08-09 16：15：05  </li>
        </ul>

        <ul class="foot-right">
          <li>商品总数：5个</li>
          <li>商品总价：<span></span>  ¥  300.00</li>
          <li>修改价格：<span>-</span> ¥  20.00</li>
          <li>商品优惠：<span>-</span>  ¥ 15.00</li>
          <li>店铺优惠：<span>-</span>  ¥  20.00</li>
          <li>平台优惠：¥  0.00</li>
          <li>运费: <span>-</span>  ¥ 10.00</li>
          <li>订单总额：¥ 255.00</li>
          <li>退款金额：¥  0.00</li>
          <li>应收款：<span style="color:#ff6600;">¥  390.00</span></li>
        </ul>
      </div>

      <div class="btn">
        <el-button type="primary">确定接单</el-button>
      </div>
    </div>




    <!--弹框-->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFlag"
      width="400"
      center>

      <!--延迟发货-->
      <div class="delay" v-if="dialogShowType==='delay'">
        <span>重要提醒：</span>
        <p>1、仅能延迟发货1次</p>
        <p>2、延迟发货时间最长为<span>4天</span></p>
        <p>3、<span>12小时</span>内买家不同意则取消订单</p>
        <div class="delay-day"><span class="delay-title">延迟天数：</span>
          <el-select v-model="delayDay" placeholder="请选择">
            <el-option
              v-for="item in delayDayList"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="delay-date"><span class="delay-title">延迟发货时间：</span>2019-03-22 18:32:02</div>
      </div>

      <!--暂时无货-->
      <div class="wait" v-if="dialogShowType==='wait'">
        <span>重要提醒：</span>
        <p>1、商品暂时无货请填写无货起止时间（不超过<span>30天</span>）</p>
        <p>2、暂时无货商品下架</p>
        <p>3、到货后商品自动上架</p>
        <p>暂时无货时间：共计<span>12天</span></p>
        <div class="wait-date">
          <el-date-picker
            v-model="waitDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="请选择到货时间">
          </el-date-picker>
        </div>
      </div>

      <!--下架审核-->
      <div class="sell" v-if="dialogShowType==='sell'">
        <div class="sell-infor">
          <img :src="sellSrc" alt="">
          <div class="sell-infor-content">
            <p>PMT 一体成型 骑行头盔单车头盔 飞娃发阿尔飞娃发阿尔飞娃发阿尔飞娃发阿尔飞娃发阿尔飞娃发阿尔</p>
            <p>颜色分类：黑/红（亚光）</p>
            <p>商品编号：123456648642300</p>
          </div>
        </div>
        <p>店铺名称：<span>雪宝山旗舰店</span></p>
        <p>商家负责人：<span>张三</span></p>
        <p>联系电话：<span>18580661042</span></p>
        <p>下架原因：<span>永久无货</span></p>
        <div class="sell-reason">
          <span>下架理由：</span>
          <div class="sell-textarea">
            <el-input type="textarea" resize="none" autosize maxlength="50" placeholder="50字以内" v-model="sellReason"></el-input>
          </div>
        </div>
        <p>重要提醒：请务必联系商家核实下架原因</p>
      </div>

      <!--其他弹框-->
      <div v-if="dialogShowType==='public'">
        <div style="text-align: center" v-html="dialogValue"></div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFlag = false">确 定</el-button>
        <el-button  @click="dialogFlag = false">取 消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>

  export default {
    name: "receiveOrder",
    data(){
      return{
        list:['买家提交订单','买家付款','商家接单','商家发货','买家确认收货','订单结算'],
        tableData: [{src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', infor:'PMT 一体成型 骑行头盔单车头盔 飞娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法', color:'黑/红（亚光)', serialNum:'123456648642300', num:5, money:'70:00',},
          {src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', infor:'PMT 一体成型 骑行头盔单车头盔 飞娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法', color:'黑/红（亚光)', serialNum:'123456648642300', num:5, money:'70:00',},
          {src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', infor:'PMT 一体成型 骑行头盔单车头盔 飞娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法', color:'黑/红（亚光)', serialNum:'123456648642300', num:5, money:'70:00',},
          {src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', infor:'PMT 一体成型 骑行头盔单车头盔 飞娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法娃儿发阿尔法', color:'黑/红（亚光)', serialNum:'123456648642300', num:5, money:'70:00',}],
        dialogFlag:false,
        dialogShowType:'',
        dialogTitle:'提示',   //弹框标题
        delayDay:'',    //延迟天数
        delayDayList:['1天','2天','3天','4天'],
        waitDate:'',    //暂时无货时间
        sellSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',   //下架src
        sellReason:'',  //下架理由
        dialogValue:`你有<span style="color:#e60012;">1个</span>未接订单，请尽快接单`,
      }
    },
    methods:{

      clearState(index){
        document.getElementsByClassName('btnone')[index].classList.remove('choose');
        document.getElementsByClassName('btnthree')[index].classList.remove('choose');
        document.getElementsByClassName('btnfour')[index].classList.remove('choose');
        document.getElementsByClassName('btnfive')[index].classList.remove('choose');
      },
      //立即接单
      handleOne(index,row,scope){
        console.log(index,row,scope);
        this.clearState(index);
        document.getElementsByClassName('btnone')[index].classList.add('choose');
      },
      //无货退款
      handleTwo(index,row,scope){
        document.getElementsByClassName('btntwo')[index].classList.add('hide');
        document.getElementsByClassName('btnthree')[index].classList.remove('hide');
        document.getElementsByClassName('btnfour')[index].classList.remove('hide');
        document.getElementsByClassName('btnfive')[index].classList.remove('hide');

      },
      // 延迟发货   delay
      handleThree(index,row,scope){
        this.clearState(index);
        document.getElementsByClassName('btnthree')[index].classList.add('choose');
        this.dialogTitle='延迟发货';
        this.dialogShowType='delay';
        this.dialogFlag=true;
      },
      //暂时无货  wait
      handleFour(index,row,scope){
        this.clearState(index);
        document.getElementsByClassName('btnfour')[index].classList.add('choose');
        this.dialogTitle='暂时无货';
        this.dialogShowType='wait';
        this.dialogFlag=true;
      },
      //永久无货  sell
      handleFive(index,row,scope){
        this.clearState(index);
        document.getElementsByClassName('btnfive')[index].classList.add('choose');
        this.dialogTitle='下架审核';
        this.dialogShowType='sell';
        this.dialogFlag=true;
      },





    },
    created(){
        this.$parent.change(3);
    }
  }
</script>

<style lang="less" scoped>
  @import "less/receiveOrder.less";
</style>
