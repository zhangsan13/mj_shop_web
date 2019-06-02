<template>
  <div class="box">
    <ul class="title">
      <li v-for="(item,index) in title" :key="index" @click="changeChoice(item)">{{item}}</li>
    </ul>
    <div class="ribbon"></div>
    <div class="audit">
          <el-table
            :data="showData"
            style="width: 100%;text-align: center">
            <el-table-column
              label="序号"
              width="86">
              <template slot-scope="scope">
                <span>{{ scope.row.id}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="变更时间"
              width="262">
              <template slot-scope="scope">
                <span>{{ scope.row.date}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="营业执照号"
              width="262">
              <template slot-scope="scope">
                <span>{{ scope.row.licenseNum}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="年审营业执照副本"
              width="262">
              <template slot-scope="scope">
                <img class="license-img" :src="scope.row.licenseSrc" alt="">
              </template>
            </el-table-column>

            <el-table-column
              label="审核状态"
              width="262">
              <template slot-scope="scope">
                <span :class="scope.row.auditState==='已通过'?'pass':'nopass'">{{ scope.row.auditState}}</span>
              </template>
            </el-table-column>

            <el-table-column
              label="审核备注"
              width="262">
              <template slot-scope="scope">
                <span>{{ scope.row.auditRemark}}</span>
              </template>
            </el-table-column>


            <el-table-column label="操作" width="152">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="auditAmend(scope.$index, scope.row)">修改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="auditCurrentPage"
                :page-sizes="auditPageSizes"
                :page-size="auditPageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="auditTotal">
              </el-pagination>
            </div>
          </div>
        </div>

    <el-button class="foot-btn" type="info" @click="back">返回</el-button>


    <!--年审弹框-->
    <el-dialog
      title="年审提醒"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>请在6月30日之前完成营业执照的年审，并上传年审资料到满集网平台上。</span>
      <span slot="footer" class="dialog-footer">
    <el-button  type="primary" @click="auditSure">上传年审资料</el-button>
  </span>
    </el-dialog>


    <!--上传年审资料弹框-->
    <div class="check">
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
    </div>

  </div>
</template>

<script>
  export default {
    name: "auditList",
    beforeRouteEnter(to,from,next){
      console.log('to',to)
      console.log('from',from)

      next(
        (vm)=>{vm.backRouter=from.name}
      )
    },
    data() {
      return {
        title:['年审记录','变更记录'],
        auditTableData: [{id:1, date: '2016-05-02', licenseNum:'PJHEHHNE7465683839JHHJKJJD', licenseSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', auditState:'未通过', auditRemark:'照片模糊',},
                        {id:2, date: '2016-05-04', licenseNum:'PJHEHHNE7465683839JHHJKJJD', licenseSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', auditState:'已通过', auditRemark:'照片模糊',},
                        {id:3, date: '2016-05-01', licenseNum:'PJHEHHNE7465683839JHHJKJJD', licenseSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', auditState:'未通过', auditRemark:'照片模糊',},
                        {id:4, date: '2016-05-03', licenseNum:'PJHEHHNE7465683839JHHJKJJD', licenseSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg', auditState:'已通过', auditRemark:'照片模糊',}],
        auditPageSizes:[1, 2, 3, 4],
        auditPageSize:4,    //初始化时每页几条
        auditCurrentPage: 1,
        auditSize:4,      //每页几条
        auditCurrent:1,   //第几页

        centerDialogVisible: true,  //控制年审框

        isAnnualVerify:false,   //控制年审上传框
        annualVerifyInfor:{
          date:'',  //年审时间
          imageUrl:'',  //上传的图片
        },
        rules:{
          date:[{ required: true, message: '请选择年审时间', trigger: 'blur' }],
          imageUrl:[{ required: true, message: '请上传营业执照年审副本', trigger: 'blur' }]
        },
        backRouter:'',   //返回的路由
      };
    },
    computed:{
      auditTotal(){
        return this.auditTableData.length
      },
      showData(){
        let start=(this.auditCurrent-1)*this.auditSize
        let end=start+this.auditSize
        return this.auditTableData.filter((item,index)=>{
          if(index>=start&&index<end){
            return item
          }
        })
      }
    },
    methods: {
      changeChoice(name){
        if(name==='变更记录'){
          console.log('跳转')
          this.$router.push({name:'ChangeList',query:{backRouter:this.backRouter}})
        }
      },
      auditAmend(index, row) {
        this.isAnnualVerify=true
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.auditSize=val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.auditCurrent=val;
      },

      auditSure(){
        this.centerDialogVisible=false;
        this.isAnnualVerify=true
      },
      back(){
        console.log(this.backRouter)
        this.$router.push({name:this.backRouter})
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

    }
  }
</script>

<style lang="less" scoped>
  @import "less/auditList.less";
</style>
