<template>
  <div class="header">
    <div class="info">
      <div class="logo">
        <router-link to="/index">
          <img src="./img/logo.png" alt="">
        </router-link>
        <span>商家中心</span>
      </div>
      <div class="operation">
        <div class="message">
          <i></i>
          <span>即时通讯</span>
        </div>
        <div class="notice">
          <i></i>
          <span>系统讯息</span>
        </div>
        <div class="user">
          <!--<img class="vue-lazyload" v-lazy="`https://picsum.photos/46`" alt="">-->
          <img class="vue-vue-lazyload" src="https://picsum.photos/46" alt="" />
          <p>STANCOO</p>
          <i @click="changeUserMenu"></i>
          <transition name="slide-fade">
            <div class="function" v-if="userMenu">
              <ul>
                <li>账号设置</li>
                <li @click="logout">安全退出</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <!-- <div class="contract-tips" v-if="timeTrips">
        {{timeTrips}}
        <a @click="$router.push({name: 'AgreementProtocol'})">前往续约</a>
      </div> -->
    </div>
    <div class="ribbon"></div>

  </div>
</template>

<script>
  import LoginOut from '@/api/login/LoginOut'
  export default {
    data() {
      return {
        userMenu: false,
      }
    },
    methods: {
      changeUserMenu() {
        this.userMenu = !this.userMenu;
      },
      logout() {
        let loading = this.$loading();
        LoginOut.call(this,{
          'clientTimespan': this.$Tool.formatDate(new Date()),
        }).then(res => {
          if (res.data.code === 1) {
            loading.close();
            this.$router.push({name: 'Login'});
            sessionStorage.clear();
          } else {
            this.$message.error(res.data.desc);
          }
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  @import "./less/header.less";
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>
