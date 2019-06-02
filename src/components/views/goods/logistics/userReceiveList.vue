<template>
  <!--用户自提列表-->
  <div class="container">
    <div class="remind">用户自提能更快促成交易，减少用户等待时间，若方便建议设置用户自提地点</div>
    <div class="btn"><el-button type="primary" icon="el-icon-circle-plus-outline" @click="userReceiveAdd">新增自提地点</el-button></div>

    <div class="charge">
      <div class="main-title"><span>运费1</span><ul class="main-title-right"><li>最后编辑时间：2017-05-05 25:20</li><li>复制模板</li><li @click="amend">修改</li><li>删除</li></ul></div>
      <div class="charge-table">
        <el-table :data="ChargeTableData" style="width: 100%" :border="true">
          <el-table-column label="自提地点">
            <template slot-scope="scope">
              <span>{{ scope.row.area }}</span>
            </template>
          </el-table-column>
          <el-table-column label="地图选点">
            <template slot-scope="scope">
              <span>{{ scope.row.area }}</span>
            </template>
          </el-table-column>
          <el-table-column label="营业时间">
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="贵宾专线">
            <template slot-scope="scope">
              <span>{{ scope.row.phone }}</span>
            </template>
          </el-table-column>
          <el-table-column label="自提说明">
            <template slot-scope="scope">
              <span>{{ scope.row.explain }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "userReceiveList",
    data(){
      return{
        ChargeTableData:[{area:'重庆市江北区北城艺术大厦22楼',area:'重庆；安徽省：芜湖、合肥；天津(所有地区)',date:'9:00-21:00',phone:'12345678911',explain:'自提点收取的定金分别为20%或100%，自提时支付余额'}],

      }
    },
    methods:{
      //用户自提新增
      userReceiveAdd(){
        this.$router.push({name:'UserReceiveAdd'});
      },
      amend(){
        this.$router.push({name:'UserReceiveAdd'});
      }

    },
    created(){
      this.$parent.change('用户自提');
    },
  }
</script>
<style lang="less" scoped>
  @import "less/userReceiveList.less";
</style>
