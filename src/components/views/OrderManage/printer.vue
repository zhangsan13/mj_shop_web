<template>
  <!--打印机-->
  <div class="container">
    <div class="print-btn">
      <el-button type="primary">打印</el-button>
    </div>
    <div class="main">
      <div class="title">
        <div><img src="./img/mjlogo.png" alt=""></div>
        <div>购物清单</div>
        <div>（客户留存）</div>
      </div>
      <ul class="goods-infor">
        <li>订单号：GD12643132163</li>
        <li>订购时间：206-10-20</li>
        <li>客户姓名：西瓜 </li>
        <li>商品总数：4</li>
      </ul>

      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%" :border="true">
          <el-table-column
            label="商品编号" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.code }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名称" width="380" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="数量" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.num }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="价格" align="center">
            <template slot-scope="scope">
              <span>{{parseFloat(scope.row.price).toFixed(2) }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="小计"  align="center">
            <template slot-scope="scope">
              <span>{{(scope.row.num*scope.row.price).toFixed(2) }}</span>
            </template>
          </el-table-column>

        </el-table>

      </div>

      <div  class="code">
        <div class="two-code">
          <img src="./img/code.png" alt="">
          <p>满集天下 品质生活</p>
        </div>
      </div>
    </div>

    <div class="carousel">
        <div class="carousel-left"><img @click="move('left')" src="./img/arrows.png" alt=""></div>
        <div class="carousel-show">
          <div class="carousel-main">
            <div class="middle">
              <transition-group tag="li"  :name="name" class="aaa">
                <li class="move-li"  v-for="(item,index) in listData" :key="item.id" :class="'move-li'+index">
                  <img :src="item.src" alt="">
                  <p>{{item.id}}</p>
                  <el-button type="danger">点击购买</el-button>
                </li>
              </transition-group>
            </div>
          </div>
        </div>
      <div class="carousel-right"><img @click="move('right')" src="./img/arrows.png" alt=""></div>
      <div class="recommend">为您推荐满集网上优质打印机，建议购买推荐打印机，方便管理，快捷且不易出错</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "printer",
    data(){
      return{
        tableData: [{code:'134562', name: '金盾加厚绒毛雪貂大衣原单215400', num:'5', price:'50.00',},
          {code:'134562', name: '金盾加厚绒毛雪貂大衣原单215400', num:'5', price:'50.00',},
          {code:'134562', name: '金盾加厚绒毛雪貂大衣原单215400', num:'5', price:'50.00',},
          {code:'134562', name: '金盾加厚绒毛雪貂大衣原单215400', num:'5', price:'50.00',}],
        list:[{id:1,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'1'},
          {id:2,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'2'},
          {id:3,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'3'},
          {id:4,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'4'},
          {id:5,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'5'},
          {id:6,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'6'},
          {id:7,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'7'},
          {id:8,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'8'},
          {id:9,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'9'},
          {id:10,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'10'},
          {id:11,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'11'},
          {id:12,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'12'},
          {id:13,src:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',name:'12'},

        ],
        show:false,
        name:'left',
        start:0,
      }
    },
    computed:{
      listData(){
        return this.list.filter((item,index)=>{
          if(index>=this.start&&index<this.start+4){
            return item
          }
        })
      }

    },
    methods:{
      move(val){
        if(val==='left'){
          this.name='left';
          this.start+=4;
          if(this.start>=this.list.length){
            this.start=0;
          }
        }else if(val==='right'){
          this.name='right';
          this.start-=4;
          if(this.start<0){
            let result=this.list.length%4;
            if(result===0){
              this.start=this.list.length-4;
            }else{
              this.start=this.list.length-result;
            }
          }
        }
      },

    },
    created(){

    }
  }
</script>

<style lang="less" scoped>
  @import "less/printer.less";
</style>
