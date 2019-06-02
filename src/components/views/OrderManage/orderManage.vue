<template>

  <div class="warp_bg">

    <div class="top_title">
      <el-button type="primary">全部订单</el-button>
      <el-button type="info" @click="afterSaleBtn">退款售后</el-button>
    </div>

    <div class="table_box">
      <ul>
        <li class="cur">普通售物 <i></i> </li>
        <li>满集到家 <i></i> </li>
        <li>满集拼购 <i></i> </li>
        <li>全球购 <i></i> </li>
        <li>奢侈品 <i></i> </li>
      </ul>
    </div>

    <!--条件筛选开始-->
    <div class="screen">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="商品名称:">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="订单号:">
          <el-input v-model="formInline.order" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="买家:">
          <el-input v-model="formInline.buy" placeholder="买家"></el-input>
        </el-form-item>
        <el-form-item label="下单日期:">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchBtn">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--条件筛选结束-->

    <!--订单分类开始-->
    <div class="order_class">
      <ul>
        <li class="cur">全部订单<i>{{orderCount.all}}</i></li>
        <li>拼单中<i>0</i></li>
        <li>待接单<i>{{orderCount.waitAccept}}</i></li>
        <li>待发货<i>{{orderCount.waitShip}}</i></li>
        <li>已发货<i>{{orderCount.shipped}}</i></li>
        <li>买家已收货<i>{{orderCount.received}}</i></li>
        <li>已取消<i>{{orderCount.canceled}}</i></li>
        <li>已结算<i>{{orderCount.settled}}</i></li>
        <li>交易关闭<i>{{orderCount.closed}}</i></li>
      </ul>
    </div>
    <!--订单分类结束-->

    <!--表格列表开始-->
    <div class="table_list">
      <table class="all_title" border="0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th width="30%">商品</th>
            <th width="13%">单价</th>
            <th width="13%">数量</th>
            <th width="13%">买家</th>
            <th width="13%">交易状态</th>
            <th>实收款</th>
          </tr>
        </thead>
      </table>
      <table class="list_title" border="0" cellspacing="" cellpadding="0">
        <thead>
          <tr>
            <th colspan="5"  > <p>下单时间: 2017-08-31 14:13:37</p>  <p>订单号: 53695636821192875</p> <span>拼购</span>  </th>
            <th><i class="iconfont icon-biaoji" @click="biaojiBtn"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="30%">
              <div class="pro_de">
                <div class="left">
                  <img src="./img/pic1.jpg" alt="">
                </div>
                <div class="right">
                  <p class="title"> PMT 一体成型 骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔 山地公路自行车头盔骑行装</p>
                  <p class="color_class">颜色分类：黑色</p>
                </div>
              </div>
            </td>
            <td width="13%">￥20.00</td>
            <td width="13%">
              2
              <p style="color: #409EFF">已发货</p>
              <p style="color:#E6A23C;">未发货</p>
              <p style="color: #F56C6C">已确认收货</p>
              <p style="color: #67C23A">退款完成</p>
            </td>
            <td width="13%" rowspan="50">
              <p>张三</p>
              <i class="iconfont icon-xinxi"></i>
            </td>
            <td width="13%" rowspan="50">
              <div class="td_stata">
                <el-button size="mini" type="primary" plain>发货</el-button>
                <el-button size="mini" type="success" plain>详情</el-button>
                <el-button size="mini" type="warning" plain>待发货</el-button>
                <el-button size="mini" type="info" @click="modifyPriceBtn">修改价格</el-button>
              </div>
            </td>
            <td rowspan="50">
              ￥50.00
              (含运费:￥10.00)
            </td>
          </tr>
        </tbody>
      </table>
      <table class="list_title" border="0" cellspacing="" cellpadding="0">
        <thead>
          <tr>
            <th colspan="5"  > <p>下单时间: 2017-08-31 14:13:37</p>  <p>订单号: 53695636821192875</p> <span>拼购</span>  </th>
            <th><i class="iconfont icon-biaoji" @click="biaojiBtn"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="30%">
              <div class="pro_de">
                <div class="left">
                  <img src="./img/pic1.jpg" alt="">
                </div>
                <div class="right">
                  <p class="title"> PMT 一体成型 骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔 山地公路自行车头盔骑行装</p>
                  <p class="color_class">颜色分类：黑色</p>
                </div>
              </div>
            </td>
            <td width="13%">￥20.00</td>
            <td width="13%">2</td>
            <td width="13%" rowspan="50">
              <p>张三</p>
              <i class="iconfont icon-xinxi"></i>
            </td>
            <td width="13%" rowspan="50">
              <div class="td_stata">
                <el-button size="mini" type="primary" plain>发货</el-button>
                <el-button size="mini" type="success" plain>详情</el-button>
                <el-button size="mini" type="warning" plain>待发货</el-button>
                <el-button size="mini" type="info" @click="modifyPriceBtn">修改价格</el-button>
              </div>
            </td>
            <td rowspan="50">
              ￥50.00
              (含运费:￥10.00)
            </td>
          </tr>
          <tr>
            <td width="30%">
              <div class="pro_de">
                <div class="left">
                  <img src="./img/pic1.jpg" alt="">
                </div>
                <div class="right">
                  <p class="title"> PMT 一体成型 骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔 山地公路自行车头盔骑行装</p>
                  <p class="color_class">颜色分类：黑色</p>
                </div>
              </div>
            </td>
            <td width="13%">￥20.00</td>
            <td width="13%">2</td>
          <tr>
            <td width="30%">
              <div class="pro_de">
                <div class="left">
                  <img src="./img/pic1.jpg" alt="">
                </div>
                <div class="right">
                  <p class="title"> PMT 一体成型 骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔骑行头盔单车头盔 山地公路自行车头盔骑行装</p>
                  <p class="color_class">颜色分类：黑色</p>
                </div>
              </div>
            </td>
            <td width="13%">￥20.00</td>
            <td width="13%">2</td>
          </tr>
        </tbody>
      </table>
      <!--暂无数据开始-->
      <table class="list_title">
        <tbody>
          <tr>
            <td>暂无数据</td>
          </tr>
        </tbody>
      </table>
      <!--暂无数据结束-->
    </div>
    <!--表格列表结束-->

    <!--页码开始-->
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <!--页码结束-->

    <!--标记信息弹窗开始-->
    <el-dialog
      title="标记信息"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="biaoji_popup">
        <span>标记信息仅自己可见。可标记买家修改的收货信息、发票信息等。</span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <el-form-item label="" prop="desc">
            <el-input
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 10}"
              placeholder="请输入内容"
              v-model="ruleForm.desc">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </span>
    </el-dialog>
    <!--标记信息弹窗结束-->

    <!--修改价格弹窗开始-->
    <el-dialog
      title="修改价格"
      :visible.sync="modifyPrice"
      width="30%">
      <div class="biaoji_popup">
        <el-form :model="priceruleForm" :rules="pricerules" ref="priceruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品总价" prop="total_price">
            <el-input v-model="priceruleForm.total_price"></el-input>
          </el-form-item>
          <el-form-item label="订单运费" prop="freight">
            <el-input v-model="priceruleForm.freight"></el-input>
          </el-form-item>
          <el-form-item label="修改说明：" prop="desc">
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 6}"
              placeholder="请输入内容"
              v-model="priceruleForm.desc">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="modifyPrice = false">取 消</el-button>
    <el-button type="primary" @click="submitFormPrice('priceruleForm')">确 定</el-button>
  </span>
    </el-dialog>
    <!--修改价格弹窗结束-->

  </div>

</template>

<script>
  import GetCountOrderByState from '../../../api/Order/GetCountOrderByState'
  export default {
    data(){
      return{
        formInline: {
          user: '',
          order: '',
          buy: '',
        },//商品名称、订单号、买家
        value1: '',//日期
        currentPage: 1,//当前页码
        dialogVisible: false,//标记信息弹窗是否显示
        modifyPrice: false,//修改价格弹窗是否显示

        ruleForm: {
          name: '',
        },
        rules:{
          desc: [
            { required: true, message: '标记信息1-100字', trigger: 'blur' },
            { min: 1, max: 100, message: '标记信息不能超过100字', trigger: 'blur' }
          ]
        },//标记信息弹窗输入框里面的验证

        priceruleForm: {
          total_price: '',
          freight: '',
          desc: '',
        },
        pricerules:{
          total_price: [
            { required: true, message: '商品总价不能为0且不能为空', trigger: 'blur' },
            { min: 1, message: '价格位数字', trigger: 'blur' }
          ],
          freight: [
            { required: true, message: '请填写运费', trigger: 'blur' },
            { min: 1, message: '运费为数字', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '标记信息1-100字', trigger: 'blur' },
            { min: 1, max: 20, message: '不能超过20个字', trigger: 'blur' }
          ]
        },//修改价格弹窗输入框里面的验证
        orderCount:{
          waitAccept:0, //待接单 ,
          waitShip:0, // 待发货 ,
          shipped:0, // 已发货 ,
          received:0,// 已收货 ,
          settled:0, //已结算 ,
          canceled:0, // 已取消 ,
          closed:0, // 交易关闭 ,
          waitPay:0, // 待付款 ,
          refunding:0, // 退款/售后 ,
          all:0, // 全部
        }
      }
    },

    methods:{

      searchBtn() {
        console.log('submit!');
      },

      /**
       * 标记信息
       * @param i
       */
      biaojiBtn(i){
        this.dialogVisible = true;
      },

      /**
       * 页码
       * @param val
       */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      /**
       * 标记信息弹窗确定按钮
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       * 修改价格弹窗确定按钮
       * @param formName
       */
      submitFormPrice(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.modifyPrice = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },


      /**
       * 修改价格
       */
      modifyPriceBtn(){
        this.modifyPrice = true;
      },

      /**
       * 点击跳转退款售后
       */
      afterSaleBtn(){
        this.$router.push({path:'afterSale'})
      },
    },
    created: async function(){
      this.time = new Date().toLocaleString()
      GetCountOrderByState.call(this,`?input.clientTimespan=${this.time}`).then(res=>{
          if(res.data.code === 1){
             var data = res.data.data
             this.orderCount = data

          }
      })
    }
  }
</script>

<style lang="less" scoped>

  .warp_bg{
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    background: #fff;
    .top_title{
      padding: 20px 5px;
    }
    .table_box{
      border-top: 2px #21fbee solid;
      ul{
        width: 100%;
        height: 45px;
        padding: 0 20px;
        box-sizing: border-box;
        border-bottom: 1px #e4ebf1 solid;
        li{
          width: auto;
          height: 100%;
          line-height: 45px;
          font-size: 14px;
          padding: 0 10px;
          float: left;
          cursor: pointer;
          color: #666666;
          position: relative;
          i{
            width: 80%;
            height: 2px;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: 10%;
          }
          &:hover{
            i{
              width: 80%;
              height: 2px;
              background: #00a2ff;
              position: absolute;
              bottom: 0;
              left: 10%;
            }
          }
        }
        .cur{
          i{
            width: 80%;
            height: 2px;
            background: #00a2ff;
            position: absolute;
            bottom: 0;
            left: 10%;
          }
        }
      }
    }
    .screen{
      width: auto;
      height: auto;
      margin: 20px;
      padding: 20px 20px 0 20px;
      background: #ecf4fa;
      border-bottom: 1px #78ccfc solid;
    }
    .order_class{
      width: auto;
      height: 35px;
      margin-top: 30px;
      ul{
        li{
          padding: 0 25px;
          float: left;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          color: #333333;
          position: relative;
          border-right: 1px #cccccc solid;
          &:last-child{
            border-right: none;
          }
          &:hover{
            color: #00a2ff;
          }
          i{
            width: auto;
            height: auto;
            background: #ff000c;
            color: #fff;
            padding: 0 5px;
            border-radius: 3px;
            position: absolute;
            right: 5px;
            top: -5px;
          }
        }
        .cur{
          color: #00a2ff;
        }
      }
    }
    .table_list{
      width: auto;
      height: auto;
      padding: 20px;
      .all_title{
        width: 100%;
        height: 50px;
        border-collapse: collapse;
        thead{
          width: 100%;
          height: 100%;
          background: #f1f1f3;
          tr{
            th{
              height: 50px;
              background: #f1f1f3;
              border: 1px #e1e1e1 solid;
              font-size: 14px;
              color: #333333;
            }
          }
        }
      }
      .list_title{
        width: 100%;
        height: auto;
        margin-top: 20px;
        border-collapse: collapse;
        thead{
          width: 100%;
          height: auto;
          tr{
            width: 100%;
            height: auto;
            th{
              width: auto;
              height: 30px;
              text-align: left;
              border-top: 1px #e1e1e1 solid;
              background: #f1f1f3;
              color: #666666;
              font-weight: normal;
              padding-left: 20px;
              p{
                display: inline-block;
                margin-right: 20px;
              }
              span{
                width: auto;
                height: 18px;
                background: #e60012;
                color: #fff;
                font-size: 12px;
                display: inline-block;
                font-style: normal;
                padding: 0 5px;
                margin-left: 20px;
              }
              i{
                font-size: 24px;
                color: #666;
                margin-right: 20px;
                cursor: pointer;
                &:hover{
                  color: #00a2ff;
                }
              }
            }
          }
        }
        tbody{
          text-align: center;
          tr{
            td{
              height: 110px;
              border: 1px #e1e1e1 solid;
              padding: 0 20px;
              .pro_de{
                display: table;
                .left{
                  display: table-cell;
                  vertical-align: middle;
                  text-align: left;
                  img{
                    width: 66px;
                    height: 66px;
                  }
                }
                .right{
                  display: table-cell;
                  vertical-align: middle;
                  text-align: left;
                  padding-left: 10px;
                  .title{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                  }
                  .color_class{
                    margin-top: 10px;
                    color: #a1a1a1;
                  }
                }
              }
              .td_stata{
                button{
                  display: inline-block;
                  margin: 5px;
                }
              }
              .icon-xinxi{
                font-size: 18px;
                margin-top: 10px;
                color: #ff0000;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .page{
      text-align: right;
      padding: 20px;
    }
    .biaoji_popup{
      span{
        color: #F56C6C;
        display: inline-block;
        margin-bottom: 20px;
      }
    }
  }

</style>
