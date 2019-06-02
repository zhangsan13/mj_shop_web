<template>
    <!--我要建议-->
    <div class="container">
        <!--筛选-->
        <div class="filtrate">
            <div class="filtrate-search"><span>建议类型：</span>
                <el-select style="width: 170px;" v-model="queryCondition.suggestType" placeholder="全部处理状态">
                    <el-option v-for="item in suggestOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="filtrate-search"><span>处理状态：</span>
                <el-select style="width: 170px;" v-model="queryCondition.suggestState" placeholder="全部">
                    <el-option v-for="item in disposeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="filtrate-search"><span>建议时间：</span>
                <!--<el-input style="width: 214px;" v-model="input" placeholder="2019-01-01 00:00:00 至 2019-02-20 23:59:59"></el-input>-->
                <el-date-picker v-model="queryCondition.beginTime" type="datetime" placeholder="选择开始时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                至
                <el-date-picker v-model="queryCondition.endTime" type="datetime" placeholder="选择结束时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </div>
            <div class="filtrate-search">
                <el-button type="primary" @click="initTableData()">查询</el-button>
                <el-button type="info" @click="queryConditionClear()">重置</el-button>
            </div>
        </div>
        <div class="suggest-btn"><el-button @click="suggest">我要建议</el-button></div>
    <!--表格列表-->
    <div class="table-list">
        <el-table ref="Table" :data="tableData" style="width: 100%" :border="true" @selection-change="selectChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" type="index" width="50"></el-table-column>
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
        :page-sizes="[2, 10, 30, 50, 100]"
        :page-size="page.currentPageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import SuggestList from '../../../api/client/suggestList';
export default {
    name: "suggest",
    data(){
        return{
            input:'',
            value:'',
            suggestOptions:[{value: '全部建议类型', label: '全部建议类型'},{value: '产品功能', label: '产品功能'},{value: '用户体验', label: '用户体验'},{value: '满集服务', label: '满集服务'},{value: '其他建议', label: '其他建议'},],
            disposeOptions:[{value: '全部处理状态', label: '全部处理状态'},{value: 'NOT_DISPOSE', label: '待处理'},{value: 'FINISHED', label: '已处理'},],
            tableData: [{
                id: 379, time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20',
            },{
                id: 380, time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20'
            },{
                id: 381, time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20'
            },{
                id: 382, time:'2019-03-22 12:12:12', suggest:'滥发信息', dispose:'处理中',credit:'-20'
            }],
            selectIds: [],
            selectDatas: [],
            currentClick: {},
            queryCondition:{
                suggestType: '', //建议类型 - 直接传中文
                suggestState: '', //处理状态 FINISHED:已处理 NOT_DISPOSE:未处理
                beginTime: '', //开始时间 格式： yyyy-MM-dd HH:mm:ss
                endTime: '' //结束时间 格式： yyyy-MM-dd HH:mm:ss
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
            SuggestList.call(this, 
                '?suggestType=' + this.queryCondition.suggestType + 
                '&suggestState=' + this.queryCondition.suggestState + 
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
                endTime: '' //结束时间 格式： yyyy-MM-dd HH:mm:ss
            }
            this.initTableData();
        },
        //我要建议
        suggest(){
            this.$router.push({name:'Submit', query: {pageType: 0}});
        },
        handleLook(index, row) {
            this.$router.push({name:'SuggestInformDetails', query: {sheetId: row.id}});
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPageSize = val;
            this.initTableData();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.initTableData();
        },
        selectChange: function(selection){
            if(selection.length == 0){
                for(var j = 0; j < this.tableData.length; j++){
                    this.selectIds.splice(this.selectIds.indexOf(this.tableData[j].id), 1);
                }
            }else{
                for(var i = 0; i < selection.length; i++){
                    if(this.selectIds.indexOf(selection[i].id) == -1){
                        this.selectIds.push(selection[i].id)
                    }else{
                        this.selectIds = this.selectIds.splice(this.selectIds.indexOf(selection[i].id), 1)
                    }
                }
            }
            console.log(this.selectIds)
        }
    }
}
</script>

<style lang="less" scoped>
  @import "less/suggest.less";
</style>
