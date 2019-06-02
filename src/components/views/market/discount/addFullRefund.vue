<template>
  <div class="addDiscount_box">

    <div class="title_box">
      <ul>
        <li class="active">添加满额返券</li>
      </ul>
      <div class="ribbon"></div>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
      <el-form-item label="活动名称" prop="name">
        <el-input style="width: 400px;" v-model="ruleForm.name" :disabled="pageType === 'detail' ? true : false"></el-input>
        <span class="add_font">（限20字）</span>
      </el-form-item>

      <el-form-item label="活动时间" required>
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
          <el-input style="width: 100px;" :disabled="pageType === 'detail' ? true : false"></el-input>
          <span class="add_span">天</span>
          <i>（活动时间7-30天，从开始日00:00:00生效，结束日23:59:59失效）</i>
        </div>
      </el-form-item>

      <el-form-item label="返券规则">
        <div class="add_prepend">
          <el-input style="width: 200px;" placeholder="输入金额" :disabled="pageType === 'detail' ? true : false">
            <template slot="prepend">购物满</template>
          </el-input>
          <i>元 &nbsp;</i>
          <el-input style="width: 200px; margin-left: -5px;" placeholder="输入金额" :disabled="pageType === 'detail' ? true : false">
            <template slot="prepend">赠送</template>
          </el-input>
          <span>+ 添加</span>

          <i>（满金额最高100元，减金额最低10元且应为5的倍数）</i>
        </div>

        <div class="add_tag">
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            :closable="pageType !== 'detail' ? true : false"
            :type="tag.type">
            {{tag.name}}
          </el-tag>
        </div>
      </el-form-item>

      <el-form-item label="使用规则">
        <div class="add_prepend">
          <i>购物满 </i>
          <el-input style="width: 120px;" placeholder="请输入金额" :disabled="pageType === 'detail' ? true : false"></el-input>
          <i>元可使用，使用日期自赠送时间起 &nbsp;</i>
          <el-input style="width: 120px; margin-left: -5px;" placeholder="请输入天数" :disabled="pageType === 'detail' ? true : false"></el-input>
          <i> 天内有效（满金额最高100元，减金额最低10元且应为5的倍数）</i>
        </div>
      </el-form-item>

      <el-form-item label="领券详情" v-if="pageType === 'detail'">
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

      <el-form-item style="margin-top: 60px;">
        <el-button type="primary" @click="submitForm('ruleForm')" v-if="pageType !== 'detail'">确 定</el-button>
        <el-button @click="calcle" v-if="pageType !== 'detail'">返 回</el-button>
        <el-button @click="goBack" v-if="pageType === 'detail'">返 回</el-button>
      </el-form-item>
    </el-form>

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
          name: '五一活动优惠',
          date1: '',
          date2: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        tags: [
          { name: '买100返5块 | 100张', type: '' },
          { name: '买100返5块 | 100张', type: '' },
          { name: '买100返5块 | 100张', type: '' }
        ],
        quanTableData: [{ // 领券详情数据
          fullDiscuse: '满500减90元 | 100张',
          giveCount: '100',
          getCount: '40',
          usedCount: '10',
        }],
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
