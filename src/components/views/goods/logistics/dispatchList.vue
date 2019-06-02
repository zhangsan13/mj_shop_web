<template>
  <!--同城配送费用列表-->
  <div class="container">
    <div class="add-btn"><el-button type="primary" icon="el-icon-circle-plus-outline" @click="addChargeNorm">添加收费标准</el-button></div>

    <div class="stage">
      <span class="title">物流配送阶段指示图：</span>
      <div class="stage-step">
        <el-steps :space="100" :active="active" align-center>
          <el-step title="卖家发货"></el-step>
          <el-step title="买家所在城市市区"></el-step>
          <el-step title="送货到楼下"></el-step>
          <el-step title="上楼"></el-step>
          <el-step title="安装"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="main">
      <div class="remind">亲，请认真填写模版，至少设置10个区域，您的商品更容易被搜索到！</div>
      <div class="search">
        <el-input v-model="city" placeholder="输入城市区域"></el-input>
        <el-select v-model="valuation" placeholder="全部计价方式"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
        <el-button type="primary">搜索</el-button>
      </div>


      <div class="charge">
        <div class="charge-title"><span>运费1</span><ul class="charge-title-right"><li>最后编辑时间：2017-05-05 25:20</li><li>复制模板</li><li>修改</li><li>删除</li></ul></div>
        <div class="charge-table">
          <el-table :data="ChargeTableData" style="width: 100%" :border="true">
            <el-table-column label="配送区域" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.area }}</span>
              </template>
            </el-table-column>
            <el-table-column label="计价方式">
              <template slot-scope="scope">
                <span>{{ scope.row.valuationWay }}</span>
              </template>
            </el-table-column>
            <el-table-column label="首重（KG）">
              <template slot-scope="scope">
                <span>{{ scope.row.fristWeight }}</span>
              </template>
            </el-table-column>
            <el-table-column label="首费（元）">
              <template slot-scope="scope">
                <span>{{ scope.row.firstMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column label="续重(KG)">
              <template slot-scope="scope">
                <span>{{ scope.row.addWeight }}</span>
              </template>
            </el-table-column>
            <el-table-column label="续件(元)">
              <template slot-scope="scope">
                <span>{{ scope.row.addMoney }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>


      <div class="charge">
        <div class="charge-title"><span>运费1</span><ul class="charge-title-right"><li>最后编辑时间：2017-05-05 25:20</li><li>复制模板</li><li>修改</li><li>删除</li></ul></div>
        <div class="charge-table">
          <el-table :data="ChargeTableData" style="width: 100%" :border="true">
            <el-table-column label="配送区域" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.area }}</span>
              </template>
            </el-table-column>
            <el-table-column label="计价方式">
              <template slot-scope="scope">
                <span>{{ scope.row.valuationWay }}</span>
              </template>
            </el-table-column>
            <el-table-column label="首体积（M³）">
              <template slot-scope="scope">
                <span>{{ scope.row.fristWeight }}</span>
              </template>
            </el-table-column>
            <el-table-column label="首费（元）">
              <template slot-scope="scope">
                <span>{{ scope.row.firstMoney }}</span>
              </template>
            </el-table-column>
            <el-table-column label="续体积(M³)">
              <template slot-scope="scope">
                <span>{{ scope.row.addWeight }}</span>
              </template>
            </el-table-column>
            <el-table-column label="续件(元)">
              <template slot-scope="scope">
                <span>{{ scope.row.addMoney }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    props:['aaa'],
    name: "dispatchList",
    data(){
      return{
        pageType:'同城配送费用',      //同城配送费用设置   搬楼费用设置
        active:3,
        city:"",
        valuation:'',
        options: [{value: '按体积', label: '按体积'}, {value: '按重量', label: '按重量'}],
        ChargeTableData:[{area:'重庆；安徽省：芜湖、合肥；天津(所有地区)',valuationWay:'按重量',fristWeight:'10',firstMoney:'10',addWeight:'0.00',addMoney:'0.20'},]

      }
    },
    methods:{
      addChargeNorm(){
       this.$router.push({name:'DispatchSet'});
      },

    },
    created(){
      console.log('66666');
      this.$parent.change(this.pageType);
      this.active=3;
    },
    watch:{
      aaa(n,o){
        if(n[0]===0&&n[1]===1){this.pageType='同城配送费用';this.active=2}
        else if(n[0]===1&&n[1]===1){this.pageType='搬楼费用';this.active=3}
        else if(n[0]===2&&n[1]===1){this.pageType='安装费用';this.active=4}
        this.$parent.change(this.pageType);
        console.log(this.pageType)
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "less/dispatchList.less";
</style>
