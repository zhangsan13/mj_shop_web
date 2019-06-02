<template>
  <!--问答列表-->
  <div class="container">
    <ul class="title-btn"><li  @click="sikp">全部评论</li><li>问答列表</li></ul>
    <div class="line"></div>
    <div class="main">
      <!--筛选-->
      <div class="filtrate">
        <div class="filtrate-search"><span>商品名称：</span><el-input style="width: 170px;" v-model="input" placeholder="请输入订单编号"></el-input></div>
        <div class="filtrate-search"><span>回复状态：</span><el-select style="width: 170px;" v-model="value" placeholder="全部评论等级"><el-option v-for="item in replyOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>审核状态：</span><el-select style="width: 170px;" v-model="value" placeholder="全部评论等级"><el-option v-for="item in checkOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>提问时间：</span><el-input style="width: 214px;" v-model="input" placeholder="请输入订单编号"></el-input></div>
        <div class="filtrate-search"><el-button type="primary">查询</el-button><el-button type="info">重置</el-button></div>
      </div>

      <!--列表-->
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column label="提问内容" width="300">
            <template slot-scope="scope">
              <span>{{ scope.row.question }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品信息">
            <template slot-scope="scope">
              <span>{{ scope.row.infor }}</span>
            </template>
          </el-table-column>
          <el-table-column label="提问时间">
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="提问用户">
            <template slot-scope="scope">
              <span>{{ scope.row.user }}</span>
            </template>
          </el-table-column>
          <el-table-column label="回复状态">
            <template slot-scope="scope">
              <span>{{ scope.row.replyState }}</span>
            </template>
          </el-table-column>
          <el-table-column label="审核状态">
            <template slot-scope="scope">
              <span>{{ scope.row.checkState }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="operation" @click="handleReply(scope.$index, scope.row)">回复</span>
              <span class="operation" @click="handleLook(scope.$index, scope.row)">查看详情</span>
            </template>
          </el-table-column>
          <el-table-column label="信誉分">
            <template slot-scope="scope">
              <span>{{ scope.row.credit }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--分页-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>

    </div>

    <!--回复-->
    <el-dialog title="" :visible.sync="dialogReply" width="500px">
      <div class="dialog-reply">
        <div class="dialog-reply-title">回复评论：</div>
        <div class="dialog-reply-textarea">
          <el-input type="textarea" :autosize="{ minRows:8}" resize="none" maxlength="250" show-word-limit placeholder="请输入回复内容" v-model="reply">
          </el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div class="footer-btn">
          <el-button type="primary" @click="dialogReply = false">提交</el-button>
          <el-button @click="dialogReply = false">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--提问详情-->
    <el-dialog title="" :visible.sync="dialogDetails" width="556px">
      <div class="details">
        <div class="dialog-question">
          <div class="dialog-title">提问详情：</div>
          <ul class="question-details details-list">
            <li><span>1****5：</span><div>商品会有刺激性味道么?商品会有刺激性味道么?商品会有刺激性味道么?商品会有刺激性味道么?商品会有刺激性味道么?</div></li>
            <li><span>商品信息：</span><div>德芙巧克力情人节礼盒</div></li>
            <div class="time"><span>2019-03-06 12:45:36</span></div>
          </ul>
        </div>

        <div class="dialog-merchant-reply">
          <div class="dialog-title">商家回复：</div>
          <div class="merchant-reply">请放心，商品不会有任何刺激性气味的，请放心购买</div>
          <div class="time"><span>2019-03-06 12:45:36</span></div>
        </div>

        <div class="dialog-check-state">
          <div class="dialog-title">审核状态：</div>
          <div class="check-state">未通过</div>
          <ul class="details-list">
            <li><span>未通过原因：</span><div>回复内容中有诱导用户购买信息</div></li>
            <li><span>信誉分变化：</span><div>+3</div></li>
            <div class="time"><span>2019-03-06 12:45:36</span></div>
          </ul>
        </div>

      </div>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: "questionList",
    data(){
      return{
        input:'',
        value:'',
        replyOptions:[{value: '全部回复状态', label: '全部回复状态'},{value: '已回复', label: '已回复'},{value: '待回复', label: '待回复'}],
        checkOptions:[{value: '全部审核状态', label: '全部审核状态'},{value: '已通过', label: '已通过'},{value: '未通过', label: '未通过'}],
        tableData: [{question:'新收到的东西会不会有很强烈的刺激味道？', infor:'德芙巧克力情人节特推', date: '2016-05-02', user: '王小虎', replyState:'待回复', checkState:'已通过', credit:'+3',},
          {question:'新收到的东西会不会有很强烈的刺激味道？', infor:'德芙巧克力情人节特推', date: '2016-05-02', user: '王小虎', replyState:'待回复', checkState:'已通过', credit:'+3',},
          {question:'新收到的东西会不会有很强烈的刺激味道？', infor:'德芙巧克力情人节特推', date: '2016-05-02', user: '王小虎', replyState:'待回复', checkState:'已通过', credit:'+3',},
          {question:'新收到的东西会不会有很强烈的刺激味道？', infor:'德芙巧克力情人节特推', date: '2016-05-02', user: '王小虎', replyState:'待回复', checkState:'已通过', credit:'+3',},
        ],
        currentPage4: 4,
        dialogReply:false,
        reply:'',
        dialogDetails:false,
      }
    },
    methods:{
      sikp(){
        this.$router.push({name:'CommentManage'});
      },
      handleReply(index, row) {
        console.log(index, row);
        this.dialogReply=true;
      },
      handleLook(index, row) {
        console.log(index, row);
        this.dialogDetails=true;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

  }
</script>

<style lang="less" scoped>
  @import "less/questionList.less";
</style>
