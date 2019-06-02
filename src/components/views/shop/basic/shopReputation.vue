<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="shopRep_box marTop_20">
          <div class="shopRep_top">
            <span>我的信用</span>
            <router-link to="/shop/believeRecord">查看信用记录</router-link>
          </div>

          <div class="shopRep_record">
            <span>当前信用：<b>7分</b></span>
            <span>近30天扣分：<b>97分</b></span>
            <span>近30天扣分：<b>7分</b></span>
          </div>

          <p class="shopRep_tips">每月信用分数变化趋势</p>

          <div class="shopRep_chart">
            <ve-line :data="creditData" :settings="creditSettings"></ve-line>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="shopRep_box marTop_20">
          <div class="shopRep_box">
            <div class="shopRep_top">
              <span>我的信誉</span>
              <router-link to="/shop/creditRecord">查看信誉记录</router-link>
            </div>

            <div class="shopRep_record">
              <span>当前信誉：<b>7分</b></span>
              <span>信誉等级：<b>优质商家</b></span>
              <span>近30天扣分：<b>7分</b></span>
              <span>近30天扣分：<b>7分</b></span>
            </div>

            <p class="shopRep_tips">每月信誉分数变化趋势</p>

            <div class="shopRep_chart">
              <ve-line :data="reputationData" :settings="reputationSettings"></ve-line>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="shopRep_box">
          <div class="shopRep_top">
            <span>店铺半年内动态评分</span>
          </div>

          <div class="shopRep_score" style="height: 368px; overflow: hidden;">
            <div class="shopRep_score_left">
              <span class="on">商品满意度：<b>4.7</b>分</span>
              <span>商家包装：<b>4.7</b>分</span>
              <span>服务态度：<b>4.7</b>分</span>
              <span>物流速度：<b>4.7</b>分</span>
            </div>
            <div class="shopRep_score_right">
              <div>
                <el-rate
                  v-model="score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
                <span>共125488人评价</span>
              </div>

              <ve-bar :data="scoreData" width="500px" height="300px" :settings="scoreSettings"></ve-bar>

            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="shopRep_box">
          <div class="shopRep_box">
            <div class="shopRep_top">
              <span>我的特权</span>
            </div>

            <div class="shopRep_privilege">
              <div>
                <span>
                  <small class="icon1"></small>
                </span>
                <h1>20%</h1>
                <h4>今年广告费减少</h4>
                <p>花更少的钱</p>
                <p>获得更多的曝光率</p>
                <p>打造爆款商品不是梦</p>
              </div>
              <div>
                <span>
                  <small class="icon2"></small>
                </span>
                <h1>60%</h1>
                <h4>今年热搜词费用减少</h4>
                <p>花更少的钱</p>
                <p>上更多的热搜</p>
                <p>助你登上顶级流量宝座</p>
              </div>
              <div>
                <span>
                  <small class="icon3"></small>
                </span>
                <h1>20%</h1>
                <h4>今年商品保证金减少</h4>
                <p>用更少的成本</p>
                <p>赚更多的钱</p>
                <p>获得更好的人生</p>
              </div>
              <div>
                <span>
                  <small class="icon4"></small>
                </span>
                <h1>20%</h1>
                <h4>今年返平台使用年费</h4>
                <p>满集给你返利</p>
                <p>互利互赢</p>
                <p>并肩走向更远处</p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="shopRep_box">
          <div class="shopRep_top">
            <span>关于信用、信誉</span>
          </div>
          <div class="shopRep_about">
            <h3>1. 信用分是如何计算的？</h3>
            <p>信用分主要是平台对消费者投诉举报，以及对商家的违规进行扣分处理，当然通过商品评价及销量等也可以进行加分。</p>

            <h3>2. 信誉值是如何计算的？有哪些维度？</h3>
            <p>信誉值是对数据的综合处理和评估，主要包含了消费者评价、商家售前/售中/售后服务等，具体包括如发布新商品、发布活动、收到的好评、商品销量、消费者咨询回复等多项指标。</p>

            <h3>3. 可以通过哪些方式去提升信誉值？</h3>
            <p>信誉值会影响到商品及店铺的曝光率，影响用户购买的转化C率，建议您把关好商品质量，选择优质合作快递，加强商品包装，提高发货速，做好售后服务，诚信经营。</p>

            <h3>4. 信用等级是怎么分的？分别享有什么特权？</h3>
            <div>
              <span class="shopRep_about_span1">
                <small></small>
                <p>问题商家</p>
                <span>信誉值：0 - 99</span>
              </span>

              <span class="shopRep_about_span2">
                <small></small>
                <p>问题商家</p>
                <span>信誉值：0 - 99</span>
              </span>

              <span class="shopRep_about_span3">
                <small></small>
                <p>问题商家</p>
                <span>信誉值：0 - 99</span>
              </span>

              <span class="shopRep_about_span4">
                <small></small>
                <p>问题商家</p>
                <span>信誉值：0 - 99</span>
              </span>

              <span class="shopRep_about_span5">
                <small></small>
                <p>问题商家</p>
                <span>信誉值：0 - 99</span>
              </span>
            </div>

          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    mounted () {
    },
    data () {
      this.creditSettings = { // 信用
        metrics: ['信用分数'],
        dimension: ['月份']
      },
      this.reputationSettings = { // 信誉
        metrics: ['信誉分数'],
        dimension: ['月份']
      },
      this.scoreSettings = { // 评分
        dimension: ['日期'],
        metrics: ['访问用户']
      }
      return {
        score: 3.7,
        creditData: { // 信用数据
          columns: ['月份', '信用分数'],
          rows: [
            { '月份': '1月', '信用分数': 12 },
            { '月份': '2月', '信用分数': 23 },
            { '月份': '3月', '信用分数': 25 },
            { '月份': '4月', '信用分数': 34 },
            { '月份': '5月', '信用分数': 45 },
            { '月份': '6月', '信用分数': 55 },
            { '月份': '7月', '信用分数': 65 },
            { '月份': '8月', '信用分数': 70 },
            { '月份': '9月', '信用分数': 80 },
            { '月份': '10月', '信用分数': 85 },
            { '月份': '11月', '信用分数': 90 },
            { '月份': '12月', '信用分数': 95 }
          ]
        },
        reputationData: { // 信誉数据
          columns: ['月份', '信誉分数'],
          rows: [
            { '月份': '1月', '信誉分数': 900 },
            { '月份': '2月', '信誉分数': 1800 },
            { '月份': '3月', '信誉分数': 2500 },
            { '月份': '4月', '信誉分数': 3600 },
            { '月份': '5月', '信誉分数': 4800 },
            { '月份': '6月', '信誉分数': 5700 },
            { '月份': '7月', '信誉分数': 6600 },
            { '月份': '8月', '信誉分数': 7300 },
            { '月份': '9月', '信誉分数': 8000 },
            { '月份': '10月', '信誉分数': 8500 },
            { '月份': '11月', '信誉分数': 9000 },
            { '月份': '12月', '信誉分数': 9800 }
          ]
        },

        scoreData: { // 评分
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 }
          ],
        },




      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/shopReputation.less";

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
</style>
