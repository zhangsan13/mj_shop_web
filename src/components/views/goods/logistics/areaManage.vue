<template>
  <!--地址管理-->
  <div class="container">
    <div class="main">
      <h2>新增地址</h2>
      <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="联  系  人：" prop="name">
            <el-input style="width: 247px;" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="联系手机：" prop="phone">
            <el-input style="width: 247px;" v-model="ruleForm.phone"></el-input>
          </el-form-item>

          <el-form-item label="联系座机：">
            <div class="tel-area tel">
              <el-form-item prop="telAreaCode">
                <el-input style="width: 80px;" v-model="ruleForm.telAreaCode"></el-input>
              </el-form-item>
            </div>
            <div class="tel">—</div>
            <div class="tel-num tel">
              <el-form-item prop="telNum">
                <el-input style="width: 247px;" v-model="ruleForm.telNum"></el-input>
              </el-form-item>
            </div>
          </el-form-item>

          <el-form-item label="发货地址：">
            <div class="area">
              <el-form-item prop="province">
                <el-select style="width: 138px;" v-model="ruleForm.province" placeholder="请选择省"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area">
              <el-form-item prop="city">
                <el-select style="width: 138px;" v-model="ruleForm.city" placeholder="请选择市"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area">
              <el-form-item prop="region">
                <el-select style="width: 138px;" v-model="ruleForm.region" placeholder="请选择区"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area-textarea">
              <el-form-item prop="detail">
                <el-input type="textarea" style="width: 435px;"  :autosize="{minRows:4}" resize="none" v-model="ruleForm.detail"></el-input>
              </el-form-item>
            </div>

          </el-form-item>

          <el-form-item label="邮       编：" prop="postcode">
            <el-input style="width: 247px;" v-model="ruleForm.postcode"></el-input>
          </el-form-item>

          <el-form-item prop="radio">
            <el-radio v-model="ruleForm.radio" label="默认发货地址">默认发货地址</el-radio>
            <el-radio v-model="ruleForm.radio" label="默认退货地址">默认退货地址</el-radio>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          </el-form-item>


        </el-form>


      </div>
    </div>

    <div class="table">
      <div class="remind">提示：列表中包含默认的发货、退货地址，最多保存10条地址。</div>
      <div class="table-list">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column label="联系人">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="联系电话">
            <template slot-scope="scope">
              <span>{{scope.row.phone}}</span>
            </template>
          </el-table-column>

          <el-table-column label="地址">
            <template slot-scope="scope">
              <span>{{scope.row.area}}</span>
            </template>
          </el-table-column>

          <el-table-column label="邮编">
            <template slot-scope="scope">
              <span>{{scope.row.postCode}}</span>
            </template>
          </el-table-column>

          <el-table-column label="发货地址">
            <template slot-scope="scope">
              <el-radio v-model="sendGoods" :label="scope.row.radioSend">默认</el-radio>
            </template>
          </el-table-column>

          <el-table-column label="退货地址">
            <template slot-scope="scope">
              <el-radio v-model="backGoods" :label="scope.row.radioBack">默认</el-radio>
            </template>
          </el-table-column>


          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="table-btn" @click="handleEdit(scope.$index, scope.row)">编辑</span>
              <span class="table-btn" @click="handleDelete(scope.$index, scope.row)">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>



    <el-dialog title="编辑地址" :visible.sync="dialogFlag" width="700px" center>
      <div>
        <el-form :model="ruleFormDialog" :rules="rulesDialog" ref="ruleFormDialog" label-width="100px" class="demo-ruleForm-dialog">

          <el-form-item label="联  系  人：" prop="name">
            <el-input style="width: 247px;" v-model="ruleFormDialog.name"></el-input>
          </el-form-item>

          <el-form-item label="联系电话：" prop="phone">
            <el-input style="width: 247px;" v-model="ruleFormDialog.phone"></el-input>
          </el-form-item>

          <el-form-item label="联系座机：">
            <div class="tel">
              <el-form-item prop="telAraeCode">
                <el-input style="width: 80px;" v-model="ruleFormDialog.telAraeCode"></el-input>
              </el-form-item>
            </div>
            <div class="tel">—</div>
            <div class="tel">
              <el-form-item prop="telNum">
                <el-input style="width: 247px;" v-model="ruleFormDialog.telNum"></el-input>
              </el-form-item>
            </div>
          </el-form-item>

          <el-form-item label="发货地址：">
            <div class="area">
              <el-form-item prop="province">
                <el-select style="width: 138px;" v-model="ruleFormDialog.province" placeholder="请选择省"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area">
              <el-form-item prop="city">
                <el-select style="width: 138px;" v-model="ruleFormDialog.city" placeholder="请选择市"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area">
              <el-form-item prop="region">
                <el-select style="width: 138px;" v-model="ruleFormDialog.region" placeholder="请选择区"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
              </el-form-item>
            </div>

            <div class="area-textarea">
              <el-form-item prop="detail">
                <el-input type="textarea" style="width: 435px;"  :autosize="{minRows:4}" resize="none" v-model="ruleForm.detail"></el-input>
              </el-form-item>
            </div>

          </el-form-item>

          <el-form-item label="邮       编：" prop="postcode">
            <el-input style="width: 247px;" v-model="ruleFormDialog.postcode"></el-input>
          </el-form-item>

          <el-form-item prop="radio">
            <el-radio v-model="ruleFormDialog.radio" label="默认发货地址">默认发货地址</el-radio>
            <el-radio v-model="ruleFormDialog.radio" label="默认退货地址">默认退货地址</el-radio>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitFormDialog('ruleFormDialog')">保存</el-button>
          </el-form-item>


        </el-form>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: "areaManage",
    data(){
      return{
        ruleForm:{
          name:'',
          phone:'',
          telAreaCode:'',
          telNum:'',
          province:'',
          city:'',
          region:'',
          detail:'',
          postcode:'',
          radio:'默认发货地址',
        },
        rules:{
          name:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          province:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          city:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          region:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          detail:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
        },
        options: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}],
        sendGoods:'1',
        backGoods:'1',
        tableData: [{name: '王小虎', phone: '12345678911', area: '重庆 重庆市 江北区 观音桥建新东路85号', postCode:'400000', radioSend:'1', radioBack:'1',},
          {name: '王小虎', phone: '12345678911', area: '重庆 重庆市 江北区 观音桥建新东路85号', postCode:'400000', radioSend:'2', radioBack:'2',},
          {name: '王小虎', phone: '12345678911', area: '重庆 重庆市 江北区 观音桥建新东路85号', postCode:'400000', radioSend:'3', radioBack:'3',},
          {name: '王小虎', phone: '12345678911', area: '重庆 重庆市 江北区 观音桥建新东路85号', postCode:'400000', radioSend:'4', radioBack:'4',},
        ],
        dialogFlag:false,
        ruleFormDialog:{
          name:'',
          phone:'',
          telAraeCode:'',
          telNum:'',
          province:'',
          city:'',
          region:'',
          detail:'',
          postcode:'',
          radio:'默认发货地址',
        },
        rulesDialog:{
          name:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          phone:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          province:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          city:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          region:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          detail:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
        },
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFlag=true;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData.splice(index,1);
        this.$message.error('默认的发货/退货地址不能删除，请先设置其他地址为默认再执行删除操作');
      },

      submitFormDialog(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        this.dialogFlag=false;
      },

    },
    created(){
      this.$parent.change('地址管理');
    },
  }
</script>

<style lang="less" scoped>
  @import "less/areaManage.less";
</style>
