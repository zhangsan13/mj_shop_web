<template>
  <div class="transferaccounts">
    <div class="title"><span>转账给用户</span></div>
    <div>
      <div><p class="tips">温馨提示：仅限于对满集网用户进行转账，不能对商家进行转账</p></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="用户信息：">
          <div>
            <img src="../img/avator.png" alt="" style="vertical-align: middle;"/><span style="color: #00a2ff;vertical-align: middle">张学友</span>
          </div>
        </el-form-item>
        <el-form-item label="用户账号：" prop="account">
          <el-input v-model="ruleForm.account" placeholder="请输入用户账号" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="转账金额：" prop="price">
          <el-input v-model="ruleForm.price" placeholder="请输入你的转账金额" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="转账通知：">
          <el-input v-model="ruleForm.notice" placeholder="请输入接受短信的手机号码" style="width: 300px;"></el-input>
        </el-form-item>
        <div class="verify">
          <strong style="font-size: 1.2em">安全验证</strong>
          <span style="font-size: 0.8em;color: #999">为了您的资金安全，请输入登录密码</span>
        </div>
        <el-form-item label="登录密码：" prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="请输入接受短信的手机号码" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认转账</el-button>
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          <el-button @click="$router.go(-1)">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
<!--    弹出层-->
    <el-dialog
      title=""
      :visible.sync="submitDialog"
      width="35%">
      <div class="submit-dialog">
        <div class="header">
          <img src="../img/submit.png" alt=""/>
          <div>转账成功</div>
        </div>
        <div style="padding: 0 40px">
          <el-form label-width="120px">
            <el-form-item label="用户账号：">
              <strong>{{ruleForm.account}}</strong>
            </el-form-item>
            <el-form-item label="转账金额：">
              <strong style="color: red;">￥{{ruleForm.account}}</strong>
            </el-form-item>
            <el-form-item label="交易流水号：">
              <span>12321321321321</span>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: center">
          <el-button>查看详情</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        submitDialog: false,
        ruleForm: {
          account: '',//账号
          price: '',//金额
          notice: '',//通知
          password: '',//密码
        },
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'change'}
          ],
          price: [
            { required: true, message: '请输入转账金额', trigger: 'change'}
          ],
          password: [
            {required: true, message: '请输入登录密码', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submitDialog = true;
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
  .transferaccounts {
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
    .verify {
      border-top: 1px solid #e1e1e1;
      padding: 20px 0 20px 40px ;
    }
    .submit-dialog {
      .header {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
</style>
