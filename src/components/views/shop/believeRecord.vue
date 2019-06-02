<template>
  <div class="warp_bg">
    <!--条件筛选开始-->
    <div class="screen">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="时间:">
          <el-date-picker
            v-model="time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="加分/扣分:">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="searchBtn">搜索</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="default" @click="goBack">返回</el-button>
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
            prop="time"
            label="时间"
            align="center"
            width="200">
          </el-table-column>
          <el-table-column
            prop="type"
            label="来源分类"
            align="center"
            width="170">
          </el-table-column>
          <el-table-column
            prop="event"
            label="事件"
            align="center"
            width="110">
          </el-table-column>
          <el-table-column
            prop="decs"
            align="center"
            label="事件描述">
          </el-table-column>
          <el-table-column
            prop="score"
            align="center"
            label="分值"
            width="120">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="其他处罚/处理"
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
        options: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '加分'
        }, {
          value: '3',
          label: '扣分'
        }],
        value: '',
        time: '',
        currentPage: 1,
        tableData: [
          {
            num: '1',
            time: '2019-03-22 15:21:51',
            type: '一般违规',
            event: '描述不符',
            decs: ' 商品标题、图片、类目、属性等信息描述与商品实物不符',
            score: '-2分',
            operation: '/',
          },
          {
            num: '2',
            time: '2019-03-22 15:21:51',
            type: '一般违规',
            event: '取消订单',
            decs: ' 商家在买家付款后实际未在 12小时内接单 造成系统自动订单取消',
            score: '-2分',
            operation: '/',
          },
        ],

      }
    },
    methods: {

      searchBtn() {
        console.log('submit!');
      },

      /**
       * 返回
       */
      goBack () {
        this.$router.push({name: 'ShopReputation'});
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
