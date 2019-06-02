<template>
  <div class="addDiscount_box">
    <div class="title_box">
      <ul>
        <li class="active" v-if="pageType === 0">优惠券</li>
        <li class="active" v-if="pageType === 1">折扣券</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <el-form class="demo-ruleForm">
      <el-form-item label="活动名称" label-width="100px">
        <p class="look_p">hhaahahhfhsfhsdfhdsfjhsjfkh</p>
      </el-form-item>

      <el-form-item label="满减金额" label-width="100px">
        <div class="add_prepend">
          <i>（满金额最高100元，减金额最低10元且应为5的倍数）</i>
        </div>

        <div class="add_tag">
          <el-tag v-for="(tag, i) in tags" :key="i" :type="tag.type">{{tag.name}}</el-tag>
        </div>
      </el-form-item>

      <el-form-item label="领券时间" label-width="100px">
        <div class="add_line">
          <span class="add_span">2019-04-12 10:12:23</span>
          <span class="add_span"> 至 </span>
          <span class="add_span">2019-04-12 10:12:23</span>
          <span class="add_span">共</span>
          <span class="add_span">3</span>
          <span class="add_span">天</span>
          <i>（活动时间7-30天，从开始日00:00:00生效，结束日23:59:59失效）</i>
        </div>
      </el-form-item>

      <el-form-item label="有效时间" label-width="100px">
        <div class="add_line">
          <i>领券时间起</i>
          <span style="font-size: 16px; color: #333;">4</span>
          <i>天内有效</i>
          <i>（券的有效期30-60天）</i>
        </div>
      </el-form-item>

      <el-form-item label="领券详情" label-width="100px">
        <div class="table1">
          <el-table
            :data="quanTableData"
            border
            tooltip-effect="dark"
            style="width: 80%">
            <el-table-column
              label="满减金额"
              align="center"
              width="200">
              <template slot-scope="scope">
                <span class="look_span">{{scope.row.fullDiscuse}}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="giveCount"
              label="发放总张数"
              align="center">
            </el-table-column>

            <el-table-column
              prop="getCount"
              label="已领取张数"
              align="center">
            </el-table-column>

            <el-table-column
              prop="usedCount"
              align="center"
              label="已使用张数">
            </el-table-column>
          </el-table>
        </div>
      </el-form-item>

      <el-form-item label="活动范围" label-width="100px">
        <div>
          <el-button type="primary">全店商品</el-button>
          <el-button type="default">部分商品</el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="add_tips_p">选择全店商品时，活动结束前发布的新商品，将会默认加入优惠活动。</div>

        <!--表格 start-->
        <div class="table table1">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              prop="sort"
              label="序号"
              align="center"
              width="55">
            </el-table-column>

            <el-table-column
              label="商品图片"
              align="center">
              <template slot-scope="scope">
                <viewer :images="scope.row.pic">
                  <img class="vue-lazyload pic" v-lazy="scope.row.pic" alt="" title="点击查看大图">
                </viewer>
              </template>
            </el-table-column>

            <el-table-column
              label="商品名称"
              align="center">
              <template slot-scope="scope">
                <div class="shopName">
                  <p style="text-align: left;">2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000</p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="price"
              align="center"
              label="商品价格(元)">
            </el-table-column>
          </el-table>
        </div>
        <!--表格 end-->

        <!--页码开始-->
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
        <!--页码结束-->
      </el-form-item>

      <el-form-item label-width="80px" style="margin-top: 60px;">
        <el-button @click="goBack">返 回</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    mounted () {

    },
    data () {
      return {
        pageType: this.$route.query.type,
        tags: [
          { name: '买100返5块 | 100张', type: '' },
          { name: '买100返5块 | 100张', type: '' },
          { name: '买100返5块 | 100张', type: '' }
        ],
        tableData: [{ // 表格数据
          sort: '1',
          pic: 'https://picsum.photos/id/237/200/300',
          price: '200.00',
        }],
        currentPage: 1,
        quanTableData: [{ // 领券详情数据
          fullDiscuse: '满500减90元 | 100张',
          giveCount: '100',
          getCount: '40',
          usedCount: '10',
        }],
      }
    },
    methods: {

      /**
       * 返回
       */
      goBack() {
        this.$router.go( -1 );
      },

      /**
       * 分页方法
       * @param val
       */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
