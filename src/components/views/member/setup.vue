<template>
    <div class="setup">
        <div class="text">
            <h3>设置说明:</h3>
            <p>1，会员等级：会员分为5个等级（一星、二星、三星、四星、五星），开启会员功能后，需逐级设置会员的升级条件以及会员权益。</p>
            <p>2，升级条件：订单交易成功后，买家的交易满足升级任意条件即可自动升级为相应等级会员。</p>
            <p>3，会员权益：购物积分将按店铺购物积分基础以倍数获取。</p>
        </div>
        <div class="jifen">
            <p>店铺购物积分：<span>1倍</span>  购物获得积分 = 商品价格 * 1（积分取整数）</p>
        </div>

         <el-table
    :data="tableData"
    border
    style="width: 100%;marginTop:20px;"
    >
    <el-table-column
      fixed
      prop="date"
      label="序号"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="会员等级"
     >
    </el-table-column>
    <el-table-column
      prop="province"
      label="交易额"
     >
    </el-table-column>
    <el-table-column
      prop="city"
      label="交易次数"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="积分倍数"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="shezhi">设置</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 模态框 -->
  <div class="frame">
<el-dialog title="一星会员" :visible.sync="dialogFormVisible" width="800px;">

    <el-form :model="form">
  <div style="height:40px;paddingLeft:30px;borderBottom:1px solid #ccc;">
     <span style="fontSize:18px;color:black;marginRight:15px;">升级条件</span>满足以下条件自动升级到一星会员
  </div>
  </el-form>
  <div style="borderBottom:1px solid #ccc;">
      <div style="color:#00a2ff;paddingLeft:30px;">
   <span style="marginRight:40px;">交易额：￥100</span>    -或-交易次数1
  </div>
  <div>
       <span style="fontSize:18px;color:black;marginRight:15px;paddingLeft:30px;">会员权益</span>一星会员可享受的权益
  </div>
  </div>
  <div style="paddingLeft:30px;">
  <p style="color:black">折扣：9.9</p>
  <p style="color:black">积分倍数：1.4</p>
  <p style="color:black">生日优惠：<input type="text" style="width:70px;height:30px;">% <span style="marginLeft:30px;color:red;">会员生日当天可享专属优惠</span></p>
  <p style="color:black">升级奖励：<el-button type="primary" style="border:none;color:#fff;background:#00a2ff;" @click="select">选择赠品</el-button><span style="marginLeft:30px;color:red;">会员升级后获得奖励</span> </p>
  </div>
  

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">保存</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">返回</el-button>
  </div>
</el-dialog>
  </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
 tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        dialogFormVisible: false,
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth:'120px'
        }
    },
    methods: {
   shezhi(){
       this.dialogFormVisible=true;
   },
   select(){
       this.$router.push({name:'give'})
   }
    },

}
</script>

<style lang="less">
.setup{
    background: #fff;
    padding: 20px;
    .text{
        width: 1510px;
        height: 136px;
        background: #e4ebf1;
        padding: 20px;
        p{
            margin-top: 10px;
        }
    }
    .jifen{
        margin-top: 15px;
        span{
            color:#00a2ff;
            margin-right: 30px;
        }
    }
    .cell{
        text-align: center;
    }
    .frame{
        .el-dialog__header{
            padding: 0;
            background: #ccc;
            padding:10px 0 5px 5px;
            
        }
        .el-dialog__body{
            padding: 0;
            line-height: 40px;
        }
    }
}
</style>
