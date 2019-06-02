<template>
  <div class="container">
    <el-row :gutter="24">
      <el-col :span="12">
        <div class="box">
          <div class="top">
            <h3>重要提醒</h3>
            <a href="/sysMessage">查看更多</a>
          </div>

          <div class="content">
            <ul>
              <li v-for="(item,index) in shopData.significanceReminds" :key="index">
                <span>{{item.title}}</span>
                <i>{{item.content }}</i>
                <a :href="item.url">查看详情 >> </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>商品管理</h3>
            <a href="/goods">管理商品</a>
          </div>

          <div class="div_flex" style="margin-top: 20px;">
            <div>
              <span>出售中的商品</span>
              <span>{{ shopData.goodsManager.putaway }}</span>
            </div>

            <div>
              <span>仓库中的商品</span>
              <span>{{ shopData.goodsManager.soldout }}</span>
            </div>

            <div>
              <span>强制下架商品</span>
              <span>{{ shopData.goodsManager.sysSlodout }}</span>
            </div>

            <div>
              <span>回收商品</span>
              <span>{{ shopData.goodsManager.recycle }}</span>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>资金管理</h3>
          </div>

          <div class="div_order">
            <div class="line">
              <div>
                <span>待结算</span>
                <span class="color_fcbe82">{{shopData.financeManage.waitSettleMoney  }}</span>
              </div>

              <div>
                <span>可提现</span>
                <span class="color_67a2e5">{{shopData.financeManage.withdrawMoney  }}</span>
                <span class="btn">
                  <el-button type="primary">我要提现</el-button>
                </span>
              </div>
            </div>

            <div class="line borderTop">
              <div>
                <span>本月累计结算</span>
                <span class="color_86c9ca">{{shopData.financeManage.monthTotalSettleMoney }}</span>
              </div>

              <div>
                <span>本月累计提现</span>
                <span class="color_f19393">{{shopData.financeManage.monthTotalWithdrawMoney }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>发布优惠</h3>
            <a href="/market">查看更多</a>
          </div>

          <div class="div_box1">
            <ul>
              <li>
                <div v-for="(acItem,Index) in shopData.marketing.shopActivityInfo" :key="Index">
                  <span
                    :class="acItem.activityName === '折扣' ? 'icon1':
                    acItem.activityName === '赠品' ? 'icon2' :
                    acItem.activityName === '优惠券'? 'icon3' :
                    acItem.activityName === '包邮'? 'icon4' :
                    acItem.activityName === '返券'?'icon5': 'icon6' ">
                    <i>{{acItem.activityName}}</i>
                    <b>{{acItem.activityNumber }}</b>
                    <a href="/market">立即发布</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="box">
          <div class="top">
            <h3>订单管理</h3>
            <span>
              <label>电话</label>
              {{ shopData.orderManger.companyInfo.managerPhone  }}
            </span>
            <span>
              <label>负责人：</label>
              {{ shopData.orderManger.companyInfo.manager }}
            </span>
          </div>

          <div class="div_a">
            <a href="#">编辑</a>
          </div>

          <div class="div_flex">
            <div>
              <span>今日订单数</span>
              <span class="color_94ca86">{{ shopData.orderManger.paidNum }}</span>
            </div>

            <div>
              <span>今日待接单</span>
              <span class="color_fcbe82">{{ shopData.orderManger.waitAcceptNum  }}</span>
            </div>

            <div>
              <span>今日待发货</span>
              <span class="color_f19393">{{ shopData.orderManger.waitShipping }}</span>
            </div>

            <div>
              <span>今日退单数</span>
              <span class="color_efa5e5">{{ shopData.orderManger.backNum }}</span>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>价格管理</h3>
            <a href="/goods">管理价格</a>
          </div>

          <div class="div_flex no_border">
            <div>
              <span>调价待审核</span>
              <span>{{shopData.shopArticlePriceAuditCount.awaitCount }}</span>
            </div>

            <div>
              <span>调价未通过</span>
              <span>{{shopData.shopArticlePriceAuditCount.unqualifiedCount}}</span>
            </div>

            <div>
              <span>调价已通过</span>
              <span>{{shopData.shopArticlePriceAuditCount.qualifiedCount}}</span>
            </div>
          </div>

          <div class="div_p">
            <p>根据销售情况以及节假日情况进行适当的价格调整，可能会增加销量哦～
              <a href="/goods">去管理价格</a>
            </p>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>信用管理</h3>
          </div>

          <div class="div_tips">
            <p>保证金：<a href="#">{{shopData.shopCreditManager === null ? 0 :
              shopData.shopCreditManager.currentDeposit}}元</a></p>
          </div>

          <div class="div_flex">
            <div>
              <div class="div_span">
                <h3>店铺评分：</h3>
                <p>
                  <label>
                    商品描述：
                    <a href="#">{{GetCredit("1")}}</a>
                  </label>
                  <label>
                    服务态度：
                    <a href="#">{{GetCredit("3")}}</a>
                  </label>
                </p>
                <p>
                  <label>
                    商品包装：
                    <a href="#">{{GetCredit("2")}}</a>
                  </label>
                  <label>
                    物流速度：
                    <a href="#">{{GetCredit("4")}}</a>
                  </label>
                </p>
              </div>
            </div>

            <div>
              <div class="div_span">
                <h3>店铺信誉：</h3>
                <p>
                  <label>
                    信誉等级：
                    <a href="#">{{shopData.shopCreditManager===null ? 0 :
                      shopData.shopCreditManager.businessReputationtTotalScore.reputationGrade }}</a>
                  </label>
                </p>
                <p>
                  <label>
                    信誉评分：
                    <a href="#">{{shopData.shopCreditManager===null ? 0 :
                      shopData.shopCreditManager.businessReputationtTotalScore.rtTotalScore }}</a>
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="top">
            <h3>经营分析</h3>
            <a href="/manageIndex">查看更多</a>
          </div>

          <div class="div_box1">
            <ul>
              <li>
                <div>
                  <span class="icon12">
                    <i>成交订单</i>
                    <b>{{shopData.manageAnalyze.paidNum}}</b>
                  </span>
                </div>
                <div>
                  <span class="icon22">
                    <i>退单订单</i>
                    <b>{{shopData.manageAnalyze.backNum}}</b>
                  </span>
                </div>
                <div>
                  <span class="icon32">
                    <i>纠纷订单</i>
                    <b>{{shopData.manageAnalyze.saleDisputeNum }}</b>
                  </span>
                </div>
              </li>

              <li>
                <div>
                  <span class="icon42">
                    <i>订单总额</i>
                    <b>{{shopData.manageAnalyze.paidMoney }}</b>
                  </span>
                </div>
                <div>
                  <span class="icon52">
                    <i>退单总额</i>
                    <b>{{shopData.manageAnalyze.backMoney  }}</b>
                  </span>
                </div>
                <div>
                  <span class="icon62">
                    <i>纠纷总额</i>
                    <b>{{shopData.manageAnalyze.saleDisputeMoney }}</b>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="footer">
      <p>满集网全国统一服务热线 400-6766-999</p>
      <div>
        <span>友情链接：</span>
        <a href="#">满惠云</a> |
        <a href="#">计划管理系统</a> |
        <a href="#">协同办公</a> |
        <a href="#">房地产管理系统</a> |
        <a href="#">营销客服系统</a> |
        <a href="#">财务管理系统</a> |
        <a href="#">成本管理系统</a> |
        <a href="#">工程管理系统</a>
      </div>
    </div>

    <SoldOut></SoldOut>
  </div>
</template>

<script>
  import GetShopData from '../../../src/api/Index/GetShopData'
  import SoldOut from '@/components/public/soldOut'

  export default {
    components: {
      SoldOut
    },
    mounted() {
      GetShopData.call(this, `?clientTimespan=${this.time}&clientVersion=${this.clientVersion}`).then(res => {
        if (res.data.code === 1) {
          this.shopData = res.data.data;
          console.log(this.shopData);
        }
      });
      this.notice();
    },
    data() {
      return {
        shopData: {
          significanceReminds: [], //重要提醒
          orderManger: {
            companyInfo: {}  //相关负责人
          },  //订单管理
          goodsManager: {}, //商品管理
          shopArticlePriceAuditCount: {},//价格管理
          financeManage: {},//资金管理
          shopCreditManager: {
            businessReputationtOvera: [],
            businessReputationtTotalScore: {}
          },//信用管理
          marketing: {
            shopActivityInfo: [] //商家活动
          },//发布优惠
          manageAnalyze: {}, //经营分析
        },  //店铺数据
        time: new Date().toLocaleString(),
        clientVersion: "1",
      }
    },
    methods: {
      notice() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          position: 'bottom-right'
        });
      },
      GetCredit(obj) {
        if (this.shopData.shopCreditManager === null)
          return 0;
        let model = this.shopData.shopCreditManager.businessReputationtOvera.filter(function (item) {
          return item.bosSsScoringItems === obj
        });
        return model == null ? 0 : model.average;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/index.less";
</style>
