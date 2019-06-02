<template>
  <div class="container">
    <div class="title"><span>你最近使用的类目：</span><span>{{type.join('>')}}</span></div>
    <div class="upload-title"><span>当前类目资质认证需要上传：</span><span>化妆品资质许可证</span></div>
    <div class="upload">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageSrc" :src="imageSrc" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="upload-remind"><i class="el-icon-warning"></i>如果暂无许可证，可延期上传，审核通过后可以正常经营</div>

    <div class="input">
      <div class="input-title">计划上传时间 :</div><el-date-picker v-model="uploadDate" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <div class="textarea">
      <div class="input-title">原因说明 :</div>
      <div class="textarea-main"><el-input type="textarea" :autosize="{ minRows: 4}" resize="none" placeholder="200字以内" maxlength=200 clearable v-model="reason"></el-input></div>
    </div>

    <div class="foot-btn">
      <el-button type="primary">确认</el-button>
      <el-button type="info" plain>取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {

    },
    data () {
      return {
        type:['彩妆/香水/美妆工具','BB霜','12PCS'],
        imageSrc:"",
        uploadDate:'',    //计划上传时间
        reason:'',      //原因说明
      }
    },
    methods:{

      //图片上传
      handleAvatarSuccess(res, file) {
        this.imageSrc = URL.createObjectURL(file.raw);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  /*@import "./less/index.less";*/
  @import "less/shopAuth.less";
</style>
