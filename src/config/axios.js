import axios from 'axios'

const API = require('@/config/vuex/state/api').state;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // Form Data 模式
let isTokenRefreshing = false; //token是否正在刷新
//定义fetch函数，config为配置
export function fetch(config, base) {
  //返回promise对象
  return new Promise((resolve, reject) => {
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers: {
        'Content-Type': 'application/json',
      },
      // 请求超时
      timeout: 5000
    });

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {

      //是否为刷新token或登录接口
      if (config.url.indexOf('/auth/oauth/token') !== -1) {
        return config;
      } else {
        //token信息
        let tokeninfo = JSON.parse(sessionStorage.getItem('tokenInfo'));
        //过期时间
        let expire_time = tokeninfo.current_time + tokeninfo.expires_in * 1000;

        //当前时间
        let current_time = new Date().getTime();

        //token过时需要重新请求
        if (current_time > expire_time && !isTokenRefreshing) {

          isTokenRefreshing = true;
          //请求新的token
          return new Promise((resolve, reject) => {
            instance.post(`http://192.168.0.30:8769/auth/oauth/token?grant_type=refresh_token&refresh_token=${tokeninfo.refresh_token}&shop_id=${tokeninfo.shopId}&client_id=shoppc`).then(res => {
              if (res.data.Code === 1) {
                isTokenRefreshing = false;
                //存储新的token信息
                res.data.Data.current_time = new Date().getTime();
                sessionStorage.setItem("tokenInfo",JSON.stringify(res.data.Data));
                //手动修改前一次请求的token
                config.headers['Authorization'] = 'Bearer ' + res.data.Data.access_token;
                resolve(config);
              } else {
                //刷新失败跳转回登录页面

                isTokenRefreshing = false;
                resolve(config);
              }
            }).catch(e => {
              isTokenRefreshing = false;
              resolve(config);
            });
          });
        } else {
          //请求加上token
          config.headers['Authorization'] = 'Bearer ' + tokeninfo.access_token;
          return config;
        }
      }
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

// 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });

    //请求成功后执行的函数
    instance(config).then(res => {

      resolve(res);
      if (res.data.Code === 101) {
        console.error('用户未登录');
      }
      //失败后执行的函数
    }).catch(err => {
      console.log('错误')
      console.log(err);
      reject(err);
    })
  });
}

// 封装调用的接口 getData
export function $axios(url, data, type = 'post', host) {

  let baseURL = host ? API[host] : API.host;
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.sessionStorage.getItem('token') || this.$route.query.sessionId;
  // axios.defaults.headers.common['token'] = sessionStorage.getItem('tokenInfo') ? JSON.parse(window.sessionStorage.getItem('tokenInfo')).access_token : '';
  // 判断是否登录
  /*if (window.localStorage.getItem('token')) {
   data = _merge({
     /!*access_token: '3655b548-8d35-4cfe-92ac-9ce746f0b244'*!/
   }, data)
 } else {
   data = {}
 }*/
  if (type === 'post' && !data) {
    data = {}
  } else if (type === 'get' && !data) {
    data = ''
  }
  return fetch({
    url: type === 'post' ? baseURL + url : baseURL + url + data,
    method: type || 'post',
    data: data,
  })
}
