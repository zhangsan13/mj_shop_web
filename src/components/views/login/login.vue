<template>
  <div class="container">
    <div class="header">
      <a href=""><img :src="loginImg"></a>
      <div><span>商家中心</span></div>
    </div>
    <div class="main">
      <div class="dialog">
        <div class="dialog-title">登&emsp;录</div>
        <div class="inp user"><i class="user-icon"></i>
          <el-input clearable v-model="user" placeholder="用户名/手机号/邮箱"></el-input>
        </div>
        <div class="inp password"><i class="password-icon"></i>
          <el-input type="password" clearable v-model="password" placeholder="请输入账户密码"></el-input>
        </div>
        <!--<div class="remind"><span class="remind-icon"></span><span>登录失效，请重新登录</span></div>-->
        <el-button class="btn" @click="submit" :loading="login_loading">登&emsp;录</el-button>
        <div class="forget"><span>忘记密码？</span></div>
        <ul class="main-footer">
          <li><span>满集商城</span></li>
          <li><span>商家开店</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from '@/api/login/Login.js'
  import {JSEncrypt} from 'jsencrypt'

  export default {
    name: "login",
    data() {
      return {
        loginImg: require("./img/loginLogo.png"),
        user: '',
        password: '',
        login_loading: false,
      }
    },
    methods: {
      submit() {
        if (this.user.length === 0) {
          this.$message.error('请输入登录名');
        }
        if (this.password.length === 0) {
          this.$message.error('请输入密码');
        }
        let encryptor = new JSEncrypt(); // 新建JSEncrypt对象
        encryptor.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDC4wHerJc4BSst20Zb07lY9LeZss4OEEhe+SrnLyYy8hGquX/aTQNn+5wnV/+8ierKPgqPGIXPf1ZRww5/6yON+O7dAfJ7BRx85HneIWqwPCZToLck8DN8UXsBuXLMcG7tfMunnnZKenrPsAslN0eKvkYkvz4EPGdvmPwz0NCKXQIDAQAB');  // 设置公钥
        let rsaPassWord = encryptor.encrypt(this.password); // 对密码进行加密

        this.login_loading = true;
        Login.call(this, {
          username: this.user,
          password: rsaPassWord,
        }).then((res) => {
          this.login_loading = false;
          if (res.data.Code === 1) {
            res.data.Data.current_time = new Date().getTime();
            sessionStorage.setItem("tokenInfo", JSON.stringify(res.data.Data));
            this.$router.push({name: 'Index'});
          } else {
            this.$message.error(res.data.Desc);
          }
        }).catch(e => {
          this.login_loading = false;
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "less/login.less";
</style>
