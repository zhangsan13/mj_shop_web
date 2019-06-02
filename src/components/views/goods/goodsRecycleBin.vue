<template>
  <div class="goodsRecycleBin_box">
    <div class="tips">
      <p>温馨提示：只有已下架、审核未通过的商品可以移入回收站；商品被永久删除后无法还原。</p>
    </div>

    <div class="btn">
      <el-button type="danger" size="small" @click="goodsDelete">批量永久删除</el-button>
      <el-button type="default" size="small" @click="goodsReduction">批量还原</el-button>
    </div>

    <div class="table">
      <el-table
        ref="multipleTable"
        :data="recycleBinData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          label="商品"
          align="center"
          width="150">
          <template slot-scope="scope">
            <div class="goods">
              <span>
                <viewer :images="scope.row.img">
                  <img class="vue-lazyload pic" v-lazy="scope.row.img" alt="" title="点击查看大图">
                </viewer>
              </span>
              <div>
                <p>{{scope.row.name}}</p>
                <i>{{scope.row.cate}}</i>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="市场价(元)"
          align="center">
          <template slot-scope="scope">
            <div>
              ￥ {{ scope.row.marketPrice }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="销售价(元)"
          align="center">
          <template slot-scope="scope">
            <div>
              ￥ {{ scope.row.sellPrice }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="statusDesc"
          label="商品状态"
          align="center">
        </el-table-column>
        <el-table-column
          prop="opera"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="goodsReduction(scope.row.id)">还原</el-button>
              <el-button type="text" @click="goodsDelete(scope.row.id)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

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

    <!--没选择商品时的提示框 start-->
    <el-dialog
      title="提示"
      :visible.sync="noShopDateVisible"
      width="500px">
      <div class="dialog_box">
        <p>请选择商品进行操作，可以选择多个</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="noShopDateVisible = false">知道了</el-button>
      </span>
    </el-dialog>
    <!--没选择商品时的提示框 end-->

    <!--选择商品时的弹框 start-->
    <el-dialog
      title="提示"
      :visible.sync="shopDateVisible"
      width="500px">
      <div class="dialog_box">
        <p>您确定要永久删除这些商品吗？</p>
        <p>永久删除后，您将无法再查看这些商品，请谨慎操作！</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="shopDateVisible = false">取 消</el-button>
        <el-button type="primary" @click="shopDateVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!--选择商品时的弹框 end-->

  </div>
</template>

<script>
import GoodsList from '../../../api/goods/goodsRecycleBinList';
export default {
    data() {
        return {
            recycleBinData: [{ // 表格数据
                name: '商品名称商品名称商品名称商品名称商品名称商品名称',
                img: 'https://picsum.photos/200',
                cate: '自定义分类',
                marketPrice: '255.00',
                sellPrice: '255.00',
                state: '已下架'
            }, { // 表格数据
                name: '商品名称商品名称商品名称商品名称商品名称商品名称',
                img: 'https://picsum.photos/200/300/?blur=2',
                cate: '男士男子 > 牛仔裤',
                marketPrice: '255.00',
                sellPrice: '255.00',
                state: '审核未通过'
            }],
            multipleSelection: [], // 选中事件
            noShopDateVisible: false, // 没选择商品时的弹框显示
            shopDateVisible: false, // 选择商品时删除的弹框显示
            page: { //分页参数
                listTotal: 0,
                currentPage: 1,
                currentPageSize: 10
            }
        }
    },
    mounted: function(){
        this.initTableData();
    },
    methods: {
        initTableData: function(){
            GoodsList.call(this, 
                '?pageIndex=' + this.page.currentPage + 
                '&pageSize=' + this.page.currentPageSize + 
                '&clientVersion=1.0.0' + 
                '&clientTimespan=' + this.$Tool.formatDate(new Date())
            ).then(res => {
                if(res.data.code == 1){
                    this.listTotal = res.data.data.totalCount;
                    this.recycleBinData = res.data.data.goodsList;
                }
            })
        },
        /**
         * 多选事件
         * @param val
         */
        handleSelectionChange(val) {
            console.log(val, "选中的数据");
            this.multipleSelection = val;
        },
        /**
         * 删除操作
         */
        goodsDelete(id) {
            shopDateVisible = true;
            if (this.multipleSelection.length > 0) {
                // 选择了商品时的弹框
                this.shopDateVisible = true;
            } else {
                // 没选择商品时的弹框
                this.noShopDateVisible = true;
            }
        },
        /**
         * 还原操作
         */
        goodsReduction(id) {
            if (this.multipleSelection.length > 0) {
                // 选择了商品时的弹框
                console.log("商品还原到仓库中");
            } else {
                // 没选择商品时的弹框
                this.noShopDateVisible = true;
            }
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

<style lang="less" scoped>
  @import "./less/goodsRecycleBin.less";
</style>
