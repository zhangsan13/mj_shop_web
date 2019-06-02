<template>
  <div class="discount_box">

    <div class="btn">
      <ul>
        <li class="active">特价促销</li>
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
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="活动名称：">
          <el-input placeholder="请输入商品名称" v-model="title"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="getSpecialofferList">搜索</el-button>
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
          prop="num"
          type="index"
          fixed
          label="序号"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          fixed
          label="活动名称"
          width="260"
          align="center">
        </el-table-column>
        <el-table-column
          label="活动时间"
          align="center">
          <template slot-scope="scope">
            <div>{{scope.row.begin_time}} 至 {{scope.row.end_time}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center">
          <template slot-scope="scope">
            <div>{{scope.row.stateName}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150px">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="add('detail', scope.row.id)">查看</el-button>
            <el-button type="text" size="small" @click="add('edit', scope.row.id)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteVisible = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--页码开始-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
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
  import getSpecialofferList from '../../../../../src/api/ShopActivity/getSpecialofferList.js'

  export default {
    mounted () {
      this.getSpecialofferList();
    },
    data () {
      return {
        time:  [], // 折扣时间值
        discountOptions: [{  // 活动状态选项
          value: 0,
          label: '全部'
        }, {
          value: 1,
          label: '未开始'
        }, {
          value: 2,
          label: '进行中'
        }, {
          value: 3,
          label: '已结束'
        }],
        discountValue: 0, // 活动状态值
        title: '',
        discountData: [],
        pageIndex: 1, // 优惠券分页
        pageSize: 5,
        totalCount: 0,
        deleteVisible: false,

      }
    },
    methods: {

      /**
       * 分页方法
       * @param val
       */
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageIndex = 1;
        this.getSpecialofferList();
      },
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.getSpecialofferList();
      },

      /**
       * 添加页
       */
      add(type,id ) {
        this.$router.push({
          name: 'AddSpecialPromotion',
          query: {
            type: type,
            id: id
          }
        });
      },
      getSpecialofferList() {
        let _param = `?clientVersion=1.0.0&clientTimespan=2019-05-16 11:13:00&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&status=${this.discountValue}`;
        if (this.title !== '' && this.title !== null) {
          _param += `&key=${this.title}`;
        }
        if (this.time !== null && this.time.length > 0){
          _param += `&begin_time=${this.time[0]}&end_time=${this.time[1]}`;
        }
        getSpecialofferList.call(this, _param).then(res =>{
          if (res.data.code === 1) {
            //成功
            if (res.data.data != null) {
              this.discountData = res.data.data.offerList;
              this.totalCount = res.data.data.totalCount;
            }
          } else {
            //失败
            this.$message.error(res.data.desc);
          }
        })
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
