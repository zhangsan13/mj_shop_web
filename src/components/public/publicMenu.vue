<template>
  <div class="menu_cont">
    <div v-for="(item, i) in menu.routes" class="item" v-if="item.meta && item.meta.isShow">
      <div :class="nowRouterFatherPath === item.path ? 'title active' : 'title'">
        <i></i>
        <span>{{item.meta && item.meta.title}}</span>
      </div>
      <ul>
        <li v-for="it in item.children" v-if="it.meta && it.meta.isShow">
          <router-link :class="nowRouterName.indexOf(it.name) >= 0 ? 'active' : ''" :to="`${item.path}${it.path !== '/' ? `/${it.path}` : ''}`">{{it.meta && it.meta.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from '../../router/index.js'

  export default {
    data() {
      return {
        menu: router.options,
        nowRouterName: [],
        nowRouterFatherPath: '',
      }
    },
    watch: {
      '$route': {
        handler(to, from) {
          // 对路由变化作出响应...
          // 对路由变化作出响应...

          let list = [];
          to.matched.map(item => {
            list.push(item.name)
          });
          this.nowRouterName = list;
          this.nowRouterFatherPath = to.matched.length && to.matched[0].path;
        },
        immediate: true
      }
    },
  }
</script>

<style lang="less" scoped>
  @import "./less/menu.less";
</style>
