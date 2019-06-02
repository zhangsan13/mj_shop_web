<template>
  <div class="addDiscount_box">

    <div class="title_box">
      <ul>
        <li class="active">添加买几赠几活动</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name" label-width="100px">
        <el-input style="width: 400px;" v-model="ruleForm.name" :disabled="pageType === 'detail' ? true : false"></el-input>
        <span class="add_font">（限20字）</span>
      </el-form-item>

      <el-form-item label="活动时间" required label-width="100px">
        <div class="add_line">
          <span>
            <el-form-item prop="date1" >
              <el-date-picker
                v-model="ruleForm.date1"
                :disabled="pageType === 'detail' ? true : false"
                type="datetime"
                placeholder="请选择开始时间">
              </el-date-picker>
            </el-form-item>
          </span>
          <span class="add_span"> 至 </span>
          <span>
            <el-form-item prop="date2">
              <el-date-picker
                v-model="ruleForm.date2"
                :disabled="pageType === 'detail' ? true : false"
                type="datetime"
                placeholder="请选择结束时间">
              </el-date-picker>
            </el-form-item>
          </span>
          <span class="add_span">共</span>
          <el-input style="width: 100px;" v-model="ruleForm.name" :disabled="pageType === 'detail' ? true : false"></el-input>
          <span class="add_span">天</span>
          <i>（活动时间7-30天，从开始日00:00:00生效，结束日23:59:59失效）</i>
        </div>
      </el-form-item>

      <el-form-item label="赠品设置" label-width="100px" v-if="pageType !== 'detail'">
        <div>
          <el-button type="default" @click="shopDataVisible = true">+ 选择商品</el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="add_top" v-if="pageType !== 'detail'">
          <el-button type="default" size="small" @click="setConditionVisible = true">批量设置条件</el-button>
          <el-button type="danger" size="small">批量移除</el-button>
        </div>

        <!--添加/编辑的表格 start-->
        <div class="table table1" v-if="pageType !== 'detail'">
          <el-table
            ref="multipleTable"
            :data="tableData"
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
                  <p style="text-align: left;">
                    <a href="javascript: void(0);" @click="goDetail">2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000</a>
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="赠送条件(件)"
              width="400">
              <template slot-scope="scope">
                <div class="add_prepend">
                  <el-input style="width: 160px;" placeholder="输入金额">
                    <template slot="prepend">买</template>
                  </el-input>
                  <el-input style="width: 160px; margin-left: -5px;" placeholder="输入金额">
                    <template slot="prepend">送</template>
                  </el-input>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              label="操作"
              align="center"
              fixed="right"
              width="150">
              <template slot-scope="scope">
                <el-button type="text" @click="deleteVisible = true">移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--添加/编辑的表格 end-->

        <!--详情的表格 start-->
        <div class="table table1" v-if="pageType === 'detail'">
          <el-table
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
                  <p style="text-align: left;">
                    <a href="javascript: void(0);" @click="goDetail">2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000</a>
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="赠送条件(件)"
              width="400">
              <template slot-scope="scope">
                <span class="look_span">{{scope.row.condition}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--详情的表格 end-->

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
        <el-button type="primary" v-if="pageType !== 'detail'" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button @click="calcle">返 回</el-button>
      </el-form-item>
    </el-form>

    <!--选择商品弹框 start-->
    <el-dialog
      title="选择商品"
      :visible.sync="shopDataVisible"
      width="60%">
      <div>

        <div class="dialog_span">
          <span>
            <el-cascader
              :options="shopOptions"
              :show-all-levels="false">
            </el-cascader>
          </span>

          <span>
            <el-input placeholder="请输入商品名称"></el-input>
          </span>

          <span>
            <el-button type="primary">搜索商品</el-button>
          </span>

          <span>
            <el-button type="primary">确定</el-button>
          </span>
        </div>

        <!--表格 start-->
        <div class="table">
          <el-table
            ref="multipleTable"
            :data="tableData"
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
              label="商品图片"
              fixed
              align="center"
              width="80">
              <template slot-scope="scope">
                <viewer :images="scope.row.pic">
                  <img class="vue-lazyload pic" v-lazy="scope.row.pic" alt="" title="点击查看大图">
                </viewer>
              </template>
            </el-table-column>

            <el-table-column
              label="商品名称"
              align="center"
              width="320">
              <template slot-scope="scope">
                <div class="shopName">
                  <p style="text-align: left;">
                    <a href="javascript: void(0);" @click="goDetail">2015年度潮流红色鞋款是见覅的违法阿法阿法阿1000</a>
                  </p>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="原价(元)">
              <template slot-scope="scope">
                <div>￥60.00-80.00</div>
              </template>
            </el-table-column>

            <el-table-column
              align="center"
              label="库存(件)">
              <template slot-scope="scope">
                <div>100</div>
              </template>
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

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="shopDataVisible = false">取 消</el-button>
        <el-button type="primary" @click="shopDataVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--选择商品弹框 end-->

    <!--批量设置弹框 start-->
    <el-dialog
      title="选择商品"
      :visible.sync="setConditionVisible"
      width="600px">
      <div class="add_prepend" style="text-align: center;">
        <el-input style="width: 160px;" placeholder="输入金额">
          <template slot="prepend">买</template>
        </el-input>
        <el-input style="width: 160px; margin-left: -5px;" placeholder="输入金额">
          <template slot="prepend">送</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setConditionVisible = false">取 消</el-button>
        <el-button type="primary" @click="setConditionVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--批量设置弹框 end-->

    <el-dialog
      title="提示"
      :visible.sync="sureDialogVisible"
      width="500px">
      <div>
        <p>活动将在开始时间自动发布，发布后将不能修改，确认添加？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sureDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="cancleDialogVisible"
      width="500px">
      <div>
        <p>你已编辑了活动信息，确认放弃？</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goBack">确 定</el-button>
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
        pageType: this.$route.query.type,
        sureDialogVisible: false, // 点击确定的提示框
        cancleDialogVisible: false, // 点击取消的提示框
        ruleForm: {
          name: '',
          date1: '',
          date2: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },

        tableData: [{ // 表格数据
          sort: '1',
          pic: 'https://picsum.photos/id/237/200/300',
          condition: '满500减90元 | 100张'
        }],
        multipleSelection: [], // 表格全选参数
        currentPage: 1,
        shopDataVisible: false,
        shopOptions: [{ // 搜索条件-商品分类的选项
          value: 'wristWatch',
          label: '腕表眼镜',
          children: [{
            value: 'zhongbiao',
            label: '钟表',
            children: [{
              value: 'huaibiao',
              label: '怀表'
            }]
          }, {
            value: 'peijian',
            label: '配件',
            children: [{
              value: 'biaohe',
              label: '表盒表带'
            }]
          }]
        }, {
          value: 'xiangbao',
          label: '服饰箱包',
          children: [{
            value: 'fushi',
            label: '服饰配件',
            children: [{
              value: 'xiukou',
              label: '袖扣'
            }, {
              value: 'lingdaitou',
              label: '领带夹'
            }]
          }]
        }, {
          value: 'xiexue',
          label: '精品鞋靴',
          children: [{
            value: 'lvTongXie',
            label: '运动鞋'
          }]
        }],
        setConditionVisible: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.sureDialogVisible = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      calcle() {
        this.cancleDialogVisible = true;
      },

      goBack() {
        this.$router.go( -1 );
      },

      /**
       * 表格全选功能
       * @param val
       */
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
       * 跳转到商品详情页
       */
      goDetail() {
        this.$router.push({ name: 'GoodsDetail' });
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
