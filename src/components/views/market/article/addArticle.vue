<template>
  <div class="adticle_box">
    <div class="line"></div>
    <div class="edit_box">

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name" style="width: 500px;"></el-input>
        </el-form-item>

        <el-form-item label="文章分类" prop="categary">
          <el-select v-model="ruleForm.categary" placeholder="请选择" style="width: 300px;">
            <el-option
              v-for="item in cateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="封面图片" prop="pic">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="ruleForm.pic" :src="ruleForm.pic" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="文章编辑" prop="content">
          <vue-ueditor-wrap v-model="msg"></vue-ueditor-wrap>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交审核</el-button>
          <el-button @click="goBack">返回</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    components: {
      VueUeditorWrap
    },
    data () {
      return {
        msg:'57457',
        ruleForm: {
          name: '',
          categary: '',
          pic: '',
          content: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          categary: [
            { required: true, message: '请选择文章分类', trigger: 'change' }
          ],
          pic: [
            { required: true, message: '请上传图片', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请编辑文章', trigger: 'change' }
          ],
        },
        cateOptions: [{
          value: '0',
          label: '居家生活'
        }, {
          value: '1',
          label: '手机数码'
        }, {
          value: '2',
          label: '服装服饰'
        }],
      };
    },
    methods: {
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
      /**
       * 返回
       */
      goBack() {
        this.$router.go( -1 );
      },

      /**
       * 图片上传方法
       */
      handleAvatarSuccess(res, file) {
        this.ruleForm.pic = URL.createObjectURL(file.raw);
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./less/style.less";

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
</style>
