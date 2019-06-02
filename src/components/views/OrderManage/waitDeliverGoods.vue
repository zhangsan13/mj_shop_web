<template>
  <!--待发货-->
  <div class="container">
    <div class="state">
      <div class="state-left">
        <!--待发货-->
        <div class="state-wait" v-if="pageType===0">
          <div class="wait-title">当前订单状态： <span>待发货</span><span>1天23时30分14秒内未发货，系统将自动取消订单</span></div>
          <ul class="state-suggest">
            <li>● 请尽快发货，超过3天未发货系统将自动取消订单。</li>
            <li>● 如果特殊原因需延迟发货，请及时与买家联系说明情况，并操作<span>延迟发货</span>。</li>
          </ul>
          <div class="wait-btn state-btn">
            <el-button>发货</el-button>
            <el-button>延迟发货</el-button>
            <span>如有疑问，请致电满集全国统一服务热线：400-6766-999</span>
          </div>
        </div>
        <!--已提醒发货-->
        <div class="state-remind" v-if="pageType===1">
          <div class="state-title">当前订单状态： <span>待发货</span><div><p>1天23时30分14秒内未发货，系统将自动取消订单</p><p><i class="el-icon-bell"></i>买家已于2017-05-06 15：03：01 提醒发货</p></div></div>
          <ul class="state-suggest">
            <li>● 请尽快发货，超过3天未发货系统将自动取消订单。</li>
            <li>● 如果特殊原因需延迟发货，请及时与买家联系说明情况，并操作<span>延迟发货</span>。</li>
          </ul>
          <div class="wait-btn state-btn">
            <el-button>发货</el-button>
            <el-button>延迟发货</el-button>
            <span>如有疑问，请致电满集全国统一服务热线：400-6766-999</span>
          </div>
        </div>


        <!--已延迟发货-->
        <div class="state-dealy" v-if="pageType===2">
          <div class="state-title">当前订单状态： <span>待发货</span><div><p>1天23时30分14秒内未发货，系统将自动取消订单</p><p><i class="el-icon-bell"></i>已于2017-05-06 15：03：01 操作延迟发货</p></div></div>
          <ul class="state-suggest">
            <li>● 每个订单仅可操作延迟发货一次，延迟订单超过7天未发货系统将自动取消订单。</li>
          </ul>
          <div class="wait-btn state-btn">
            <el-button>发货</el-button>
            <span>如有疑问，请致电满集全国统一服务热线：400-6766-999</span>
          </div>
        </div>

        <!--待发货-分批发货-->
        <div class="state-split" v-if="pageType===3||pageType===4">
          <div class="split-title state-title">当前订单状态： <div><p>商家分批发货中,请查看页面下方订单区域了解详情。</p><p>剩余商品<span>1天23时30分14秒</span>内未发货，系统将退款。</p><p v-if="pageType===4"><i class="el-icon-bell"></i>已于2017-05-06 15：03：01 操作延迟发货</p></div></div>
          <ul class="state-suggest">
            <li>●  未发货商品请尽快发货，超过3天未发货系统将自动退款。</li>
            <li>●  如果特殊原因需延迟发货，请及时与买家联系说明情况，并操作<span>延迟发货</span>。</li>
          </ul>
          <div class="wait-btn state-btn">
            <el-button>发货</el-button>
            <el-button>延迟发货</el-button>
            <span>如有疑问，请致电满集全国统一服务热线：400-6766-999</span>
          </div>
        </div>





        <ul class="suggest">
          <h2>重要提醒</h2>
          <li>请尽快发货，超过规定时间，系统自动退款至买家账户</li>
          <li>买家投诉收到的订单商品存在少配件、少赠品，少商品，将影响店铺信誉</li>
          <li>易碎易变形的商品包装多用泡沫塑料或者泡绵，进行防护处理，以抵抗运输过程中的撞击</li>
          <li>建议包装美观，会让顾客有更好的购物体验，促进店铺销售</li>
        </ul>


      </div>


      <div class="state-right">
        <div class="right-box">
          <img :src="rightImgSrc" alt="">
          <div class="right-infor">满集网胶带售价低于商场价2/3</div>
          <el-button type="danger">点击购买</el-button>
        </div>
      </div>

    </div>


    <div class="order" v-if="pageType===3||pageType===4">
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
            <img :src="rightImgSrc" alt="">
            <div>品牌特价折扣中老年羽绒服女连帽中...</div>
            <span>2件</span>
          </li>
          <li>
            <img :src="rightImgSrc" alt="">
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
    name: "waitDeliverGoods",
    components:{

    },
    data(){
      return{
        pageType:3,  //页面类型   0待发货  1已提醒发货   2已延迟发货   3待发货分批发货  4待发货分批发货-延迟发货
        rightImgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',
      }
    },
    created(){
      this.$parent.change(4);
    },

  }
</script>

<style lang="less" scoped>
  @import "less/waitDeliverGoods.less";
</style>
