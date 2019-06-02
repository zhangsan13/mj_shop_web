<template>
  <div class="container">
    <div class="title">
      <div class="btn">规则地图</div><div class="btn present">规则众议院</div><div>问题解决不了？联系客服：400-6766-99</div>
    </div>
    <div class="line"></div>
    <ul class="choose">
      <li>全部 </li>
      <li>即将开始</li>
      <li>投票中</li>
      <li>等待结果公布</li>
      <li>公示中</li>
    </ul>

    <div class="main">
      <div class="search">
        <el-input v-model="titleName" placeholder="标题名称"></el-input>
      </div>
      <ul class="main-show">
        <li>
          <div class="main-show-img"><img :src="imgSrc" alt=""></div>
          <p>关于新增《可食用类违禁添加技术规范》相关规则公开征求意见</p>
          <div class="main-show-state"><i class="el-icon-time"></i><span>等待结果公示</span></div>
        </li>
      </ul>

    </div>
  </div>

</template>

<script>
  export default {
    name: "ruleHouse",
    data(){
      return{
        titleName:'',   //标题名称
        imgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "less/ruleHouse.less";
</style>
