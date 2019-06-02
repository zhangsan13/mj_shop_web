<template>
  <div class="main">
    <div class="menu">
      <ul>
        <li :class="choice === item && 'active'" v-for="(item, i) in carList" :key="i" @click="changeChoice(item)">{{item}}</li>
      </ul>
      <div class="ribbon"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {
        carList: ['公司信息', '店铺信息', '店铺状态', '商家信誉'],
        choice: '公司信息',
      }
    },
    created: async function () {
      this.getTitle();
    },
    methods: {
      changeChoice(name) {
        this.choice = name;
        switch (name) {
          case '公司信息':
            // this.$router.push({name: "ProjectInfo", query: {project_id:this.$route.query.project_id}});
            this.$router.push({name: "CompanyInfo"});
            break;
          case '店铺信息':
            this.$router.push({name: "StoreShop"});
            break;
         /* case '账户信息':
            this.$router.push({name: "AccountInfo"});
            break;*/
          case '店铺状态':
            this.$router.push({name: "StoreState"});
            break;
          case '商家信誉':
            this.$router.push({name: "ShopReputation"});
            break;
        }
      },

      // 默认获取头部标题
      getTitle() {
        // let routerName = this.$router.history.current.name;
        let routerTitle = this.$router.history.current.meta.title;
        console.log(routerTitle, "routerName");
        this.choice = routerTitle;
      },
    },
    watch: {
      '$route': {
        handler(to, from) {
          // 对路由变化作出响应...
          this.choice = this.$router.history.current.meta.title;
        },
        immediate: true
      }

    },
  }
</script>

<style lang="less" scoped>
  @import "./less/index.less";
</style>
