<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in title" :key="index" :class="item===name?'choose':''" @click="aaa(item)">{{item}}</li>
    </ul>
    <router-view :aaa="abc"></router-view>
  </div>
</template>

<script>
  export default {
    name: "dispatchInstall",
    data(){
      return{
        title:['同城配送费用','搬楼费用','安装费用'],
        name:'同城配送费用',
        abc:[],
      }
    },
    methods:{
      change(val){
        this.name=val
      },
      aaa(item){
        if(item==='同城配送费用'){
          this.abc=[0,1];
        }else if(item==='搬楼费用'){
          this.abc=[1,1];
        }else if(item==='安装费用'){
          this.abc=[2,1];
        }
      },
    },
    created(){
      this.$parent.change('配送安装费用设置');
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
