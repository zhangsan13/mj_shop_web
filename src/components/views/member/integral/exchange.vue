<template>
    <div class="exchange">
        <h4>创建会员福利，增加会员粘度</h4>
     <div class="box">
<div class="youhui" v-for="item in youhui">
            <div class="top">
                  <p style="fontSize:20px;color:#fff;fontWeight:bold;">{{item.num}}积分</p>
                  <p style="fontSzie:14px;color:#fff;">满<span>{{item.number}}</span>减<span>{{item.numm}}</span></p>
            </div>
         <div class="bottom">
        <p>有效期：<span>{{item.qx}}</span> 天</p>
        <p>已兑换：<span>{{item.dh}}</span> 张</p>
        <p>已使用：<span>{{item.sy}}</span> 张</p>
            
            
</div>
           <div class="btn">
         <el-button type="text">编辑</el-button>
         <el-button type="text" @click="open2">删除</el-button>
        </div>
        </div>
      <div class="add" @click="establish">
        +创建兑换优惠券
      </div>
     </div>
        <!-- 模态框 -->
<el-dialog :visible.sync="dialogFormVisible">
  <!-- 表单 -->
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <div class="title">
            <h3>新增积分换券</h3>   
      </div>
      <div class="top">
    <el-form-item label="满减金额:" prop="jine" required>
      购买满
    <el-input  v-model.number="ruleForm2.jine" auto-complete="off" style="width:150px;" placeholder="请选择金额"></el-input>
    减
  </el-form-item>

   <el-form-item prop="jine1">
    <el-input  v-model="ruleForm2.jine1" auto-complete="off" style="width:150px;" placeholder="请选择金额"></el-input>
  </el-form-item>
      </div>
  

  <el-form-item label="所需积分:" prop="jifen" required>
    <el-input  v-model="ruleForm2.jifen" auto-complete="off" style="width:150px;"></el-input>
  </el-form-item>
  <el-form-item label="有效期:" prop="time" required>
    <el-input v-model.number="ruleForm2.time" style="width:150px;"></el-input>
  </el-form-item>

  <el-form-item label="活动范围:" prop="time" required>
    <el-button type="primary">全部商品</el-button>
  </el-form-item>

 

</el-form>
<!-- 修改 -->
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="lsy">确 定</el-button>
  </div>
</el-dialog>
    </div>
</template>

<script>
  export default {
      data(){
       var validatejine = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入金额'));
        } else {
          callback();
        }
      };
      var validatejineone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入金额'));
        } else {
          callback();
        }
      };
      var validatejifen = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入积分'));
        }else if(value.length>5){
          callback(new Error('最多五位整数'));
        } 
        else {
          callback();
        }
      };
      var validatetime = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入天数'));
        }else if(value>30){
          callback(new Error('请输入正确的天数'));
        }else {
          callback();
        }
      };
          return {
            youhui:[
              {num:'500',number:'100',numm:'10',qx:'30',dh:'50',sy:'15'},
              {num:'500',number:'100',numm:'10',qx:'30',dh:'50',sy:'15'}
            ],
            listarr:{},//增加的数据
        dialogFormVisible:false,
        formLabelWidth: '120px',
        ruleForm2: {
          jine: '',
          jine1:'',
          jifen: '',
          time: '',
        },
         rules2:{
            jine: [
            { validator: validatejine, trigger: 'blur' }
          ],
           jine1: [
            { validator: validatejineone, trigger: 'blur' }
          ],
          jifen: [
            { validator: validatejifen, trigger: 'blur' }
          ],
          time: [
            { validator: validatetime, trigger: 'blur' }
          ],
        
         }
          }
      },
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      establish(){
     this.dialogFormVisible=true;
      },
      // 模态框确定
     lsy(){
       this.dialogFormVisible = false;
       this.youhui.push(this.listarr);
       this.listarr={num:'400',number:'200',numm:'10',qx:'50',dh:'40',sy:'75'}
     }
    },
  }
</script>

<style lang="less" scope>
.exchange{
    background: #fff;
    height: 1000px;
    padding: 15px 0 15px 15px;
    h4{
        margin-bottom: 20px;
    }
    .box{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 200px;
        .youhui{
        width: 350px;
        height: 150px;
        padding: 0 40px;
        border-radius: 20px;
        line-height: 70px;
        background: skyblue;
        border-left: 10px dotted #fff;
        border-right: 10px dotted #fff;
        margin-bottom: 50px;
        margin-right: 5px;
        .top{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #fff;
            span{
                font-size: 20px;
                font-weight: bold;
            }
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            p{
                color:#fff;
            }
        }
        .btn{
            display: flex;
            margin-top: 10px;
            justify-content: flex-end;
        }
        }
    }
        .add{
            width: 200px;
            height: 100px;
            background: #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                cursor: pointer;
            }
    }
    .el-dialog__header{
        padding: 0;
    }
    .el-dialog__body{
        padding: 0;
        .el-form{
            .title{
                padding: 15px 0 15px 15px;
                background: #ccc;
                margin-bottom: 15px;
            }
            .top{
                display: flex;
                .el-form-item{
                    .el-form-item__content{
                        margin-left: 0!important;
                        width: 320px;
                    }
                }
            }
        }
    }
    
}
</style>
