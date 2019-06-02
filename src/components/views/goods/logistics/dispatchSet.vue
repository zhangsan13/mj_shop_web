<template>
  <!--同城配送费用设置-->
  <div class="container">

    <div class="charge-name" v-show="pageType==='同城配送费用'||pageType==='搬楼费用'"><span class="title"><i>*</i>收费标准名称：</span><el-input v-model="chargeName" placeholder="请输入收费标准名称(仅商家可见)"></el-input></div>
    <div class="valuation" v-show="pageType==='同城配送费用'||pageType==='搬楼费用'"><span class="title"><i>*</i>计价方式：</span><el-radio v-model="radio" label="按体积">按体积</el-radio><el-radio v-model="radio" label="按重量">按重量</el-radio></div>

    <div class="stage">
      <span class="title">物流配送阶段指示图：</span>
      <div class="stage-step">
        <el-steps :space="100" :active="page.active" align-center>
          <el-step title="卖家发货"></el-step>
          <el-step title="买家所在城市市区"></el-step>
          <el-step title="送货到楼下"></el-step>
          <el-step title="上楼"></el-step>
          <el-step title="安装"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="remind" v-show="pageType==='同城配送费用'||pageType==='安装费用'">{{page.remind}}</div>

    <div class="charge-name" v-show="pageType==='安装费用'"><span class="title"><i>*</i>安装收费名称：</span><el-input v-model="chargeName" placeholder="请输入收费标准名称(仅商家可见)"></el-input></div>
    <div class="category" v-show="pageType==='安装费用'">
      <span class="title"><i>*</i>选择安装类目：</span>
      <el-select v-model="value1" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
      <el-select v-model="value2" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
      <el-select v-model="value3" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
    </div>



    <div class="main">
      <div class="add-btn"><el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogFlag=true">添加城市</el-button></div>

      <div class="remind-right" v-show="pageType==='同城配送费用'||pageType==='搬楼费用'">温馨提示：物流公司重量折体积为：200KG=[长*宽*高/6000]M³</div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column label="运送到">
            <template slot-scope="scope">
              <div  class="area-add">
                <span>{{scope.row.area}}</span><i class="area-add-icon" @click="dialogFlag=true"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="首体积(M³)">
            <template slot-scope="scope">
              <div  class="table-input">
                <input type="text">
              </div>
            </template>
          </el-table-column>
          <el-table-column label="首费(元)">
            <template slot-scope="scope">
              <div  class="table-input">
                <input type="text">
              </div>
            </template>
          </el-table-column>
          <el-table-column label="续体积(M³)">
            <template slot-scope="scope">
              <div  class="table-input">
                <input type="text">
              </div>
            </template>
          </el-table-column>
          <el-table-column label="续费(元)">
            <template slot-scope="scope">
              <div  class="table-input">
                <input type="text">
              </div>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="delete" @click="">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="add-set" @click="dialogFlag=true">+继续为其他地区设置同城配送运费</div>

      <div class="footer-btn"><el-button type="primary">保存</el-button><el-button>取消</el-button></div>

    </div>

    <ChooseArea :dialogFlag="dialogFlag" @isShow="isShow"></ChooseArea>



  </div>
</template>

<script>
  import ChooseArea from  './chooseArea'
  export default {
    props:['aaa'],
    name: "dispatchSet",
    components:{
      ChooseArea,
    },
    data(){
      return{
        pageType:'同城配送费用',   //同城配送费用   搬楼费用    安装费用
        chargeName:'',      //收费标准名称
        radio:'按体积',      //计价方式
        tableData: [{area:'未添加地区',}, {area:'未添加地区',}, {area:'未添加地区',}, {area:'未添加地区',}],
        dialogFlag:false,
        options: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}],
        value1:'',
        value2:'',
        value3:'',


      }
    },
    computed:{
      page(){
        if(this.pageType==='同城配送费用'){return {active:2,remind:'亲，请认真填写模版，至少设置10个区域，你的商品更容易被搜索到！'}}
        else if(this.pageType==='搬楼费用'){return {active:3,remind:''}}
        else if(this.pageType==='安装费用'){return {active:4,remind:'亲，安装服务市在买家购买了配送+上楼服务后选择才能选择，所以安装费请勿包含上门费'}}
      },

    },
    methods:{
      isShow(val){
        this.dialogFlag=val;
      },


    },
    created(){
      this.$parent.change(this.pageType);
    },
    mounted(){
    },
    watch:{
      aaa(n,o){
        if(n[0]===0&&n[1]===1){this.pageType='同城配送费用'}
        else if(n[0]===1&&n[1]===1){this.pageType='搬楼费用'}
        else if(n[0]===2&&n[1]===1){this.pageType='安装费用'}
        this.$parent.change(this.pageType);
        console.log(this.pageType)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "less/dispatchSet.less";
</style>
