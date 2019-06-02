<template>
  <div class="detail">
    <div class="title"><span>转账给用户</span></div>
    <div><p class="tips">温馨提示：仅限于对满集网用户进行转账，不能对商家进行转账</p></div>
    <el-form label-width="120px" class="custom">
      <el-form-item label="用户信息：">
        <div>
          <img src="../img/avator.png" alt="" style="vertical-align: middle;">
          <span style="vertical-align: middle;">张三</span>
        </div>
      </el-form-item>
      <el-form-item label="用户账号：" class="custom-require">
        <div>13123213</div>
      </el-form-item>
      <el-form-item label="转账金额：" class="custom-require">
        <strong>￥5000</strong>
      </el-form-item>
      <el-form-item label="转账通知：">
        <div>13123213</div>
      </el-form-item>
      <el-form-item label="转账时间：" class="custom-require">
        <div>2019-06-06 15:11:10</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "transferDetail"
  }
</script>

<style lang="less" scoped>
  .detail {
    overflow: hidden;
    background-color: #fff;
    .title {
      padding: 0.8rem;
      background-color: #f9f9fb;
      span {
        font-weight: 800;
      }
    }
    .tips {
      padding: 15px;
      color: #999;
    }
  }
</style>
<style lang="less">
  .custom-require label.el-form-item__label {
    position: relative;
    &:before {
      content: "*";
      position: relative;
      color: red;
      font-size: 1.5em;
      right: 5px;
      top: 7px;
    }
  }
</style>
