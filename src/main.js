// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import element from './config/element'
import ElementUI from 'element-ui'
import store from './config/vuex'
import {JSEncrypt} from 'jsencrypt'
import VueLazyload from 'vue-lazyload'
import Viewer from 'v-viewer';
import VCharts from 'v-charts';
import echarts from 'echarts'





import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';

import Tool from './assets/js/tool';
import Storage from '@/assets/js/storage';
import Global from '@/assets/js/global';

Vue.prototype.$Storage = Storage;
Vue.prototype.$Global = Global;
Vue.prototype.$Tool = Tool;

// Vue.use(element);
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.prototype.echarts=echarts;
Vue.config.productionTip = false;


Vue.use(VueLazyload, {
  attempt: 1, // 失败重新加载次数
  // error: 'http://bpic.588ku.com/element_origin_min_pic/01/37/82/88573c6372e4ae5.jpg', // 加载失败图
  error: require('./assets/img/ic_default.png'), // 加载失败图
  loading: require('./assets/img/ic_default.png'), // 加载中的占位图
});
Vue.use(Viewer, {
  defaultOptions: {
    // title: false,
    // navbar: false,
    // toolbar: false,
    zIndex: 9999
  }
});


router.afterEach((to, from) => {
  //判断是否已经登录且有token信息
  if (to.name !== 'Login') {
    let token_info = sessionStorage.getItem('tokenInfo');
      if (!token_info) {
        router.push({name: 'Login'})
      }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
