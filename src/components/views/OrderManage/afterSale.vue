<template>
  <div class="warp_bg">

    <div class="top_title">
      <el-button type="info" @click="allOrderbtn">全部订单</el-button>
      <el-button type="primary">退款售后</el-button>
    </div>

    <div class="table_box">
      <ul>
        <li class="cur">待处理 (5)<i></i> </li>
        <li>处理中 (5)<i></i> </li>
        <li>已完成 (10)<i></i> </li>
      </ul>
    </div>

    <!--条件筛选开始-->
    <div class="screen">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="单号:">
          <el-input v-model="formInline.order" placeholder="单号"></el-input>
        </el-form-item>
        <el-form-item label="售后类型:">
          <el-input v-model="formInline.type" placeholder="售后类型"></el-input>
        </el-form-item>
        <el-form-item label="处理状态:">
          <el-input v-model="formInline.state" placeholder="处理状态"></el-input>
        </el-form-item>
        <el-form-item label="发起时间:">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="买家:">
          <el-input v-model="formInline.buy" placeholder="买家"></el-input>
        </el-form-item>

        <el-form-item label="商品名称:">
          <el-input v-model="formInline.name" placeholder="商品名称"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="searchBtn">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--条件筛选结束-->

    <!--表格内容开始-->
    <div class="table_list">
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="num"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            prop="orderNum"
            label="单号"
            align="center"
            width="130">
          </el-table-column>
          <el-table-column
            prop="time"
            label="发起时间"
            align="center"
            width="170">
          </el-table-column>
          <el-table-column
            prop="price"
            label="金额"
            align="center"
            width="110">
          </el-table-column>
          <el-table-column
            prop="afterPro"
            align="center"
            label="售后商品">
          </el-table-column>
          <el-table-column
            prop="buy"
            align="center"
            label="买家">
          </el-table-column>
          <el-table-column
            prop="type"
            label="售后类型"
            align="center">
            <template slot-scope="scope">
              <span>换货</span>
              <span>补发货</span>
              <span>仅退款</span>
              <span>退款退货</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="state"
            label="处理状态"
            align="center">
            <template slot-scope="scope">
              <span>待处理</span>
              <span>处理中</span>
              <span>已完成</span>
              <span>待确认</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作"
            align="center"
            width="100">
            <template slot-scope="scope">
              <el-button size="mini">处理</el-button>
              <el-button size="mini" type="primary" @click="AfterSaleDetailsBtn">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="score"
            label="信誉分"
            align="center"
            width="100">
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!--表格内容结束-->

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

  </div>
</template>

<script>
  export default {
    data(){
      return{
        formInline: {
          order: '',
          type: '',
          state: '',
          buy: '',
          name: '',
        },//商品名称、订单号、买家
        value1: '',
        currentPage: 1,
        tableData: [
          {
            num: '1',
            orderNum: '1256989325',
            time: '2019-03-22  15:21:51',
            price: '96.00',
            afterPro: '雅鹿男士春季衬衫',
            buy: '静静',
            type: '换货',
            state: '待处理',
            operation: '处理',
            score: '-20',
          },
          {
            num: '1',
            orderNum: '1256989325',
            time: '2019-03-22  15:21:51',
            price: '96.00',
            afterPro: '雅鹿男士春季衬衫',
            buy: '静静',
            type: '换货',
            state: '待处理',
            operation: '处理',
            score: '-20',
          },
        ],

      }
    },
    methods: {

      searchBtn() {
        console.log('submit!');
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
       * 点击切换全部订单
       */
      allOrderbtn(){
        this.$router.push({ path: 'orderManage' })
      },

      /**
       * 点击查看详情
       */
      AfterSaleDetailsBtn(){
        this.$router.push({ path: 'afterSaleDetails' })
      }

    }
  }
</script>

<style lang="less" scoped >

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
    .table_list{
      padding: 20px;
    }
    .page{
      padding: 20px;
      text-align: right;
    }
  }

</style>
