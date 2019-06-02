<template>
  <!--交易纠纷处理-->
  <div class="container">
    <div class="main">
      <div class="left">
        <!--详情-->
        <div class="details" v-model="tableData">
          <div class="remind" v-if="pageType === 0">{{tableData.disputeEnums }}</div>
          <div class="remind" v-if="pageType === 1">{{tableData.disputeEnums }}</div>
          <div class="title">换货详情</div>
          <!--one-->
          <div class="details-goods">
            <img :src="imgSrc" alt="">
            <div class="details-goods-right">
              <div>{{tableData.orContent}}</div>
              <div>颜色分类:黑色</div>
            </div>
          </div>
          <!--two-->
          <ul class="details-infor details-ul">
            <li><span class="details-title">买家：</span><div>{{tableData.cusName }} <span class="chat"><i></i>联系买家</span></div></li>
            <li><span class="details-title">订 单 号： </span><div>{{tableData.orNumber}}</div></li>
            <li><span class="details-title">下单时间：</span><div>{{tableData.purchaseDate }}</div></li>
            <li><span class="details-title">退单编号：</span><div>{{tableData.orderBackNum }}</div></li>
            <li><span class="details-title">退单时间：</span><div>{{tableData.startTime}}</div></li>
            <li><span class="details-title">退单类型：</span><div>{{tableData.orderBackType}}<span class="look-chargeback">查看相关退单流程</span></div></li>
          </ul>
          <!--three-->
          <ul class="dispute-infor details-ul">
            <li><span class="details-title">纠纷类型：</span><div>{{tableData.orTitle}}</div></li>
            <li><span class="details-title">问题描述：</span><div>{{tableData.orContent }}</div></li>
            <li>
              <span class="details-title">换货凭证：</span>
              <ul class="dispute-img">
                <li><img :src="imgSrc" alt=""></li>
              </ul>
            </li>
            <li><span class="details-title">联系人：</span><div>{{tableData.contactPeople }}</div></li>
            <li><span class="details-title">联系电话：</span><div>{{tableData.contactPhone }}	</div></li>
          </ul>
        </div>

        <!--纠纷进度-->
        <div class="dispute-progress">
          <div class="title">纠纷进度</div>

          <div class="example">
            <span class="iconic-left before"><i></i></span><span class="time">2016-08-01 11:09:59</span><span class="opinion">买家提交交易纠纷申请</span>
            <div class="example-right none-border">
              <ul class="show-list">
                <li><span class="show-list-left">纠纷类型：</span><span class="show-list-right">退货退款-质量问题</span></li>
                <li><span class="show-list-left">问题描述：</span><span class="show-list-right">商品质量问题</span></li>
                <li><span class="show-list-left">联系人：</span><span class="show-list-right">王珊</span></li>
                <li><span class="show-list-left">联系电话：</span><span class="show-list-right">1888384567</span></li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <!--处理中-->
      <div class="right">
        <div class="right-left" v-if="pageType === 0">
          <div class="title">卖家处理</div>
          <div class="right-step">
            <el-steps direction="vertical" :active="2" align-center>
              <el-step>
                <div class="proof-btn" slot="description">
                  <el-button type="primary">提交举证</el-button>
                </div>
              </el-step>
              <el-step title="">
                <div class="proof-content" slot="description">
                  <div class="proof-content-title"><span>*</span>举证内容：</div>
                  <div class="proof-content-textarea"><el-input style="width: 500px;" type="textarea" resize="none" :autosize="{ minRows: 6}" placeholder="请输入举证内容" v-model="proofValue"></el-input></div>
                  <div class="proof-content-upload">
                    <div>
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                      </el-upload>
                    </div>
                    <div class="upload-num"><span>1</span>/5</div>
                  </div>
                  <div class="proof-content-btn">
                    <el-button type="primary">提交</el-button>
                    <el-button type="info">取消</el-button>
                  </div>
                </div>
              </el-step>
              <el-step>
                <div class="dispose" slot="description">
                  <div class="dispose-title title">处理记录 :</div>
                  <div class="dispose-time">2019-03-06   12:25:21</div>
                  <div class="dispose-content">商品无质量问题，发货前已仔细检查</div>
                  <ul class="dispose-img">
                    <li><img :src="imgSrc" alt=""></li>
                    <li><img :src="imgSrc" alt=""></li>
                  </ul>
                  <div class="dispose-btn">
                    <el-button type="primary">继续举证</el-button>
                  </div>
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>

        <!--处理完成-->
        <div class="right-left"  v-if="pageType === 1">
          <div class="title">平台处理结果 <span>2019-03-06   12:25:21</span></div>
          <div class="right-step">
            <el-steps direction="vertical" :active="1">
              <el-step>
                <div class="result" slot="description">
                  <ul class="result-list">
                    <li><span>处理结果：</span><div>维持原判，商家同意给买家退款</div></li>
                    <li><span>说明：</span><div>商品有质量问题</div></li>
                  </ul>
                  <ul class="result-img">
                    <li><img :src="imgSrc" alt=""></li>
                    <li><img :src="imgSrc" alt=""></li>
                  </ul>
                </div>
              </el-step>
            </el-steps>
          </div>
        </div>

        <!--处理中-->
        <div class="right-right" v-if="pageType === 0">
          <div class=""><span></span>提交举证</div>
          <div class=""><span></span>提交举证</div>
          <div class=""><span></span>提交举证</div>
        </div>
        <!--处理完成-->
        <div  class="right-right" v-if="pageType === 1">
          <div class="cur-right"><span></span>平台处理结果</div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "tradeDisputeDispose",
    data(){
      return{
        pageType:1,    //页面类型     0处理中  1处理完成
        imgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/27/ddLD2QVOzpb.jpg',
        proofValue:'',
        tableData: '',
      }
    },
    computed:{
      id(){
        return this.$route.query.id;
    },
      orNumber(){
        return this.$route.query.orNumber;
      }
  },
    methods:{
      //定义日期转换函数
      dateToMs (date) {
        if(date!=null && date!=''){
          let d = new Date(date);
          let result=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
          return result;
        }
      },
      //查看纠纷详情
        searchBtn(){
          disputeDetails.call(this,'?sheetId='+this.id+'&orderBackNum='+this.orNumber+'&clientTimespan='+this.dateToMs(new Date()))
            .then(
              (res)=>{
                this.tableData = res.data.data.orderBackDetails;
              }
            )
        },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogVisible = true;
      }
    },
    created(){

    }
  }
</script>

<style lang="less" scoped>
  @import "less/tradeDisputeDispose.less";
</style>
