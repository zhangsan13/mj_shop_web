<template>
  <!--已收货，已取消，已结算,已冻结-->
  <div class="container">
    <div class="state">
      <div class="state-title">当前订单状态：<span>{{fatherSource.stateName}}</span>
        <span  v-if="fatherSource.state === 403">逾期未发货，系统自动取消订单</span>
        <span  v-else-if="fatherSource.state === 404">逾期未接单，系统自动取消订单</span>
        <span  v-else>用户取消订单</span>
      </div>
      <ul class="suggest" v-if="fatherSource.receive">
        <li>● 如果买家提出售后要求或给予中差评，请积极与买家协商，做好售后服务。</li>
        <li>● 买家确认收货后，无退款/售后，7天后将自动完成结算。</li>
      </ul>
      <p>如有疑问，请致电满集全国统一服务热线：400-6766-999</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "orderResult",
    props: ['fatherSource'],
    components:{
    },
    created(){
      this.$parent.change(false);    //不显示顶部
    }
  }
</script>

<style lang="less" scoped>
  @import "less/orderResult.less";
</style>
