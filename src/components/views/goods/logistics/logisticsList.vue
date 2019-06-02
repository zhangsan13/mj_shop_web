<template>
  <!--物流收费列表-->
  <div class="container">

    <div class="stage">
      <span class="title">物流配送阶段指示图：</span>
      <div class="stage-step">
        <el-steps :space="100" :active="2" align-center>
          <el-step title="卖家发货"></el-step>
          <el-step title="买家所在城市市区"></el-step>
          <el-step title="送货到楼下"></el-step>
          <el-step title="上楼"></el-step>
          <el-step title="安装"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="btn"><el-button type="primary" icon="el-icon-circle-plus-outline" @click="addCharge">添加收费标准</el-button></div>

    <div class="free">
      <div class="main-title"><span>免费配送</span><ul class="main-title-right"><li>最后编辑时间：2017-05-05 25:20</li><li @click="amend">修改</li></ul></div>
      <div class="free-table">
        <el-table :data="FreeTableData" style="width: 100%" :border="true">
          <el-table-column label="运送方式" width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.way }}</span>
            </template>
          </el-table-column>
          <el-table-column label="运送到">
            <template slot-scope="scope">
              <span>{{ scope.row.area }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="charge">
      <div class="main-title"><span>运费1</span><ul class="main-title-right"><li>最后编辑时间：2017-05-05 25:20</li><li>复制模板</li><li @click="amend">修改</li><li>删除</li></ul></div>
      <div class="charge-table">
        <el-table :data="ChargeTableData" style="width: 100%" :border="true">
          <el-table-column label="运送方式" width="180">
            <template slot-scope="scope">
              <span>{{ scope.row.way }}</span>
            </template>
          </el-table-column>
          <el-table-column label="运送到">
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


  </div>
</template>

<script>
  export default {
    name: "logisticsList",
    data(){     //根据数据显示列表页还是设置收费的页面
      return{

        FreeTableData: [{way: '物流', area:'重庆；安徽省：芜湖、合肥；天津(所有地区); 浙江省:慈溪、杭州、宁波、舟山、金华、绍兴、瑞安、乐清、湖州、义乌、余姚、温州、嘉兴'}],

        ChargeTableData:[{way:'物流',area:'重庆；安徽省：芜湖、合肥；天津(所有地区)',valuationWay:'按重量',fristWeight:'10',firstMoney:'10',addWeight:'0.00',addMoney:'0.20'}]
      }
    },
    methods:{
      addCharge(){
        this.$router.push({name:'LogisticsFree'});
      },
      amend(){
        this.$router.push({name:'LogisticsFree'});
      }
    },
    created(){
      this.$parent.change('物流');  //传给父组件
    }
  }
</script>

<style lang="less" scoped>
  @import "less/logisticsList.less";
</style>
