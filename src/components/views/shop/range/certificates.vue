<template>
  <!--资质证件-->
  <div class="container">
    <ul class="menu"><li v-for="(item,index) in list" :key="index" @click="skip(index)" :class="current===index?'skip':''"><span>{{item}}</span></li></ul>

    <!--已上传-->
    <div class="already" v-show="current===0">
      <el-table
        :data="tableDataAlready"
        style="width: 100%" :border="true">
        <el-table-column label="经营范围">
          <template slot-scope="scope">
            <span>{{ scope.row.rang }}</span>
          </template>
        </el-table-column>
        <el-table-column label="资质名称">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="证件有效期至">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <span :class="scope.row.state==='未通过'?'state-no':scope.row.state==='通过'?'state-pass':'stateing'">{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="原因">
          <template slot-scope="scope">
            <span>{{ scope.row.reason }}</span>
          </template>
        </el-table-column>
        <el-table-column label="我的证件">
          <template slot-scope="scope">
            <viewer class="describe-ul-img" :images="scope.row.imgSrc">
              <img class="papers vue-lazyload avatar" v-lazy="scope.row.imgSrc[0]" alt="" title="点击查看大图">
            </viewer>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <span class="operation" :class="scope.row.state === '审核中'?'stateing':''" @click="upload(scope.$index, scope.row)">{{scope.row.state==='通过'?'更新':'重新上传'}}</span>
            <span class="operation" :class="scope.row.state === '审核中'?'stateing':''" v-show="scope.row.state !== '通过'" @click="uploadPostpone(scope.$index, scope.row)">延期上传</span>
            <span class="operation" @click="lookCertificate(scope.$index, scope.row)">查看证件示例</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--延期上传-->
    <div class="postpone" v-show="current===1">
      <el-table
        :data="tableDataPostpone"
        style="width: 100%" :border="true">
        <el-table-column label="经营范围">
          <template slot-scope="scope">
            <span>{{ scope.row.rang }}</span>
          </template>
        </el-table-column>
        <el-table-column label="资质名称">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="计划上传时间">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="我的证件">
          <template slot-scope="scope">
            <viewer class="describe-ul-img" :images="scope.row.imgSrc">
              <img class="papers vue-lazyload avatar" v-lazy="scope.row.imgSrc[0]" alt="" title="点击查看大图">
            </viewer>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <span class="operation" :class="scope.row.state === '审核中'?'stateing':''"  @click="upload(scope.$index, scope.row)">上传</span>
            <span class="operation" @click="lookCertificate(scope.$index, scope.row)">查看证件示例</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--未上传-->
    <div class="without"  v-show="current===2">
      <el-table
        :data="tableDataWithout"
        style="width: 100%" :border="true">
        <el-table-column label="经营范围">
          <template slot-scope="scope">
            <span>{{ scope.row.rang }}</span>
          </template>
        </el-table-column>
        <el-table-column label="资质名称">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <span class="operation" @click="upload(scope.$index, scope.row)">上传</span>
            <span class="operation" @click="uploadPostpone(scope.$index, scope.row)">延期上传</span>
            <span class="operation" @click="lookCertificate(scope.$index, scope.row)">查看证件示例</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="btn">
      <el-button type="primary">提交</el-button>
      <el-button type="info">返回</el-button>
    </div>


    <!--重新上传,更新-->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogUpload"
      width="520px"
      center>
      <div class="dialog-upload">
        <div><span>证件到期时间：</span><el-date-picker v-model="expireTime" type="date" placeholder="选择日期"></el-date-picker></div>
        <div class="upload">
          <span>上传证件：</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogUpload = false">提交</el-button>
      </span>
    </el-dialog>

    <!--延期上传-->
    <el-dialog
      title="延期上传"
      :visible.sync="dialogPostpone"
      width="520px"
      center>
      <div class="postpone-upload">
        <div><span>计划上传时间：</span><el-date-picker v-model="postponeTime" type="date" placeholder="选择日期"></el-date-picker></div>
        <div class="postpone-reason"><span>原因说明：</span><el-input type="textarea" v-model="postponeReason" :autosize="{ minRows: 4}" placeholder="200字以内" maxlength="200" show-word-limit resize="none"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPostpone = false">提交</el-button>
      </span>
    </el-dialog>

    <!--查看证件示例-->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogLook"
      width="520px"
      center>
      <div class="dialog-look">
        <img :src="lookSrc" alt="">
      </div>
    </el-dialog>


  </div>
</template>

<script>
  export default {

    data(){
      return{
        list:['已上传','延期上传','未上传'],
        current:0,
        tableDataAlready: [{rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'审核中', reason:'图片模糊', imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'未通过', reason:'图片模糊', imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'通过', reason:'图片模糊', imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},

        ],
        tableDataPostpone: [{rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'审核中',imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'同意延期', imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证', date: '2016-05-02', state:'同意延期', imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},

        ],
        tableDataWithout: [{rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证',imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证',imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},
          {rang:'彩妆工具 > BB霜 > 12PCS', name:'化妆品经营许可证',imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg'],},

        ],
        dialogTitle:'资质证件名称',
        dialogUpload:false,
        expireTime:'',  //到期时间
        imageUrl: '',
        dialogPostpone:false,
        postponeTime:'',  //延期时间
        postponeReason:'',
        dialogLook:false,
        lookSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/7shbd7QGHha.jpg',
      }
    },

    methods:{
      skip(index){
        this.current=index;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //重新上传，更新
      upload(index, row){
        if(row.state==='审核中'){
          return false;
        }else{
          this.dialogUpload=true;
        }
      },
      //延迟上传
      uploadPostpone(index, row){
        if(row.state==='审核中'){
          return false;
        }else{
          this.dialogPostpone=true;
        }
      },
      //查看证件示例
      lookCertificate(){
        this.dialogLook=true;
      },


      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;
        //
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
    }

  }
</script>

<style lang="less" scoped>
@import "less/certificates.less";
//上传
.upload{
  .avatar-uploader{
    display: inline-block;
    vertical-align: top;
  }
  /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
