<template>
  <div class="discount_box">

    <div class="btn">
      <ul>
        <li class="active">满额返券</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <!--条件筛选 start-->
    <div class="screen" style="margin-top: 0;">
      <el-form :inline="true" class="demo-form-inline" label-width="100px">

        <el-form-item label="活动状态：">
          <el-select v-model="discountValue" placeholder="请选择">
            <el-option
              v-for="item in discountOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间：">
          <el-date-picker
            v-model="time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="活动名称：">
          <el-input placeholder="请输入商品名称"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add('add')">添加</el-button>
        </el-form-item>

      </el-form>
    </div>
    <!--条件筛选 end-->

    <div>
      <el-table
        :data="discountData"
        border
        style="width: 100%">
        <el-table-column
          prop="sort"
          fixed
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          fixed
          label="活动名称"
          width="260"
          align="center">
        </el-table-column>
        <el-table-column
          label="活动时间"
          align="center"
          width="200">
          <template slot-scope="scope">
            <div>{{scope.row.time}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="返券规则"
          align="center"
          width="320">
          <template slot-scope="scope">
            <div class="discountList_span">
              <span v-for="item in scope.row.fullReduction">{{item.rules}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="已赠送张数"
          align="center">
          <template slot-scope="scope">
            <div>{{scope.row.giveCount}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="已使用张数"
          align="center">
          <template slot-scope="scope">
            <div>{{scope.row.usedCount}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center">
          <template slot-scope="scope">
            <div>{{scope.row.state}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150px">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="add('detail')">查看</el-button>
            <el-button type="text" size="small" @click="add('edit')">编辑</el-button>
            <el-button type="text" size="small" @click="deleteVisible = true">删除</el-button>
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

    <el-dialog
      title="提示"
      :visible.sync="deleteVisible"
      width="500px">
      <p>删除后不能恢复，确认删除？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    mounted () {

    },
    data () {
      return {
        time:  [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], // 折扣时间值
        discountOptions: [{  // 活动状态选项
          value: '1',
          label: '未开始'
        }, {
          value: '2',
          label: '进行中'
        }, {
          value: '3',
          label: '已过期'
        }],
        discountValue: '', // 活动状态值
        discountData: [{   // 优惠券表格数据
          sort: '1',
          name: '返券不止满500元赠送2张',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          fullReduction: [{
            rules: '满500元返20元，下次购物满500元可用',
          }, {
            rules: '满500元返20元，下次购物满500元可用',
          }],
          giveCount: '50',
          usedCount: '20',
          state: '进行中',
        }, {
          sort: '2',
          name: '返券不止满500元赠送2张',
          time: '2017.04.29 00:00 至 2017.05.01 23:59',
          condition: '全国购物满888元可包邮',
          fullReduction: [{
            rules: '满500元返20元，下次购物满500元可用',
          }],
          giveCount: '100',
          usedCount: '50',
          state: '已结束',
        }],
        currentPage: 1, // 优惠券分页
        deleteVisible: false,

      }
    },
    methods: {

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
       * 添加页
       */
      add( type ) {
        this.$router.push({
          name: 'AddFullRefund',
          query: { type: type }
        });
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
