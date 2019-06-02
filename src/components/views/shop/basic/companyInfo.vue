<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <!--编辑-->
      <div v-show="pageType === 1">
        <div class="form_wrap">
          <div class="form_span">
            <span>联系方式 </span>
            <i>经办人、负责人须填写不同联系方式，否则将影响店铺订单信息接收</i>
          </div>
          <div class="form_box">
            <el-form-item label="经办人姓名：" prop="chargePerple_name">
              <el-input style="width: 440px;" v-model="ruleForm.chargePerple_name" placeholder="请输入经办人姓名"></el-input>
            </el-form-item>
            <el-form-item label="经办人手机：" prop="chargePerple_phone">
              <el-input style="width: 440px;" v-model="ruleForm.chargePerple_phone" placeholder="请输入经办人手机"></el-input>
            </el-form-item>
            <el-form-item label="负责人姓名：" prop="responsPerple_name">
              <el-input style="width: 440px;" v-model="ruleForm.responsPerple_name" placeholder="请输入负责人姓名"></el-input>
            </el-form-item>
            <el-form-item label="负责人手机：" prop="responsPerple_phone">
              <el-input style="width: 440px;" v-model="ruleForm.responsPerple_phone" placeholder="请输入负责人手机"></el-input>
            </el-form-item>
            <el-form-item label="集团/公司座机号：">
              <el-input style="width: 60px;" placeholder="023"></el-input>
              <span> - </span>
              <el-input style="width: 368px;" placeholder="55555555"></el-input>
            </el-form-item>

          </div>
        </div>

        <div class="form_wrap">
          <div class="form_span">
            <span>其他信息</span>
            <i>请严格按照相关证件信息，正确填写公司信息</i>
          </div>
          <div class="form_box">
            <el-form-item label="公司类型：">
              <el-select v-model="ruleForm.componyType" placeholder="请选择公司类型" style="width: 440px;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司名称：">
              <el-input style="width: 440px;" v-model="companyInfo.name" placeholder="请与营业执照上的公司名称保持一致"></el-input>
            </el-form-item>
            <el-form-item label="法人姓名：" prop="legalperson_name">
              <el-input style="width: 440px;" v-model="ruleForm.legalperson_name" placeholder="请与营业执照上的法人姓名保持一致"></el-input>
            </el-form-item>
            <el-form-item label="法人电话：">
              <el-input style="width: 440px;" v-model="companyInfo.legalPersonMobile" placeholder="请输入法人电话"></el-input>
            </el-form-item>
            <el-form-item label="法人身份证号：">
              <el-input style="width: 440px;" v-model="companyInfo.legalPersonIdcard" placeholder="请输入法人18位身份证号"></el-input>
            </el-form-item>

            <el-form-item label="法人身份证：" >
              <div class="cardImg_style">
                <div>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                  >
                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
                <p>（身份证正面照）</p>
              </div>

              <div class="cardImg_style marLeft_40">
                <div>
                  <viewer :images="['https://picsum.photos/500/300']">
                    <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/250/160`" alt="" title="点击查看大图">
                  </viewer>
                </div>
                <p>（身份证反面照）</p>
              </div>

              <div class="tip_style">要求：证件文字清新，建议使用原图</div>
            </el-form-item>

            <el-form-item label="微信账号：">
              <el-input style="width: 440px;" placeholder="请输入微信账号"></el-input>
            </el-form-item>
            <el-form-item label="支付宝账号：">
              <el-input style="width: 440px;" placeholder="请输入支付宝账号"></el-input>
            </el-form-item>

          </div>
        </div>

        <div class="marginTop_30">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="goBack">返回</el-button>
          </el-form-item>
        </div>
      </div>

      <!--详情-->
      <div v-show="pageType === 0">
        <!--审核状态显示 no_pass 是未通过，auditing 是审核中，pass 是审核通过 -->
        <div class="state pass" v-if="stateIsShow === true">
          <div class="left">
            <!--<span>审核未通过！</span>-->
            <!--<span>公司信息审核中！</span>-->
            <span>审核通过！</span>
            <span>原因：***************************************</span>
          </div>
          <div class="right">
            <span>2017-02-14</span>
            <!--<el-button type="primary" size="mini">修改</el-button>-->
            <el-button type="primary" size="mini" @click="stateIsShow = false">知道了</el-button>
          </div>
        </div>

        <div class="form_wrap">
          <div class="form_span">
            <span>联系方式</span>
          </div>
          <div class="form_box">
            <el-form-item label="经办人姓名：" >
              <p class="info_p">{{ruleForm.chargePerple_name}}</p>
            </el-form-item>
            <el-form-item label="经办人手机：" >
              <p class="info_p">{{ruleForm.chargePerple_phone}}</p>
            </el-form-item>
            <el-form-item label="负责人姓名：" >
              <p class="info_p">{{ruleForm.responsPerple_name}}</p>
            </el-form-item>
            <el-form-item label="负责人手机：" >
              <p class="info_p">{{ruleForm.responsPerple_phone}}</p>
            </el-form-item>
            <el-form-item label="集团/公司座机号：" >
              <p class="info_p">{{ruleForm.companyPhone}}</p>
            </el-form-item>
          </div>
        </div>

        <div class="form_wrap">
          <div class="form_span">
            <span>公司信息</span>
          </div>
          <div class="form_box">
            <el-form-item label="公司类型：">
              <p class="info_p">{{ruleForm.componyType}}</p>
            </el-form-item>
            <el-form-item label="公司名称：">
              <p class="info_p">{{companyInfo.name}}</p>
            </el-form-item>
            <el-form-item label="法人姓名：">
              <p class="info_p">{{companyInfo.legalPerson}}</p>
            </el-form-item>
            <el-form-item label="法人电话：">
              <p class="info_p">{{companyInfo.legalPersonMobile}}</p>
            </el-form-item>
            <el-form-item label="法人身份证号：">
              <p class="info_p">{{companyInfo.legalPersonIdcard}}</p>
            </el-form-item>
            <el-form-item label="法人身份证：" >
              <div class="cardImg_style">
                <viewer :images="idFacadeImg">
                  <img v-for="item in idFacadeImg" class="vue-lazyload avatar" v-lazy="item.pisc" alt="" title="点击查看大图">
                </viewer>
                <p>（身份证正面照）</p>
              </div>

              <div class="cardImg_style marLeft_40">
                <viewer :images="idBackImg">
                  <img v-for="item in idBackImg" class="vue-lazyload avatar" v-lazy="item.pisc" alt="" title="点击查看大图">
                </viewer>
                <p>（身份证反面照）</p>
              </div>
            </el-form-item>
            <el-form-item label="微信账号：">
              <p class="info_p">{{companyInfo.wechatAccount}}</p>
            </el-form-item>
            <el-form-item label="支付宝账号：">
              <p class="info_p">{{companyInfo.alipayAccount}}</p>
            </el-form-item>
          </div>
        </div>

        <div class="marginTop_30">
          <el-form-item>
            <el-button type="primary" @click="edit">修改</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="500px">
      <span>修改信息将提交平台审核，确定提交公司信息变更吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitData">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import GetCompanyInfo from '../../../../api/CompanyInfo/GetCompanyInfo'
  export default {
    data () {
      return {
        pageType: 0, // 页面类型：0是查看，1是编辑
        stateIsShow: true, // 审核状态显示: true是显示，false是不显示
        dialogVisible: false, // 点击修改时的确认提示
        ruleForm: {
          chargePerple_name: '',//经办人姓名
          chargePerple_phone: '',//经办人电话
          responsPerple_name: '',//负责人姓名
          responsPerple_phone: '',//负责人电话
          legalperson_name: '',//法人姓名
          imageUrl: '',
          componyType: '',
          companyPhone:''//公司电话
        },
        companyInfo:{
        },//公司信息
        idFacadeImg:[],
        idBackImg:[],
        rules: {
          chargePerple_name: [
            { required: true, message: '请输入经办人姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          chargePerple_phone: [
            { required: true, message: '请输入经办人手机', trigger: 'blur' }
          ],
          responsPerple_name: [
            { required: true, message: '请输入负责人姓名', trigger: 'blur' }
          ],
          responsPerple_phone: [
            { required: true, message: '请输入负责人手机', trigger: 'blur' }
          ],
          legalperson_name: [
            { required: true, message: '请输入法人姓名', trigger: 'blur' }
          ]
        },
        options: [{ // 公司类型参数
          value: '选项1',
          label: '个体户'
        }, {
          value: '选项2',
          label: '私营企业'
        }, {
          value: '选项3',
          label: '国营企业'
        }, {
          value: '选项4',
          label: '合资企业'
        }, {
          value: '选项5',
          label: '上市公司'
        }, {
          value: '选项6',
          label: '政府机构'
        }, {
          value: '选项7',
          label: '事业单位'
        }, {
          value: '选项8',
          label: '公益机构'
        }],
      };
    },

    methods: {
      /**
       * 表单提交
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid,x) => {
          console.log(x);
          console.log(formName, "formName==================");
          if (valid) {
            alert('submit!');
            this.dialogVisible = true;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      /**
       * 请求接口，提交数据
       */
      submitData() {
        this.dialogVisible = false;
        this.$message({ message: '修改成功', type: 'success' });
        this.pageType = 1;
      },

      /**
       * 图片上传方法
       */
      handleAvatarSuccess(res, file) {
        this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
      },
      /*beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },*/

      /**
       * 点击修改执行事件
       */
      edit() {
        this.pageType = 1;
      },

      /**
       * 返回
       */
      goBack() {
        this.pageType = 0;
      },
    },
    created: async function () {
      this.time = new Date().toLocaleString();
      this.sessionId = sessionStorage.getItem('sessionId');
      GetCompanyInfo.call(this,`?input.sessionId=${this.sessionId}&input.clientTimespan=${this.time}`).then(res=>{
        if (res.data.code === 1) {
            var data = res.data.data
            this.ruleForm.chargePerple_name = data.applier
            this.ruleForm.chargePerple_phone = data.applierPhone
            this.ruleForm.responsPerple_name = data.manager
            this.ruleForm.responsPerple_phone = data.managerPhone
            this.ruleForm.companyPhone = data.companyPhone
            this.ruleForm.componyType = data.type
            this.companyInfo.name = data.name
            this.companyInfo.legalPerson = data.legalPerson
            this.companyInfo.legalPersonMobile = data.legalPersonMobile
            this.companyInfo.legalPersonIdcard  = data.legalPersonIdcard
            this.companyInfo.alipayAccount = data.alipayAccount //支付宝
            this.companyInfo.wechatAccount  = data.wechatAccount //微信账号
            this.idFacadeImg.push({pics: data.idFacadeImg })
            this.idBackImg.push({pics: data.idBackImg })
            this.ruleForm.legalperson_name = data.legalPerson
        }
      });
    },
  }
</script>

<style lang="less" scoped>
  @import "./less/information.less";

  .avatar-uploader {
    width: 250px;
    height: 160px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: #eee;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 250px;
    height: 160px;
    line-height: 160px;
    text-align: center;
  }
  .avatar {
    width: 250px;
    height: 160px;
    display: block;
  }

  /*/deep/ .form_box > div {
    margin-bottom: 10px;
  }*/

</style>
