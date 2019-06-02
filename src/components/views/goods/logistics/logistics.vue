<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in title" :key="index" :class="item===name?'choose':''" @click="skip(item)">{{item}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "logistics",
    data(){
      return{
        title:['物流','快递','商家自送','用户自提'],
        name:'物流',
      }
    },
    methods:{
      change(val){
        this.name=val
      },
      skip(val){
        if(val==='物流'){this.$router.push({name:'LogisticsList'})}
        else if(val==='快递'){this.$router.push({name:'ExpressList'})}
        else if(val==='商家自送'){this.$router.push({name:'MerchantSend'})}
        else if(val==='用户自提'){this.$router.push({name:'UserReceiveList'})}

      }
    },
    created(){
      this.$parent.change('运费设置');
    },

  }
</script>

<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  ul{
    margin-top: 10px;
    font-size: 0px;
    background: #ffffff;
  }
  li{
    display: inline-block;
    padding: 20px 10px;
    margin: 0px 20px;
    font-size: 14px;
    cursor: pointer;
  }
  .choose{
    border-bottom: 2px solid #00a2ff;
    color: #00a2ff;
  }

</style>
