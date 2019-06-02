<template>
  <div class="discount_box">
    <div class="btn">
      <ul>
        <li :class="choice === item && 'active'" v-for="(item, i) in carList" :key="i" @click="changeChoice(item)">{{item}}</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <!--条件筛选 start-->
    <div class="screen">
      <el-form :inline="true" class="demo-form-inline" label-width="100px">

        <el-form-item label="活动状态：" v-if="choice !== '设置赠品'">
          <el-select v-model="discountValue" placeholder="请选择">
            <el-option
              v-for="item in discountOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间：" v-if="choice !== '设置赠品'">
          <el-date-picker
            v-model="time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item :label="choice === '设置赠品' ? '赠品名称：' : '活动名称：'">
          <el-input placeholder="请输入商品名称" v-model="activitytitle"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="query()">搜索</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add('add')">添加</el-button>
        </el-form-item>

      </el-form>
    </div>
    <!--条件筛选 end-->

    <!--设置赠品 start-->
    <div v-if="choice === '设置赠品'">
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="sort"
            label="序号"
            align="center"
            width="55">
            <template slot-scope="scope">{{(pageNum-1)*itemNum+(scope.$index)+1}}</template>
          </el-table-column>

          <el-table-column
            label="赠品图片"
            align="center"
            width="120">
            <template slot-scope="scope">
                <img class="pic" :src="pics[scope.$index]" alt title="点击查看大图">
                <!-- <viewer :images="scope.row.pics">
              </viewer> -->
            </template>
          </el-table-column>

          <el-table-column
            label="赠品名称"
            align="center"
            width="320">
            <template slot-scope="scope">
              <div class="shopName">
                <p style="text-align: left;">{{scope.row.title}}</p>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            label="市场价格(元)">
            <template slot-scope="scope">
              <div>{{scope.row.price}}</div>
            </template>
          </el-table-column>

          <!-- <el-table-column
            align="center"
            label="库存(件)">
            <template slot-scope="scope">
              <div>{{scope.row.inventory}}</div>
            </template>
          </el-table-column> -->

          <el-table-column
            label="操作"
            align="center"
            fixed="right"
            width="150">
            <template slot-scope="scope">
              <el-button type="text" @click="add('detail',scope.row.id)">查看</el-button>
              <el-button type="text" @click="add('edit',scope.row.id)">编辑</el-button>
              <el-button type="text" @click="deleteVisible = true,delect(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--页码开始-->
      <div class="paging">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="pageSizes"
        :page-size="itemNum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
      <!--页码结束-->
    </div>
    <!--设置赠品 end-->

    <!--满赠 start-->
    <div v-if="choice === '满赠'">
      <el-table
        :data="fullDiscountData"
        border
        style="width: 100%">
        <el-table-column
          label="序号"
          width="80"
          align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column
          label="活动名称"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column
          label="活动规则"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.rules}}</template>
        </el-table-column>
        <el-table-column
          label="活动时间"
          align="center">
          <template slot-scope="scope">{{scope.row.time}}</template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center">
          <template slot-scope="scope">{{scope.row.state}}</template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="add('detail')">查看</el-button>
            <el-button type="text" @click="add('edit')">编辑</el-button>
            <el-button type="text" @click="deleteVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--页码开始-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
      <!--页码结束-->
    </div>
    <!--满赠 end-->

    <!--指定增 start-->
    <div v-if="choice === '指定增'">
      <el-table
        :data="giftData"
        border
        style="width: 100%">
        <el-table-column
          label="序号"
          width="80"
          align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column
          label="活动名称"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column
          label="主商品"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.mainShop}}</template>
        </el-table-column>
        <el-table-column
          label="赠品"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.giftShop}}</template>
        </el-table-column>
        <el-table-column
          label="活动时间"
          align="center">
          <template slot-scope="scope">{{scope.row.time}}</template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center">
          <template slot-scope="scope">{{scope.row.state}}</template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="add('detail')">查看</el-button>
            <el-button type="text" @click="add('edit')">编辑</el-button>
            <el-button type="text" @click="deleteVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--页码开始-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage2"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
      <!--页码结束-->
    </div>
    <!--指定增 end-->

    <!--买几赠几 start-->
    <div v-if="choice === '买几赠几'">
      <el-table
        :data="buyAndGiftData"
        border
        style="width: 100%">
        <el-table-column
          label="序号"
          width="80"
          align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column
          label="活动名称"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column
          label="活动商品"
          width="260"
          align="center">
          <template slot-scope="scope">{{scope.row.shop}}</template>
        </el-table-column>
        <el-table-column
          label="活动时间"
          align="center">
          <template slot-scope="scope">{{scope.row.time}}</template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center">
          <template slot-scope="scope">{{scope.row.state}}</template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="add('detail')">查看</el-button>
            <el-button type="text" @click="add('edit')">编辑</el-button>
            <el-button type="text" @click="deleteVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--页码开始-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage3"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
      <!--页码结束-->
    </div>
    <!--买几赠几 end-->

    <el-dialog
      title="提示"
      :visible.sync="deleteVisible"
      width="500px">
      <p>删除后不能恢复，确认删除？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteVisible = false,deleteAll()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import GetGiftProductList from '../../../../../src/api/giftPromotion/GetGiftProductList';
import delectGift from '../../../../../src/api/giftPromotion/delectGift';

  export default {
    mounted () {
      this.setTheGiftList();
    },
    computed: {
      testUrl() {
        return this.$store.state.api.testUrl
      }
    },
    data () {
      return {
        carList: ['设置赠品', '满赠', '指定增', '买几赠几'],
        choice: '设置赠品',
        time:  [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], // 折扣时间值
        currentPage: 1,
        pageSizes: [10, 20, 30,40],
        pageNum: 1, //当前页
        itemNum: 10, //每页多少条
        total: 100,
        clientTimespan:'',
        activitytitle:'',     //赠品名称
        giftprootionid:'',    //要删除的赠品id
        discountOptions: [{  // 折扣活动状态选项
          value: '1',
          label: '未开始'
        }, {
          value: '2',
          label: '进行中'
        }, {
          value: '3',
          label: '已过期'
        }],
        discountValue: '', // 折扣活动状态值
        tableData: [{ // 设置赠品数据
          sort: '1',
          name:'2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000',
          price:'￥60.00-80.00',
          pics: 'https://picsum.photos/id/237/200/300',
          inventory:'100',
        }],
        pics:[],
        currentPage: 1, // 设置赠品分页

        fullDiscountData: [{   // 满增表格数据
          sort: '1',
          name: '五一限时9折优惠',
          rules: '购买满500元打9折，满1000元打7折',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '进行中'
        }, {
          sort: '2',
          name: '新品上架限时8小时2.5折优惠',
          rules: '购买满500元打9折，满1000元打7折',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '已结束'
        }],
        currentPage1: 1, // 满增分页

        giftData: [{   // 指定增表格数据
          sort: '1',
          name: '五一限时9折优惠',
          mainShop: '共2件',
          giftShop: '共4件',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '进行中'
        }, {
          sort: '2',
          name: '新品上架限时8小时2.5折优惠',
          mainShop: '共2件',
          giftShop: '共4件',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '已结束'
        }],
        currentPage2: 1, // 指定增分页

        buyAndGiftData: [{   // 买几赠几数据
          sort: '1',
          name: '五一限时9折优惠',
          shop: '共2件',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '进行中'
        }, {
          sort: '2',
          name: '新品上架限时8小时2.5折优惠',
          shop: '共2件',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          state: '已结束'
        }],
        currentPage3: 1, // 买几赠几分页

        deleteVisible: false,

      }
    },
    methods: {
      changeChoice(name) {
        this.choice = name;
      },
      setTheGiftList: function(){     //设置赠品列表查询
        this.clientTimespan = new Date().toLocaleString();
        GetGiftProductList.call(this, `?input.title=${this.activitytitle}&input.pageSize=${this.itemNum}&input.pageIndex=${this.pageNum}&input.clientTimespan=${this.clientTimespan}`).then(res => {
          if(res.data.code===1){
              this.tableData=res.data.data.giftProduct;
              this.total = res.data.data.totalCount;
              this.pics=[];
              for(let i=0;i<res.data.data.giftProduct.length;i++){ 
                this.pics.push(res.data.data.giftProduct[i].pics.split(",")[0]);
              }
              console.log(this.pics);
          }else{
            this.$message.error("查询赠品列表失败！");
          }
        })
      },
      delect(id){     //取删除的id
         this.giftprootionid=id;    //赠品id
      },
      deleteAll(){
        if ( this.choice === '设置赠品' ) {
          this.clientTimespan = new Date().toLocaleString();
          let info={
            activityId:this.giftprootionid,
            clientTimespan:this.clientTimespan
          }
          delectGift.call(this,info).then(res => {
            console.log(res);
            if (res.data.code===1) {
              this.setTheGiftList();
              this.$message.success("删除成功");
            }else{
              this.$message.error("删除失败！");
            }
          })
        } else if ( this.choice === '满赠' ) {

        } else if ( this.choice === '指定增' ) {

        } else if ( this.choice === '买几赠几' ) {

        }
      },
      query:function(){
        if ( this.choice === '设置赠品' ) {
          this.setTheGiftList();
        } else if ( this.choice === '满赠' ) {

        } else if ( this.choice === '指定增' ) {

        } else if ( this.choice === '买几赠几' ) {

        }
      },
      /**
       * 分页方法
       * @param val
       */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.itemNum = val;
        this.setTheGiftList();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum = val;
        this.setTheGiftList();
      },

      /**
       * 添加
       * add是添加，edit是编辑，detail是详情
       */
      add( type,id) {
        // name = 0是设置赠品，1是满赠，2是指定增，3是买几增几
        if ( this.choice === '设置赠品' ) {
          this.$router.push({ name: 'AddGift', query: { type: type,id:id}});
        } else if ( this.choice === '满赠' ) {
          this.$router.push({ name: 'AddFullGift', query: { type: type } });
        } else if ( this.choice === '指定增' ) {
          this.$router.push({ name: 'AddFixedGift', query: { type: type } });
        } else if ( this.choice === '买几赠几' ) {
          this.$router.push({ name: 'AddBuyAndGift', query: { type: type } });
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
