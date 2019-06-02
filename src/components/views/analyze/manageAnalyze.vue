<template>
  <!--经营分析-->
  <div class="container">
    <div class="left">
      <!--订单统计-->
      <div>
        <div class="title">
          <span>订单统计</span><span>更多>></span>
        </div>
        <ul class="order">
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>成交订单</p><p>2</p></div></div>
          </li>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>退单订单</p><p>88</p></div></div>
          </li>
          <li>
            <div class="grid none">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>纠纷次数</p><p>150</p></div></div>
          </li>
          <div class="across-line"></div>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>订单总额</p><p>1200.00</p></div></div>
          </li>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>退单总额</p><p>155.00</p></div></div>
          </li>
          <li>
            <div class="grid none">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>纠纷总额</p><p>288.00</p></div></div>
          </li>
        </ul>
      </div>

      <!--以下为退单商品-->
      <div>
        <div class="title">
          <span>以下为退单商品</span><span>更多>></span>
        </div>
        <ul class="table">
          <li class="table-title"><div v-for="item in name" :key="item">{{item}}</div></li>
          <li v-for="(item,index) in tableData" :key="index"><div><span>{{index+1}}</span></div><div v-for="(items,indexs) in item" :key="indexs"><span>{{items}}</span></div></li>
          <li class="more"><span>更多>></span></li>
        </ul>
      </div>

    </div>


    <div class="right">
      <div class="activity-statistic">
          <div class="title">
            <span>活动统计</span><span>更多>></span>
          </div>
          <ul class="order">
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>折扣</p><p>150</p><p>立即发布</p></div></div>
            </li>
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>赠品</p><p>88</p><p>立即发布</p></div></div>
            </li>
            <li>
              <div class="grid none">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>优惠券</p><p>150</p><p>立即发布</p></div></div>
            </li>
            <div class="across-line"></div>
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>包邮</p><p>1200</p><p>立即发布</p></div></div>
            </li>
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>返券</p><p>155</p><p>立即发布</p></div></div>
            </li>
            <li>
              <div class="grid none">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>拼单</p><p>288</p><p>立即发布</p></div></div>
            </li>
          </ul>

        </div>

      <div class="advertise-statistic">
        <div class="title">
          <span>广告统计</span><span>更多>></span>
        </div>
        <ul class="order">
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>首页轮播图广告</p><p>150</p><p>购买广告</p></div>
            </div>
          </li>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>首页专题广告</p><p>88</p><p>购买广告</p></div>
            </div>
          </li>
          <li>
            <div class="grid none">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>首页品类广告</p><p>150</p><p>购买广告</p></div>
            </div>
          </li>
          <div class="across-line"></div>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>首页区域广告</p><p>1200</p><p>购买广告</p></div>
            </div>
          </li>
          <li>
            <div class="grid">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>二级轮播图广告</p><p>155</p><p>购买广告</p></div>
            </div>
          </li>
          <li>
            <div class="grid none">
              <div class="grid-left turnover"></div>
              <div class="grid-right"><p>二级推荐位广告</p><p>288</p><p>购买广告</p></div>
            </div>
          </li>
        </ul>

      </div>

      <div class="goods-statistic">
        <div class="title">
          <span>商品统计</span><span>更多>></span>
        </div>
          <ul class="order">
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>商品总数</p><p>150</p><p>发布新品</p></div>
              </div>
            </li>
            <li>
              <div class="grid">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>上新商品(30天)</p><p>88</p><p>发布新品</p></div>
              </div>
            </li>
            <li>
              <div class="grid none">
                <div class="grid-left turnover"></div>
                <div class="grid-right"><p>出售中的商品</p><p>150</p><p>发布新品</p></div>
              </div>
            </li>
          </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "manageAnalyze",
    data(){
      return{
        tableData: [{code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},
          {code:'JD6XXGDS02JD6XXGDS02', name: '王小虎', money:'229.00', type:'取消订单', reason: '不想要了',},

        ],
        name:['序号','退单号','商品名称','退款金额','退单类型','退单原因'],

      }
    }
  }
</script>

<style lang="less" scoped>
  @import "less/manageAnalyze.less";
</style>
