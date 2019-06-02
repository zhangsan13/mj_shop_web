<template>
  <div class="adticle_box">
    <div class="line"></div>
    <div class="main_box">
      <div class="top">
        <span v-for="item in stateOpera" @click="stateChange( item.type )" :class="state === item.type ? 'on' : ''">{{item.name}}</span>
      </div>

      <div class="btn">
        <el-button type="default" size="small" @click="goEdit">+ 新增文章</el-button>
        <el-button type="default" size="small" @click="goMjHeadlines">满集头条</el-button>
      </div>

      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="sort"
            label="序号"
            width="80"
            align="center">
          </el-table-column>
          <el-table-column
            prop="title"
            label="文章标题"
            width="200"
            align="center">
          </el-table-column>
          <el-table-column
            prop="categary"
            label="文章分类"
            align="center">
          </el-table-column>
          <el-table-column
            prop="pic"
            label="封面图片"
            align="center">
            <template slot-scope="scope">
              <div class="table_pic">
                <span>
                  <img :src="scope.row.pic" alt="">
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="extension"
            label="商品推广"
            align="center">
          </el-table-column>
          <el-table-column
            prop="time"
            label="发布时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="260"
            align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="cancleVisible = true">取消发布</el-button>
              <!--<el-button type="text" size="small" @click="releaseVisible = true">发布</el-button>-->
              <el-button type="text" size="small" @click="goDetail">查看</el-button>
              <el-button type="text" size="small" @click="goEdit">编辑</el-button>
              <el-button type="text" size="small" @click="deleteVisible = true">删除</el-button>
              <el-dropdown>
                <span style="font-size: 12px; color: #3F9DFF; margin-left: 10px; display: inline-block; cursor: pointer;">
                  分享
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>微博</el-dropdown-item>
                  <el-dropdown-item>QQ</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>

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
      </div>
    </div>

    <!--取消发布提示框 start-->
    <el-dialog
      title="取消发布提示"
      :visible.sync="cancleVisible"
      width="500px">
      <div class="dialog_box">
        <p>确定取消发布？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="default" @click="cancleVisible = false">取消</el-button>
        <el-button type="primary" @click="cancleVisible = false">确定</el-button>
      </span>
    </el-dialog>
    <!--取消发布提示框 end-->

    <!--发布提示框 start-->
    <el-dialog
      title="发布提示"
      :visible.sync="releaseVisible"
      width="500px">
      <div class="dialog_box">
        <p>确定发布？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="default" @click="releaseVisible = false">取消</el-button>
        <el-button type="primary" @click="releaseVisible = false">确定</el-button>
      </span>
    </el-dialog>
    <!--发布提示框 end-->

    <!--删除提示框 start-->
    <el-dialog
      title="删除提示"
      :visible.sync="deleteVisible"
      width="500px">
      <div class="dialog_box">
        <p>确定删除？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="default" @click="deleteVisible = false">取消</el-button>
        <el-button type="primary" @click="deleteVisible = false">确定</el-button>
      </span>
    </el-dialog>
    <!--删除提示框 end-->

  </div>
</template>

<script>
  export default {
    mounted () {

    },
    data () {
      return {
        state: 1,
        stateOpera: [{
          name: '未审核',
          type: 1
        }, {
          name: '已审核',
          type: 2
        }, {
          name: '草稿箱',
          type: 3
        }],

        tableData: [{
          sort: '1',
          title: '卫生纸怎么选',
          categary: '居家生活',
          pic: 'https://picsum.photos/200/300',
          extension: '2个',
          time: '2019-05-12 12:12:20',
          state: '已发布',
        }, {
          sort: '2',
          title: '卫生纸怎么选',
          categary: '居家生活',
          pic: 'https://picsum.photos/200/300',
          extension: '2个',
          time: '2019-05-12 12:12:20',
          state: '待审核',
        }],
        currentPage: 1,

        cancleVisible: false, // 取消发布提示框的显示变量
        releaseVisible: false, // 发布提示框的显示变量
        deleteVisible: false, // 删除提示框的显示变量
      }
    },
    methods: {
      stateChange( type ) {
        this.state = type;
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

      /**
       * 跳转到文章详情页面
       */
      goDetail() {
        this.$router.push({ name: 'ArticleDetail' });
      },

      /**
       * 跳转到文章编辑页面
       */
      goEdit() {
        this.$router.push({ name: 'AddArticle' });
      },

      goMjHeadlines() {
        this.$router.push({ name: 'MjHeadlines' });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
