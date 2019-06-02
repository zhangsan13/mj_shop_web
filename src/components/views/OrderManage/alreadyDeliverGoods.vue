<template>
  <div class="container">
    <div class="state">
      <div class="state-title">当前订单状态： <span>已发货</span><span v-if="pageType===1"><i class="el-icon-time"></i>买家已于2017-08-09 16:15:10操作延迟收货，延迟时间为7天</span></div>
      <ul>
        <li>● 买家还有<span>2天4小时26分21秒</span>来完成本次交易的"确认到货"。</li>
      </ul>
      <p>如有疑问，请致电满集全国统一服务热线：400-6766-999</p>
    </div>

    <div class="order" v-if="pageType===2">
      <div class="order-title">
        <span>包裹 1</span><span><i class="el-icon-time"></i>包裹9天2小时25分26秒后自动确定收货</span>
      </div>
      <div class="order-main">
        <ul class="order-infor">
          <li>发货时间：2017-11-03  14：01:23 </li>
          <li>物流公司：圆通快递 </li>
          <li>运单号码：700124548884</li>
        </ul>
        <ul class="order-show">
          <li>
            <img :src="orderImgSrc" alt="">
            <div>品牌特价折扣中老年羽绒服女连帽中...</div>
            <span>2件</span>
          </li>
          <li>
            <img :src="orderImgSrc" alt="">
            <div>品牌特价折扣中老年羽绒服女连帽中绒服女连帽中绒服女连帽中绒服女连帽中</div>
            <span>2件</span>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "alreadyDeliverGoods",
    components:{
    },
    data(){
      return{
        pageType:0,     //页面类型    0已发货  1已发货延迟收货  2已发货分批收货
        orderImgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',
      }
    },
    created(){
      this.$parent.change(5);
    },
  }
</script>

<style lang="less" scoped>
  @import "less/alreadyDeliverGoods.less";
</style>
