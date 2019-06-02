<template>
    <div class="discount">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name" style="width:250px;" placeholder="请选择活动区域"></el-input>
  </el-form-item>
  
  <el-form-item label="活动时间" style="width:500px;">
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  
  选择:<select style="width:180px;height:40px;">
  <option value ="volvo">全部</option>
  <option value ="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
 <el-button type="primary" style="height:40px;marginLeft:20px;">查询</el-button>
 <el-button style="height:40px;marginLeft:20px;">返回</el-button>
</el-form>
  
<el-button type="primary" style="height:40px;marginLeft:20px;">新增</el-button>

 <el-table
    :data="tableData"
    border
    style="width: 100%;marginTop:20px;">
    <el-table-column
      prop="date"
      label="活动名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="活动起止时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发送时间">
    </el-table-column>
      <el-table-column
      prop="address"
      label="发送内容">
    </el-table-column>
      <el-table-column
      prop="address"
      label="通知方式">
    </el-table-column>
      <el-table-column
      prop="address"
      label="发送状态">
    </el-table-column>
      <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
.discount{
    .el-form{
        display:flex;
    }
}

</style>
