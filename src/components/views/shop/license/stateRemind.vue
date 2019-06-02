<template>
    <div>
      <!--承诺书-->
      <div class="promise" v-if="pageType===0">
        <div class="remind">
          您的营业执照还有XX天到期，请及时更新营业执照相关信息
        </div>
        <div class="promise-main">
            <div class="date">营业执照承诺办证日期<span>2018-05-29</span></div>
            <div class="promise-book">
              <viewer :images="['https://picsum.photos/500/300']">
                <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/250/160`" alt="" title="点击查看大图">
              </viewer>
            </div>
        </div>
        <el-button class="promise-btn" type="primary" @click="upLicense">上传营业执照</el-button>
      </div>



      <!--营业执照-->
      <div class="license" v-if="pageType===1">
        <div class="remind" v-if="stateLicense===0">您的营业执照还有XX天到期，请及时更新营业执照相关信息</div>
        <div class="remind" style="color: #fb6800"  v-if="stateLicense===1"><i class="el-icon-time"></i><span>审核中！</span></div>
        <div class="remind" style="color: green"  v-if="stateLicense===2"><i class="el-icon-circle-check-outline"></i><span>审核通过</span></div>
        <div class="remind" style="color: #fb6800"  v-if="stateLicense===3"><i class="el-icon-circle-close-outline"></i><span>审核未通过</span><span class="reason">原因*******************</span></div>
        <div  class="license-main">
            <div class="license-head-btn"  v-if="stateLicense===0||stateLicense===3">
              <el-button type="primary" @click="record">年审/变更记录</el-button>
              <el-button type="primary" @click="annualVerify">上传年审资料</el-button>
            </div>
            <div>
              <div class="license-num">营业执照号<span>PJHEHHNE7465683839JHHJKJJD</span></div>
            </div>
            <div class="license-img">
              <viewer :images="['https://picsum.photos/500/300']">
                <img class="vue-lazyload avatar" v-lazy="`https://picsum.photos/250/160`" alt="" title="点击查看大图">
              </viewer>
            </div>
            <div class="date">成立日期<span>2018-05-29</span></div>
            <div class="date">有效期至<span>2018-05-29</span></div>
        </div>
        <el-button class="license-btn" type="primary"  v-if="stateLicense!==1" @click="amend">修改</el-button>
      </div>





      <!--上传年审资料弹框-->
      <el-dialog
        title="新增年审记录"
        :visible.sync="isAnnualVerify"
        width="615px"
        center>

        <el-form  :model="annualVerifyInfor" :rules="rules" ref="annualVerifyInfor" class="demo-form">

          <el-form-item label="年审时间" prop="date">
            <el-date-picker
            clearable
            v-model="annualVerifyInfor.date"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item class="year-upload" label="年审营业执照副本" prop="imageUrl">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleCheckSuccess"
              :before-upload="beforeCheckUpload">
              <img v-if="annualVerifyInfor.imageUrl" :src="annualVerifyInfor.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>



          </el-form-item>

          <el-form-item class="form-btn">
            <el-button type="primary" @click="annualVerifySure('annualVerifyInfor')">提交审核</el-button>
            <el-button @click="annualVerifyCancel('annualVerifyInfor')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <!--日期提醒-->

      <el-dialog
        :title="dateTitle"
        :visible.sync="dateRemind"
        width="30%"
        center>
        <div>{{dateRemindContent}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dateRemindBtn">{{dateRemindBtnContent}}</el-button>
        </span>
      </el-dialog>

    </div>


</template>

<script>
  export default {
    name: "stateRemind",
    data(){
      return{
        pageType:1,   //页面类型  0是承诺书  1是营业执照
        stateLicense:0,    //营业执照的状态  0到期提醒   1审核中  2审核通过   3审核未通过
        isAnnualVerify:false,   //控制年审框
        annualVerifyInfor:{
          date:'',  //年审时间
          imageUrl:'',  //上传的图片
        },
        rules:{
          date:[{ required: true, message: '请选择年审时间', trigger: 'blur' }],
          imageUrl:[{ required: true, message: '请上传营业执照年审副本', trigger: 'blur' }]
        },
        dateRemind:true,    //控制时间提醒框
        dateTitle:'营业执照到期提醒',
        dateRemindContent:'您的营业执照还有XX天到期，请及时更新营业执照相关信息',
        dateRemindBtnContent:'修改',
      }
    },
    methods:{




      //上传营业执照
      upLicense(){
        this.$router.push({name:'Amend'})
      },




      //年审/变更记录
      record(){
        this.$router.push({name:'AuditList'})
      },

      //年度审核
      annualVerify(){
        this.isAnnualVerify=true
      },
      annualVerifyCancel(formName){
        console.log('取消')
        this.$refs[formName].resetFields();
        this.isAnnualVerify=false
      },
      annualVerifySure(formName){
        console.log('确定')
        // this.isAnnualVerify=false
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$message({
              message: '提交成功，请耐心等待平台审核',
              type: 'success'
            });
            this.isAnnualVerify=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //年审图片上传
      handleCheckSuccess(res, file) {
        this.annualVerifyInfor.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.annualVerifyInfor.imageUrl)
      },
      beforeCheckUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 10;
        //
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      },


      //日期提醒
      dateRemindBtn(){
        console.log('日期提醒按钮')
        this.dateRemind=false
      },


      amend(){
        this.$router.push({name:'Amend'})
      },

    }
  }
</script>

<style lang="less" scoped>
  @import "less/stateRemind.less";
</style>
