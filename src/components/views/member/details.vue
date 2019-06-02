<template>
    <div class="details">
        <div class="content">
                 <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<div style="borderRight:1px dashed #ccc;">
    <div class="left">
    <p>用户账号<span>aasasasas</span></p>
    <p>默认地址<span>重庆市江北区观音桥北城艺术大厦22-1</span></p>
    <p>账号<span>15222222222</span></p>
</div>
</div>

<div class="middle">
    <p>会员等级<span>一级会员</span></p>
    <p>会员生日（已设置生日专属优惠）<span>1995/08/15</span></p>
    <p>会员性别<span>男</span></p>
</div>
<div class="right">
    <div style="textAlign:center;">
    <p>总交易额（元）</p>
    <p style="fontSize:20px;color:#00a2ff;">{{price.toFixed(2)}}</p>
    </div>
   <div style="marginLeft:100px;textAlign:center;">
       <p>总交易笔数</p>
       <p style="fontSize:20px;color:#00a2ff;">72</p>
   </div>
</div>
        </div>
   
<div class="record">
<h3>交易记录</h3>
<div class="table">
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="订单号"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户账号"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="下单时间">
    </el-table-column>
     <el-table-column
      prop="aa"
      label="支付时间">
    </el-table-column>
     <el-table-column
      prop="bb"
      label="账号">
    </el-table-column>
     <el-table-column
      prop="cc"
      label="订单金额">
    </el-table-column>
     <el-table-column
      prop="dd"
      label="实付金额">
    </el-table-column>
     <el-table-column
      prop="ee"
      label="会员优惠">
    </el-table-column>
  </el-table>
</div>
 
</div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: '',
        price:20526,
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          aa:'2018-07-18 15:00:52',
          bb:'15222663325',
          cc:'1500.00',
          dd:'1500.00',
          ee:'1.50'
        }, 
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          aa:'2018-07-18 15:00:52',
          bb:'15222663325',
          cc:'1500.00',
          dd:'1500.00',
          ee:'1.50'
        }, 
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          aa:'2018-07-18 15:00:52',
          bb:'15222663325',
          cc:'1500.00',
          dd:'1500.00',
          ee:'1.50'
        }, 
        ]
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="less">
.details{
    .content{
        display: flex;
        .left{
        width: 450px;
        line-height: 60px;
        background: #fff;
        margin-left: 20px;
        padding-left: 30px;
        span{
            margin-left: 40px;
            color: black;
            font-weight: bold;
        }
    }
    .middle{
        width: 450px;
        line-height: 60px;
        background: #fff;
        margin-left: 20px;
        padding-left: 30px;
        span{
            margin-left: 40px;
            color: black;
            font-weight: bold;
        }
    }
    .right{
        width: 450px;
        line-height: 60px;
        background: #fff;  
        margin-left: 20px;   
        padding-left: 30px;  
        display: flex;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    background: #fff;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
.record{
    margin-top: 20px;
    background: #fff;
    height: 500px;
    h3{
        color: #00a2ff;
        padding-top: 20px;
        padding-left: 15px;
    }
    .table{
        margin-top: 20px;
        padding-left: 15px;
    }
}
   
}

</style>
