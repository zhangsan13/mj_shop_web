<template>
  <!--银行卡信息-->
  <div class="container">
    <div class="remind">请认真核对已有的信息，并补充缺少的信息，否则将影响交易！</div>
    <div class="main">
      <div class="choose_type">
        <span>请选择绑定的帐户类型（必选）</span>
        <el-select style="width: 150px;" v-model="account" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
      </div>
      <div class="main_list">
        <div class="main_title"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "updataBank",
    data(){
      return{
        account:'',
        options:[{value:'小微商户',label:'小微商户'},{value:'个体商户',label:'个体商户'},{value:'企业商户',label:'企业商户'}]
      }
    },
    created(){
      this.$parent.change(3);
    },
  }
</script>

<style lang="less" scoped>
@import "less/updataBank.less";
</style>
