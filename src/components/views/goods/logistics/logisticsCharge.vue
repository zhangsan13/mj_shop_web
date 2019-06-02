<template>
  <!--物流设置收费-->
  <div class="container">

    <div class="stage">
      <span class="title">物流配送阶段指示图：</span>
      <div class="stage-step">
        <el-steps :space="100" :active="2" align-center>
          <el-step title="卖家发货"></el-step>
          <el-step title="买家所在城市市区"></el-step>
          <el-step title="送货到楼下"></el-step>
          <el-step title="上楼"></el-step>
          <el-step title="安装"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="charge-name">
      <span class="title">收费标准名称：</span>
      <el-input v-model="chargeName" placeholder="请输入收费标准名称（仅商家可见）"></el-input>
    </div>

    <div class="valuation">
      <span class="title"><i>*</i>计价方式：</span>
      <div class="valuation-right">
        <el-radio v-model="radio" label="按重量">按重量</el-radio>
        <el-radio v-model="radio" label="按体积">按体积</el-radio>
        <div class="remind-one">大件商品，如家具等建议用“按体积”计价方式</div>
        <div  class="remind-two">温馨提示：物流公司重量折体积为：200KG=[长*宽*高/6000]M³</div>
        <div class="norm">
          <div class="norn-left">
            收费标准：<input/>M³内，<input/>元，每增加<input/>M³，增加运费<input/>元
          </div>
          <ul class="norn-right">
            <li>1、此收费为物流公司参考标准，仅作参考，请咨询就近物流网点后再确认收费标准</li>
            <li>2、设置的收费标准原则上不高于平台参考标准，以免造成商品运费过高，影响店铺销售保存</li>
            <li>3、除指定地区外，其余地区的运费默认采用此“收费标准”</li>
            <li>4、运费设置为“0”表示免运费；增加运费设置为“0”时表示超体积不加价</li>
          </ul>
        </div>

        <div class="charge-add" @click="handleAdd">+为指定地区设置运费</div>

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
                <span class="delete" @click="handleDelete">删除</span>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="btn"><el-button type="primary">保存</el-button><el-button type="info">取消</el-button></div>
      </div>

    </div>



    <el-dialog
      title="提示"
      :visible.sync="dialogFlag"
      width="800px" class="dialog-area">

      <div class="area">
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
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFlag = false">确定</el-button>
          <el-button @click="dialogFlag = false">取消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: "logisticsCharge",
    data(){
      return{
        chargeName:'',
        radio:'按重量',
        tableData: [{area:'未添加地区',}, {area:'未添加地区',}, {area:'未添加地区',}, {area:'未添加地区',}],
        dialogFlag:true,
        list:[{area:'全国',choose:false,cityChiled:[{city:'重庆dsfgsdgsrgsdgsdrgsdrgsdr',choose:false,countyChild:[{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'},{county:'江北区'}]}]},
          {area:'较偏远地区',choose:false,cityChiled:[{city:'新疆',choose:false,countyChild:[{county:'乌鲁木齐'}]}]},
          {area:'港澳台地区',choose:false,cityChiled:[{city:'台湾',choose:false,countyChild:[{county:'台北市'},]}]},
        ],
        upDown:false,   //
      }
    },
    methods:{
      handleDelete(index, row){
        console.log(index, row);
        this.tableData.splice(index,1)
      },
      handleAdd(){
        this.tableData.push({area:'未添加地区',})
      },


    },
    created(){
      this.$parent.change('物流');  //传给父组件
    }
  }
</script>

<style  lang="less" scoped>
  @import "less/logisticsCharge.less";
</style>
