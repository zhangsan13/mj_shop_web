<template>
  <div class="adticle_box">
    <div class="line"></div>
    <div class="mjHeadlines_box">
      <ul>
        <li>
          <div class="left">
            <span>
              <img src="https://picsum.photos/200/300" alt="">
            </span>
          </div>

          <div class="right">
            <div class="content">
              <h3>店铺爆款已经做了很久了，效果不错，但是全电流量提不上来怎么办？</h3>
              <p>现代社会已经有越来越多的人离不开手机了，最头疼的事儿莫过于手机电量告警，相信很多人为了避免这种担 忧都会随身携带大容量移动电源</p>
            </div>
            <div class="top">
              <span>满集网</span>
              <div>
                <span>2019/05/21</span>
                <span class="icon look">2222</span>
                <span class="icon zan">232</span>
                <span class="icon like">562</span>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="left">
            <span>
              <img src="https://picsum.photos/200/300" alt="">
            </span>
          </div>

          <div class="right">
            <div class="content">
              <h3>店铺爆款已经做了很久了，效果不错，但是全电流量提不上来怎么办？</h3>
              <p>现代社会已经有越来越多的人离不开手机了，最头疼的事儿莫过于手机电量告警，相信很多人为了避免这种担 忧都会随身携带大容量移动电源</p>
            </div>
            <div class="top">
              <span>满集网</span>
              <div>
                <span>2019/05/21</span>
                <span class="icon look">2222</span>
                <span class="icon zan">232</span>
                <span class="icon like">562</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="btn">
        <el-button type="primary">加载更多</el-button>
      </div>

      <div class="btn_back">
        <el-button type="default" @click="goBack">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      /**
       * 返回
       */
      goBack() {
        this.$router.go( -1 );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
