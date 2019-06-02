<template>
  <!--评论管理-->
  <div class="container">
    <ul class="title-btn"><li>全部评论</li><li @click="sikp">问答列表</li></ul>
    <div class="line"></div>
    <div class="main">

      <div class="grade">
        <div class="grade-left"></div>
        <ul class="grade-list"><li>超赞：56%  </li><li>满意：25% </li><li>一般：10%</li><li>较差：9%</li></ul>
        <ul class="grade-list"><li>描述：<span>4.8</span> 分</li><li>包装：<span>4.8</span> 分</li><li>服务：<span>4.8</span> 分</li><li>物流：<span>4.8</span> 分</li></ul>
      </div>

      <div class="filtrate-btn"><el-button @click="isFiltrate=!isFiltrate">筛选</el-button></div>
      <!--筛选-->
      <div class="filtrate" v-show="isFiltrate">
        <div class="filtrate-search"><span>订单编号：</span><el-input style="width: 170px;" v-model="input" placeholder="请输入订单编号"></el-input></div>
        <div class="filtrate-search"><span>商品名称：</span><el-input style="width: 170px;" v-model="input" placeholder="请输入商品名称"></el-input></div>
        <div class="filtrate-search"><span>评论关键字：</span><el-input style="width: 170px;" v-model="input" placeholder="全部回复状态"></el-input></div>
        <div class="filtrate-search"><span>用户名称：</span><el-input style="width: 170px;" v-model="input" placeholder="请输入用户名称"></el-input></div>
        <div class="filtrate-search"><span>评论等级：</span><el-select style="width: 170px;" v-model="value" placeholder="全部评论等级"><el-option v-for="item in commentOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>回复状态：</span><el-select style="width: 170px;" v-model="value" placeholder="全部回复状态"><el-option v-for="item in replyOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><span>评论时间：</span><el-input style="width: 200px;" v-model="input" placeholder="2019-01-01至2020-02-02"></el-input></div>
        <div class="filtrate-search"><span>审核状态：</span><el-select style="width: 170px;" v-model="value" placeholder="全部回复状态"><el-option v-for="item in checkOptions" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select></div>
        <div class="filtrate-search"><el-button type="primary">查询</el-button><el-button type="info">重置</el-button></div>
      </div>
      <!--列表-->
      <div class="show">
        <div class="show-title">
          <span class="order-code">订单号: 53695636821192875 </span><span class="commentator">评论人：1****4</span><i class="chat"></i><span class="order-time">下单时间：2019-03-21</span>
          <div class="evaluate"><i class="super"></i><span>超赞</span></div>
          <ul class="grade-infor"><li>描述：<span>4.8</span></li><li>包装：<span>4.8</span></li><li>服务：<span>4.8</span></li><li>物流：<span>4.8</span></li></ul>
          <ul class="show-title-right"><li>查看订单</li><li @click="dialogReply=true">回复</li><li>申请平台介入</li></ul>
        </div>
        <ul class="show-main">
          <li class="show-main-left">
            <div class="show-main-left-main">
              <img :src="imgSrc" alt="">
              <div class="img-right">
                <p>德芙巧克力 送闺蜜送女朋友送老婆情人节礼盒套装</p>
                <div>规格:情人节专属礼盒</div>
              </div>
            </div>
          </li>
          <li class="show-main-middle">
            <p>到货的时候包装都坏了，准备送女朋友生日礼物的，坏了都没法送</p>
            <div><span>2019-03-25 11:58:12</span><span class="look-infor" @click="dialogComment=true">查看详情</span><div class="intervene">已申请平台介入<span  class="look-infor" @click="platformIntervene">查看详情</span></div></div>
          </li>
          <li class="show-main-right">
            <div>信誉分<span>-30</span></div>
          </li>

        </ul>
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

      <!--评论详情弹框-->
      <el-dialog title="评论详情" :visible.sync="dialogComment" width="500px">
        <div class="dialog-comment">
          <div class="comment">
            <div class="comment-title"><span class="time">2018-12-25 12:54:47</span></div>
            <div class="comment-main">包装很好，很精致，女朋友很喜欢哦，味道也很好，超赞包装很好，很精致，女朋友很喜欢哦，味道也很好，超赞</div>
            <ul class="comment-img">
              <li><img :src="imgSrc" alt=""></li>
            </ul>
          </div>

          <div class="goods-reply">
            <span class="goods-reply-title">商家回复：</span>
            <div class="goods-reply-main">感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！感谢亲的喜欢哦！</div>
            <div class="goods-reply-time"><span class="time">2018-12-25 12:54:47</span></div>
          </div>

          <ul class="check">
            <li><span class="check-title">审核状态：</span><span class="state">未通过</span></li>
            <li><span class="check-title">未通过原因：</span><span>回复内容中有诱导用户购买信息！</span></li>
            <li><span class="check-title">信誉分变化：</span><span>+3</span></li>
            <div class="check-time"><span class="time">2018-12-25 12:54:47</span></div>
          </ul>

          <div class="add-comment">
            <div class="comment-title"><span class="add-comment-left">追评</span><span class="time">2018-12-25 12:54:47</span></div>
            <div class="comment-main">包装很好，很精致，女朋友很喜欢哦，味道也很好，超赞</div>
            <ul class="comment-img">
              <li><img :src="imgSrc" alt=""></li>
            </ul>
          </div>
        </div>
      </el-dialog>


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

    </div>
  </div>
</template>

<script>
  export default {
    name: "commentManage",
    data(){
      return{
        isFiltrate:false,   //筛选框是否显示
        input:'',
        value:'',
        options: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}],
        commentOptions:[{value: '全部等级评论', label: '全部等级评论'},{value: '超赞', label: '超赞'},{value: '满意', label: '满意'},{value: '一般', label: '一般'},{value: '较差', label: '较差'},],
        replyOptions:[{value: '全部回复状态', label: '全部回复状态'},{value: '已回复', label: '已回复'},{value: '待回复', label: '待回复'}],
        checkOptions:[{value: '全部审核状态', label: '全部审核状态'},{value: '已通过', label: '已通过'},{value: '未通过', label: '未通过'}],

        imgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/LOrSvO6VLfd.jpg',
        currentPage4: 4,

        dialogComment:false,
        dialogReply:false,
        reply:'',
      }
    },
    methods:{
      sikp(){
        this.$router.push({name:'QuestionList'});
      },
      //平台介入
      platformIntervene(){
        this.$router.push({name:'PlatformIntervene'})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
  }
</script>

<style lang="less" scoped>
  @import "less/commentManage.less";
</style>
