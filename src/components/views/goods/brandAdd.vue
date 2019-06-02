<template>
  <!--新增品牌-->
  <div class="container">
    <h2>
      <div></div>
      <span>新增品牌</span></h2>
    <div class="main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="155px" class="demo-ruleForm">

        <el-form-item label="品牌名：" prop="name">
          <el-input v-model="ruleForm.name" placeholder="必须与上传证照的品牌名一致" maxlength="50"></el-input>
        </el-form-item>

        <el-form-item label="商标注册号/申请号：" prop="num">
          <el-input v-model="ruleForm.num" placeholder="请填写一种商标注册证和商标受理通知书中的注册号或申请号" maxlength="50"></el-input>
        </el-form-item>

        <el-form-item label="品牌类型：" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="0">国内</el-radio>
            <el-radio label="1">国外</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="品牌所有人：" prop="owner">
          <el-input v-model="ruleForm.owner" placeholder="请填写商标注册证或商标受理通知书的注册人或申请人信息" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item label="授权到期时间：" prop="date">
          <el-date-picker
            v-model="ruleForm.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

        <!--   该功能暂未实现
                <el-form-item label="商标注册证/授权通知书/品牌授权书：" prop="brandImg" class="brand-img">
                  <div>
                    <el-upload
                      class="avatar-uploader brand-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                    >
                      <img v-if="ruleForm.brandImg" :src="ruleForm.brandImg" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <ul>
                      <li>1、如果您是品牌所有者，请上传商标注册证</li>
                      <li>2、如果您是经销商/代理商，请上传品牌授权书</li>
                      <li>3、请上传加盖了公章的彩色扫描件，支持 <span>JPG、PNG、JEPG格式</span> <span @click="dialogFlag=true">查看示例</span></li>
                    </ul>
                  </div>
                </el-form-item>

                <el-form-item label="品牌logo：" prop="brandImgLogo">
                  <div>
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                    >
                      <img v-if="ruleForm.brandImgLogo" :src="ruleForm.brandImgLogo" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </div>
                </el-form-item>-->

                <el-form-item class="foot-btn">
                  <el-button type="primary" @click="submitForm('ruleForm')">提交审核</el-button>
                  <el-button @click="resetForm('ruleForm')">返回</el-button>
                </el-form-item>
              </el-form>
            </div>

            <!--查看示例弹框-->
    <el-dialog class="example" title="示例" :visible.sync="dialogFlag" width="610px" center>
      <ul>
        <li><img :src="exampleLeft" alt="">
          <p>商标注册证</p></li>
        <li><img :src="exampleRight" alt="">
          <p>授权书</p></li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFlag = false">关闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import AddApplyBrand from '../../../../src/api/ShopBrand/AddApplyBrand'
  import ExistSysBrand from '../../../../src/api/ShopBrand/ExistSysBrand'

  export default {
    name: "brandAdd",
    data() {
      return {
        ruleForm: {
          name: '',
          num: '',
          type: '',
          owner: '',
          date: '',
          brandImg: 'http://file.manjiwang.com/?d17f5e35eec3e026c061d0972adb4efd', //临时写一个默认图片   //品牌授权书图片
          brandImgLogo: 'http://file.manjiwang.com/?d17f5e35eec3e026c061d0972adb4efd', //临时写一个默认图片  //品牌logo
        },
        rules: {
          name: [{required: true, message: '请输入品牌名', trigger: 'blur'}],
          num: [{required: true, message: '请输入商标注册号/申请号', trigger: 'blur'}],
          type: [{required: true, message: '请选择品牌类型', trigger: 'change'}],
          owner: [{required: true, message: '请输入品牌所有人', trigger: 'blur'}],
          date: [{required: true, message: '请选择授权到期时间', trigger: 'blur'}],
          brandImg: [{required: true, message: '请上传商标注册证/授权通知书/品牌授权书', trigger: 'change'}],
          brandImgLogo: [{required: true, message: '请上传品牌Logo', trigger: 'change'}],
        },
        dialogFlag: false,  //控制是否显示弹框
        exampleLeft: require('./img/example-left.png'),
        exampleRight: require('./img/example-right.png'),
        sessionId: sessionStorage.getItem('sessionId'),
        time: new Date().toLocaleString(),
        loginType: "PC",
        clientVersion: "1",
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            ExistSysBrand.call(this,`?brandName=${this.ruleForm.name}&sessionId=${this.sessionId}&loginType=${this.loginType}&clientVersion=${this.clientVersion}&clientTimespan=${this.time}`).then(res=>{
              if (res.data.data === false)
              {
                let model = {
                  name: this.ruleForm.name,
                  logo: this.ruleForm.brandImgLogo,
                  authorizationImg: this.ruleForm.brandImg,
                  authorizationPerson: this.ruleForm.owner,
                  registerNo: this.ruleForm.num,
                  brandType: this.ruleForm.type,
                  applyType: this.ruleForm.type,
                  expireDate: this.ruleForm.date,
                  sessionId: this.sessionId,
                  loginType: this.loginType,
                  clientVersion: this.clientVersion,
                  clientTimespan: this.time
                };
                AddApplyBrand.call(this,model).then(res=>{
                  if (res.data.code === 1)
                  {
                    this.$message({
                      showClose: true,
                      message: '提交成功，请耐心等待平台审核',
                      type: 'success'
                    });
                    this.$router.push({path: '/goods/brandManage'})
                  }
                })
              }
              else {
                this.$confirm("系统品牌已存在相同品牌，请勿重复提交相同品牌", "提示", {
                  confirmButtonText: "确定",
                  type: "warning"
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$router.go(-1);
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "less/brandAdd.less";
</style>
