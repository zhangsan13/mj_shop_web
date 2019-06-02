<template>
  <div class="addDiscount_box">

    <div class="title_box">
      <ul>
        <li class="active">添加包邮</li>
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

      <el-form-item label="包邮条件">
        <div class="add_prepend">
          <el-input style="width: 200px;" :disabled="pageType === 'detail' ? true : false">
            <template slot="prepend">购物满</template>
          </el-input>
          <i> &nbsp; 元可包邮 &nbsp; （满金额最高100元，折扣最高9.9折）</i>
        </div>
      </el-form-item>

      <el-form-item label="包邮地区">
        <div>
          <el-button type="primary" size="small" @click="choiceArea(0)" :disabled="pageType === 'detail' ? true : false">请选择包邮地区</el-button>
          <el-button type="default" size="small" @click="choiceArea(1)" :disabled="pageType === 'detail' ? true : false">除去偏远地区</el-button>
        </div>

        <div class="choiceArea">
          <span v-for="item in areaData">{{item}}</span>
        </div>
      </el-form-item>

      <el-form-item style="margin-top: 60px;">
        <el-button type="primary" @click="submitForm('ruleForm')" v-if="pageType !== 'detail'">确 定</el-button>
        <el-button @click="calcle" v-if="pageType !== 'detail'">返 回</el-button>
        <el-button @click="goBack" v-if="pageType === 'detail'">返 回</el-button>
      </el-form-item>
    </el-form>

    <!--选择地区弹框 start-->
    <el-dialog
      title="选择地区"
      :visible.sync="areaVisible"
      width="800px">
      <div class="areaDialog_box">
        <div class="top">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{areaLabel}}</el-checkbox>
        </div>
        <div class="center">
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in areaData" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="areaVisible = false">取 消</el-button>
        <el-button type="primary" @click="areaVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--选择地区弹框 end-->

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
        areaData: ['重庆', '北京', '上海', '天津', '山东', '新疆维吾尔自治区', '黑龙江', '深圳', '内蒙古', '吉林', '陕西', '广东', '河南'],
        areaVisible: false, // 地区弹框显示
        checkAll: false,
        checkedCities: [],
        isIndeterminate: true,
        areaLabel: '',
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

      /**
       * 点击选择区域/边远地区
       * type = 0 是全部，1是偏远地区
       */
      choiceArea( type ) {
        if (type === 0) {
          this.areaLabel = '全国';
        } else {
          this.areaLabel = '除去偏远地区';
        }
        this.areaVisible = true;
      },

      /**
       * 地区全选（全国）
       * @param val
       */
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.areaData : [];
        this.isIndeterminate = false;
      },

      /**
       * 地区选择
       * @param value
       */
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.areaData.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.areaData.length;
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";
</style>
