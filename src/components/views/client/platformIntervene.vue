<template>
  <!--申请平台介入-->
  <div class="container">
    <div class="line"></div>
    <div class="main">
      <!--评价信息-->
      <div class="evaluate">
        <div class="evaluate-title">评价信息</div>
        <ul class="evaluate-list">
          <li><span>订 单 号：</span><div class="evaluate-list-num">CDG954585422255522DF44</div></li>
          <li><span>订单商品：</span><div class="evaluate-list-goods">小西牛 纯牛奶全脂鲜牛奶常温儿童早餐高原奶整箱 243ML*12瓶</div></li>
          <li><span>评      价：</span><div class="evaluate-grade"><i class="evaluate-grade-icon super"></i><span>超赞</span></div></li>
          <li>
            <span>评价内容：</span>
            <div class="evaluate-content">
              <div class="evaluate-content-main">包装好，发货快。货品很新鲜。快递员很负责任。但是买三件，分两批到货，都是一天。一批中午，第三件下午到。可以的，我满意！全五分好评！很好，牛奶节买的，非常划算。</div>
              <ul class="evaluate-content-ul">
                <li>
                  <viewer class="evaluate-content-img" :images="imgSrc">
                    <img class="vue-lazyload avatar" v-lazy="imgSrc[0]" alt="" title="点击查看大图">
                  </viewer>
                </li>
              </ul>
              <div class="evaluate-add">
                <div class="evaluate-add-title">【追 评】</div>
                <div class="evaluate-content-main">安装比较麻烦，需要把旧的机器拆掉，安装上新的，安装和拆机好麻烦，安装好试了一下，声音不太大，而且送货很快！希望夏天使用时也很好！整体觉得不错，就是安装时，材料费用还是挺高的～～</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--申请原因和意愿-->
      <div class="reason">
        <div class="reason-title"><span>*</span>申请原因和意愿：</div>
        <el-input type="textarea" style="width: 800px;"  v-model="reason" :autosize="{ minRows: 8}" resize="none" minlength="20"  maxlength="500" show-word-limit placeholder="20-500字，必填。请在这里说明您需要平台介入处理的原因以及您对处理的期！"></el-input>
      </div>
      <!--上传凭证-->
      <div class="evidence">
        <div class="evidence-title"><span>上传凭证：</span>商品实物图片，聊天记录截图，物流信息证明等截图，最多可上传5张图片</div>
        <ul class="evidence-ul">
          <li>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </li>
        </ul>
      </div>
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitCheck">提交审核</el-button>
        <el-button type="info">返回</el-button>
      </div>

    </div>


    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "platformIntervene",
    data(){
      return{
        imgSrc:['http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/fHommAZzcbc.jpg'],
        reason:'',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitCheck(){
        this.$confirm('确定要提交申请吗？', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '申请成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消申请'
          });
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "less/platformIntervene.less";
</style>
