<template>
<div class="shopmember">
     <div class="title">
        <el-form ref="form" :model="form" style="width:100%;" class="From">
        <div class="left">
                <el-form-item label="会员等级:" style="width:300px;">
        <el-select v-model="form.region" placeholder="全部等级" style="width:200px;">
            <el-option label="一级会员" value="shanghai"></el-option>
            <el-option label="二级会员" value="beijing"></el-option>
            <el-option label="三级会员" value="beijing"></el-option>
            <el-option label="四级会员" value="beijing"></el-option>
            <el-option label="五级会员" value="beijing"></el-option>
        </el-select>
        </el-form-item>
        </div>

        <div class="middle">
        <el-form-item label="上次交易时间:">
        <el-col :span="2.5">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width:200px;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1" style="textAlign:center;">-</el-col>
        <el-col :span="2.5">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width:200px;"></el-time-picker>
        </el-col>
        </el-form-item>
        </div>

        <div class="right">
        <el-form-item label="交易总额：">
        <el-input v-model="form.name" style="width:100px;"></el-input>-
            <el-input v-model="form.name" style="width:100px;"></el-input>
        </el-form-item>

        <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="fanhui">返回</el-button>
        </el-form-item>
        </div> 
        </el-form>
     </div>


     <div class="table">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
     <el-table-column
      fixed
      prop="date"
      label="会员信息"
    >
    </el-table-column>
    <el-table-column
      fixed
      prop="date1"
      label="会员等级"
    >
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
    >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话号码"
    >
    </el-table-column>
    <el-table-column
      prop="birthday"
      label="生日"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="默认收货地址"
    >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="交易笔数（笔）"
    >
    </el-table-column>
     <el-table-column
      prop="zip1"
      label="交易总额（元）"
    >
    </el-table-column>
     <el-table-column
      prop="zip2"
      label="上次交易时间"
    >
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
     </div>



  <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 3, 5, 10]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
</div>
   
</template>

<script>
import Getshopmember from '../../../api/Member/Getshopmember.js'
export default {
     data() {
      return {
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
         tableData: [
          //  {date:'张三',date1:'一级',sex:'男',phone:'11111111111',birthday:'2012-08-09',address:'重庆',zip:'1',zip1:'500元',zip2:'2012-03-02'}
         ],
        currentPage4: 1,//当前页
        pageSize:3,//美页多少条
        total:0//总条数
       
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
       
      },
        handleClick() {
       this.$router.push({name:'details'})
      },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      fanhui(){
        this.$router.push({name:'memberindex'})
      },
      // 获取当前时间
      gettime(){
        var date = new Date();
        var str1 = "-";
        var str2 = ":";
        var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
        var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
        var nowtime = date.getFullYear() + str1  + month  + str1  + strDate
            + " "  + date.getHours()  + str2  + date.getMinutes()
            + str2 + date.getSeconds();
        return nowtime;
      }
    },
    created() {
      Getshopmember.call(this,`?input.clientTimespan=${this.gettime()}`)
      .then(res=>{
     if(res.data.code===1){
      // console.log(res.data.data.userCount)
     }else{
       this.$message.error(res.data.desc);
     }
      })
      .catch(err=>{
       
      })
    },

}
</script>

<style lang="less">
.shopmember{
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        background: #ecf4fa;
        .From{
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-around;
            .left{
                display: flex;
            }
            .middle{
                display: flex;
                width: 600px;
                .el-form-item{
                    width: 600px;
                }
            }
            .right{
                width: 650px;
                display: flex;
                justify-content: space-around;
                .el-form-item{
                    width: 650px;
                    margin-right: 20px;
                }
            }
        }
    }
    .table{
        margin-top: 20px;
        .cell{
            text-align: center;
        }
    }
    .block{
        display: flex;
    }
}
</style>
