<template>
  <!--快递设置免费-->
  <div class="container">
    <div class="remind">
      <div><span>重要提醒：</span>通常免配送费会增加商品成交量，但设置了免费配送的请按用户要求进行免费配送，否则会影响店铺信誉，且因商品运费造成的用户纠纷由商家自行负责， 请设置前咨询当地物流公司后慎重考虑</div>
      <div><el-button type="primary" size="mini">确定</el-button></div>
    </div>


    <div class="free">
      <span class="title">我要包邮：</span>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增地区</el-button>
    </div>

    <div class="box">
      <div class="area">
        <div class="area-title">选择免费配送区域</div>
        <ul class="area-ul" v-for="(item,index) in list" :key="index">
          <div class="area-ul-title"><el-checkbox v-model="item.choose">{{item.area}}</el-checkbox></div>
          <li class="city" v-for="(items,indexs) in item.cityChiled" :key="indexs">
            <el-checkbox v-model="items.choose">{{items.city}}</el-checkbox><span>({{5}})</span><i @click="upDown=!upDown" :class="upDown?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
            <ul class="county left" v-show="upDown">
              <li v-for="(content,idx) in items.countyChild" :key="idx"><el-checkbox>{{content.county}}</el-checkbox></li>
            </ul>
          </li>
        </ul>
        <div class="area-btn"><el-button type="primary">确定</el-button><el-button >取消</el-button></div>
      </div>
      <span class="area-right" @click="skip">跳过，去设置运费</span>
    </div>


  </div>
</template>

<script>
  export default {
    name: "expressFree",
    data(){
      return{
        list:[{area:'全国',choose:false,cityChiled:[{city:'重庆dsfgsdgsrgsdgsdrgsdrgsdr',choose:false,countyChild:[{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'}]}]},
          {area:'较偏远地区',choose:false,cityChiled:[{city:'新疆',choose:false,countyChild:[{county:'乌鲁木齐'}]}]},
          {area:'港澳台地区',choose:false,cityChiled:[{city:'台湾',choose:false,countyChild:[{county:'台北市'},]}]},
        ],
        upDown:false,   //
      }
    },
    methods:{
      skip(){
        this.$router.push({name:'ExpressCharge'})
      },
    },
    created(){
      this.$parent.change('快递');  //传给父组件
    }
  }
</script>

<style lang="less" scoped>
  @import "less/expressFree.less";
</style>
