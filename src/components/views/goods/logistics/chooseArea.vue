<template>
  <!--选择区域-->
  <div class="container">
    <!--弹框-->
    <!--:close-on-click-modal="false" :close-on-press-escape="false" :show-close="false"-->
    <el-dialog title="提示" :visible.sync="isDialogFlag" width="800px" class="dialog-area" @close="close">
      <div class="freight-set">
        <span><i>*</i>设置运费：</span><span>首体积</span><input type="text"><span>M³，首费</span><input type="text">
        <span>元，续体积</span><input type="text"><span>M³，续费</span><input type="text"><span>元</span>
      </div>
      <div class="area">
        <div class="area-title">配送到以下城区：</div>
        <ul class="area-ul" v-for="(item,index) in list" :key="index">
          <div class="area-ul-title"><el-checkbox v-model="item.choose">{{item.area}}</el-checkbox></div>
          <li class="city" v-for="(items,indexs) in item.cityChiled" :key="indexs">
            <el-checkbox v-model="items.choose">{{items.city}}</el-checkbox><span>({{5}})</span><i @click="upDown=!upDown" :class="upDown?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
            <ul class="county left" v-show="upDown">
              <li v-for="(content,idx) in items.countyChild" :key="idx"><el-checkbox>{{content.county}}</el-checkbox></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="remind">温馨提示：可以对价格相同的省市区进行多选操作</div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="isDialogFlag = false">确定</el-button>
          <el-button @click="isDialogFlag = false">取消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "chooseArea",
    props:['dialogFlag'],
    data(){
      return{
        isDialogFlag:this.dialogFlag,
        list:[{area:'全国',choose:false,cityChiled:[{city:'重庆dsfgsdgsrgsdgsdrgsdrgsdr',choose:false,countyChild:[{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'}]}]},
          {area:'较偏远地区',choose:false,cityChiled:[{city:'新疆',choose:false,countyChild:[{county:'乌鲁木齐'}]}]},
          {area:'港澳台地区',choose:false,cityChiled:[{city:'台湾',choose:false,countyChild:[{county:'台北市'},]}]},
        ],
        upDown:false,   //
      }
    },
    methods:{
      close(){
      },
    },
    watch:{
      dialogFlag(n,o){
        this.isDialogFlag=n;
      },
      isDialogFlag(n,o){
        this.$emit('isShow',this.isDialogFlag);
      }
    },
  }
</script>

<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  //弹框选择区域
  .freight-set{
    width: 750px;
    font-size: 14px;
    color: #333333;
    span{
      display: inline-block;
    }
    input{
      width: 80px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin: 0px 5px;
    }
    i{
      color: #e60012;
      margin-right: 5px;
    }

  }


  .dialog-area{
    ///deep/ .el-dialog__body{
    //  padding-bottom: 0px;
    //  height: 340px;
    //  overflow-y: auto;
    //}
    /deep/ .el-dialog__footer{
      text-align: center;
      button{
        margin: 0px 20px;
        padding: 0px;
        width: 86px;
        height: 32px;
      }
    }
  }

  .area{
    margin-top: 20px;
    width: 750px;
    //height: 150px;
    //overflow-y: auto;
    padding-top: 10px;
    padding-bottom: 20px;
    border: solid 1px #cccccc;
    display: inline-block;
    position: relative;
  }
  .area-title{
    font-size: 14px;
    color: #333333;
    padding-left: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .area-ul{
    margin-bottom: 20px;
    font-size: 0px;
    .area-ul-title{
      height: 34px;
      line-height: 34px;
      background: #ecf4fa;
      padding-left: 15px;
      /deep/ .el-checkbox__label{
        color: #333333;
        font-weight: 600;
      }

    }
    >li{
      //height: 20px;
      //line-height: 20px;

      display: inline-block;
      //margin:10px 15px;
      padding: 10px 15px;
      /deep/ .el-checkbox{
        margin-right: 0px;
      }
      /deep/ .el-checkbox__label{
        //font-size: 14px;
        color: #666666;
        width: 52px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        vertical-align: middle;
      }
      >span{
        font-size: 14px;
        color: red;
        margin-right: 5px;
      }
      i{
        font-size: 14px;
        color: #333333;
      }
    }
    .city{
      position: relative;
      .county{
        width: 390px;
        position: absolute;
        top: 100%;
        z-index: 999;
        background: #f0f0f0;
        font-size: 0px;
        li{
          width: 130px;
          display: inline-block;
          font-size: 12px;
          text-align: center;
          margin: 10px 0px;
        }
      }
      .left{
        left: 0;
      }
      .middle{
        left: -100%;
      }
      .right{
        right: 0;
      }
    }
  }

  .remind{
    margin-top: 20px;
    display: inline-block;
    font-size: 12px;
    color: #c5651f;
    padding: 0px 10px;
    height: 32px;
    line-height: 32px;
    background: #fff7e6;
    border:1px solid #ffc79c;
  }
</style>
