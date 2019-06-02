<template>
  <!--物流设置免费-->
  <div class="container">
    <div class="remind">
      <div><span>重要提醒：</span>通常免配送费会增加商品成交量，但设置了免费配送的请按用户要求进行免费配送，否则会影响店铺信誉，且因商品运费造成的用户纠纷由商家自行负责， 请设置前咨询当地物流公司后慎重考虑</div>
      <div><el-button type="primary" size="mini">确定</el-button></div>
    </div>
    <div class="stage">
      <span class="title">物流配送阶段指示图：</span>
      <div class="stage-step">
        <el-steps :space="100" :active="1" align-center>
          <el-step title="卖家发货"></el-step>
          <el-step title="买家所在城市市区"></el-step>
          <el-step title="上楼"></el-step>
          <el-step title="安装"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="free">
      <span class="title">我要免费配送：</span>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增地区</el-button>
    </div>

    <div class="box">
      <div class="area">
        <div class="area-title">选择免费配送区域</div>
        <ul class="area-ul" v-for="(item,index) in list" :key="index">
          <div class="area-ul-title"><el-checkbox v-model="item.choose">{{item.area}}</el-checkbox></div>
          <li class="city" v-for="(items,indexs) in item.cityChiled" :key="indexs">
            <el-checkbox v-model="items.choose">{{items.city}}</el-checkbox><span>({{5}})</span><i @click="handleUpDown(item.id)" :class="curCode===item.id?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
            <ul class="county left" v-show="curCode===item.id">
              <li v-for="(content,idx) in items.countyChild" :key="idx"><el-checkbox>{{content.county}}</el-checkbox></li>
            </ul>
          </li>
        </ul>
        <div class="area-btn"><el-button type="primary">确定</el-button><el-button >取消</el-button></div>
      </div>
      <span class="area-right" @click="skip">跳过，我要收费配送</span>
    </div>


  </div>
</template>

<script>
  export default {
    name: "logisticsFree",
    data(){
      return{
        list:[{id:1,area:'全国',choose:false,cityChiled:[{city:'重庆dsfgsdgsrgsdgsdrgsdrgsdr',choose:false,countyChild:[{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'}]}]},
              {id:2,area:'较偏远地区',choose:false,cityChiled:[{city:'新疆',choose:false,countyChild:[{county:'乌鲁木齐'}]}]},
              {id:3,area:'港澳台地区',choose:false,cityChiled:[{city:'台湾',choose:false,countyChild:[{county:'台北市'},]}]},
        ],
        upDown:false,   //
        curCode:-1,
      }
    },
    methods:{
      skip(){
        this.$router.push({name:'LogisticsCharge'})
      },
      handleUpDown(val){
        console.log(val);
        this.curCode=val;
        console.log(this.curCode===val);
      }
    },
    created(){
      this.$parent.change('物流');  //传给父组件
    }
  }
</script>

<style lang="less" scoped>
  @import "less/logisticsFree.less";
</style>
