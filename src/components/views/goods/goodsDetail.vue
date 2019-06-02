<template>
  <div class="goodsDetail_box">
    <div class="top">
      <el-button :type="active === 'basic' ? 'primary' : 'default'" size="small" @click="active = 'basic'">基本信息</el-button>
      <el-button :type="active === 'pic' ? 'primary' : 'default'" size="small" @click="active = 'pic'">图文详情</el-button>
    </div>

    <!--基本信息 start-->
    <template v-if="active === 'basic'">
      <div class="box_flex">
        <div class="box_flex_div">
          <div>
            <ul>
              <li>
                <span>商品类目：</span>
                <span>服饰箱包>男装>T恤、Polo衫、背心</span>
              </li>
              <li>
                <span>商品标题：</span>
                <span>服饰箱包</span>
              </li>
              <li>
                <span>商品品牌：</span>
                <span>夏季单车</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>商品类目：</span>
                <span>服饰箱包>男装>T恤、Polo衫、背心</span>
              </li>
              <li>
                <span>商品卖点：</span>
                <span>骑行裤春夏季单车男女山地车自行车骑行服长裤短裤亏本包</span>
              </li>
              <li>
                <span>是否是活动商品：</span>
                <span>是（商家：满折、特价促销|平台：抽奖、满减）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box">
        <h3>商品规格</h3>
        <div class="table">
          <el-table
            :data="rulesData"
            :span-method="modifyPriceMethod"
            border
            style="width: 100%;">
            <el-table-column
              prop="color"
              label="颜色"
              align="center"
              width="180">
            </el-table-column>
            <el-table-column
              prop="size"
              label="尺码"
              align="center">
            </el-table-column>
            <el-table-column
              prop="originalSellPrice"
              label="原价（元）"
              align="center">
            </el-table-column>
            <el-table-column
              prop="auditSellPrice"
              label="售价（元）"
              align="center">
            </el-table-column>
            <el-table-column
              prop="stock"
              label="库存"
              align="center">
            </el-table-column>
            <el-table-column
              prop="code"
              label="商品编码"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="box_flex">
        <h3>商品属性</h3>
        <div class="box_flex_div">
          <div>
            <ul>
              <li>
                <span>尺码：</span>
                <span>XXL</span>
              </li>
              <li>
                <span>材质成分：</span>
                <span>涤纶+纯棉100%</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>主要 颜色：</span>
                <span>灰色、白色、蓝色</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box_flex">
        <h3>重量/体积</h3>
        <div class="box_flex_div">
          <div>
            <ul>
              <li>
                <span>重量（KG）：</span>
                <span>50</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>体积（m³）：</span>
                <span>30.59</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box_flex">
        <h3>物流服务</h3>
        <div class="box_flex_div">
          <div>
            <ul>
              <li>
                <span>快递公司：</span>
                <span>申通快递</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>运费模板：</span>
                <span>全国包邮运费模板</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="box_flex">
        <h3>服务承诺</h3>
        <div class="box_flex_div">
          <div>
            <ul>
              <li>
                <span>服务承诺：</span>
                <span>支持7天无理由退换货</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>售后保修服务：</span>
                <span>全国联保</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <!--基本信息 end-->

    <!--图文详情 start-->
    <template v-if="active === 'pic'">
      <div class="box_flex">
        <h3>商品规格</h3>
        <div class="box_flex_img">
          <viewer :images="imgs">
            <img class="vue-lazyload avatar" v-for="item in imgs" v-lazy="item.src" alt="" title="点击查看大图">
          </viewer>
        </div>
      </div>

      <div class="box_flex">
        <h3>商品介绍</h3>
        <div class="box_flex_pic">
          <div>

          </div>
        </div>
      </div>
    </template>
    <!--图文详情 end-->

    <div class="btn">
      <el-button @click="goBack">返回</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 'basic', // 'basic' => 基本信息； 'pic' => 图文详情
        rulesData: [
          {
            shop_number: '20190411',
            color: '黑色',
            size: '165/80A',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            stock: '12',
            code: 'SD123456'
          }, {
            shop_number: '20190411',
            color: '黑色',
            size: '170/84A',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            stock: '12',
            code: 'SD123457'
          }, {
            shop_number: '20190411',
            color: '黑色',
            size: '175/88A',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            stock: '12',
            code: 'SD123458'
          }, {
            shop_number: '20190412',
            color: '红色',
            size: '165/80A',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            stock: '12',
            code: 'SD123459'
          }, {
            shop_number: '20190412',
            color: '红色',
            size: '170/84A',
            originalSellPrice: '100.00',
            auditSellPrice: '88.00',
            stock: '12',
            code: 'SD123460'
          }
        ],
        rowIndex: '-1',
        OrderIndexArr: [], // 存放需要合并的项
        imgs: [{
          src: 'https://picsum.photos/200/200'
        }, {
          src: 'https://picsum.photos/200/300/?blur'
        }, {
          src: 'https://picsum.photos/200/300/?blur'
        }, {
          src: 'https://picsum.photos/200/300/?blur'
        }, {
          src: 'https://picsum.photos/200/300/?blur'
        }],
      }
    },

    methods: {
      /**
       * 获取相同编号的数组
       */
      getOrderNumber() {
        let OrderObj = {};
        this.rulesData.forEach( (element, index) => {
          element.rowIndex = index;
          if (OrderObj[element.shop_number]) {
            OrderObj[element.shop_number].push(index);
          } else {
            OrderObj[element.shop_number] = [];
            OrderObj[element.shop_number].push(index);
          }
        } ); // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）

        for ( let k in OrderObj ) {
          if ( OrderObj[k].length > 1 ) {
            this.OrderIndexArr.push(OrderObj[k]);
          }
        }
      },

      /**
       * 合并单元格
       * @param row
       * @param column
       * @param rowIndex
       * @param columnIndex
       * @returns {*}
       */
      modifyPriceMethod ( {row, column, rowIndex, columnIndex} ) {
        if (columnIndex === 0) {
          for (let i = 0; i < this.OrderIndexArr.length; i++) {
            let element = this.OrderIndexArr[i];
            for (let j = 0; j < element.length; j++) {
              let item = element[j];
              if (rowIndex == item) {
                if (j == 0) {
                  return {
                    rowspan: element.length, colspan: 1
                  }
                } else if (j != 0) {
                  return {
                    rowspan: 0, colspan: 0
                  }
                }
              }
            }
          }
        }
      },

      /**
       * 返回操作
       */
      goBack() {
        this.$router.go( -1 );
      },

    },

    mounted() {
      this.getOrderNumber();
    },

  }
</script>

<style lang="less" scoped>
  @import "./less/goodsDetail.less";
</style>
