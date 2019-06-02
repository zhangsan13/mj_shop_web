<template>
  <!--我要举报-->
  <div class="container">
    <!--筛选-->
    <div class="filtrate">
        <div class="filtrate-search"><span>订 单 号：</span><el-input style="width: 170px;" v-model="queryCondition.orderNo" placeholder="请输入订单号"></el-input></div>
        <div class="filtrate-search"><span>建议类型：</span><el-select style="width: 170px;" v-model="queryCondition.suggestType" placeholder="全部处理状态"><el-option v-for="item in suggestOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>处理状态：</span><el-select style="width: 170px;" v-model="queryCondition.suggestState" placeholder="全部"><el-option v-for="item in disposeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>建议时间：</span>
            <el-date-picker v-model="queryCondition.beginTime" type="datetime" placeholder="选择开始时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            至
            <el-date-picker v-model="queryCondition.endTime" type="datetime" placeholder="选择结束时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
        </div>
        <div class="filtrate-search">
            <el-button type="primary" @click="initTableData()">查询</el-button><el-button type="info" @click="queryConditionClear()">重置</el-button>
        </div>
    </div>

    <div class="suggest-btn"><el-button @click="inform">我要举报</el-button></div>
    <!--表格列表-->
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column label="序号" type="index" width="50">

        </el-table-column>
        <el-table-column label="提交时间">
          <template slot-scope="scope">
            <span>{{scope.row.time}}</span>
          </template>
        </el-table-column>
        <el-table-column label="建议类型">
          <template slot-scope="scope">
            <span>{{scope.row.suggest}}</span>
          </template>
        </el-table-column>
        <el-table-column label="处理状态">
          <template slot-scope="scope">
            <span>{{scope.row.dispose}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span class="operation" @click="handleLook(scope.$index, scope.row)">查看详情</span>
          </template>
        </el-table-column>

        <el-table-column label="信誉分">
          <template slot-scope="scope">
            <span>{{scope.row.credit}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--分页-->
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="page.currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import ReportList from '../../../api/client/reportList';
export default {
    name: "inform",
    data(){
      return{
        input:'',
        value:'',
        suggestOptions:[{value: '全部建议类型', label: '全部建议类型'},{value: '产品功能', label: '产品功能'},{value: '用户体验', label: '用户体验'},{value: '满集服务', label: '满集服务'},{value: '其他建议', label: '其他建议'},],
        disposeOptions:[{value: '全部处理状态', label: '全部处理状态'},{value: '待处理', label: '待处理'},{value: '已处理', label: '已处理'},],
        tableData: [{ time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20',},
          { time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20',},
          { time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20',},
          { time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20',},
        ],
        queryCondition: {
            suggestType: '', //建议类型 - 直接传中文
            suggestState: '', //处理状态 FINISHED:已处理 NOT_DISPOSE:未处理
            beginTime: '', //开始时间 格式： yyyy-MM-dd HH:mm:ss
            endTime: '', //结束时间 格式： yyyy-MM-dd HH:mm:ss
            orderNo: ''
        },
        page: {
            currentPage: 1,
            currentPageSize: 10,
            total: 0
        }
      }
    },
    mounted: function(){
        this.initTableData();
    },
    methods: {
        initTableData: function(){
            ReportList.call(this, 
                '?suggestType=' + this.queryCondition.suggestType + 
                '&suggestState=' + this.queryCondition.suggestState + 
                '&orderNo' + this.queryCondition.orderNo + 
                '&beginTime='+ this.queryCondition.beginTime + 
                '&endTime=' + this.queryCondition.endTime + 
                '&clientVersion=1.0.0' + 
                '&clientTimespan=' + this.$Tool.formatDate(new Date())
            ).then(res => {
                this.tableData = res.data.data;
            })
        },
        queryConditionClear: function(){
            this.queryCondition = {
                suggestType: '', //建议类型 - 直接传中文
                suggestState: '', //处理状态 FINISHED:已处理 NOT_DISPOSE:未处理
                beginTime: '', //开始时间 格式： yyyy-MM-dd HH:mm:ss
                endTime: '', //结束时间 格式： yyyy-MM-dd HH:mm:ss
                orderNo: ''
            }
            this.initTableData();
        },
        inform(){
            this.$router.push({name:'Submit', query: {pageType: 1}})
        },
        handleLook(index, row) {
            this.$router.push({name:'SuggestInformDetails', query: {sheetId: row.id}});
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style lang="less" scoped>
  @import "less/inform.less";
</style>
