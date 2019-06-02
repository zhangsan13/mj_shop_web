<template>
    <div class="integralpayment">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <p class="collection">
          <span style="color:red;marginRight:5px;">*</span>
         <span style="marginRight:20px;">店铺购物积分(倍)</span>  
           
         <el-form-item prop="jifen">
        <el-input v-model="ruleForm.jifen" style="width:250px;"></el-input>
        </el-form-item>

         <span style="marginLeft:30px;">购物获得积分 = 商品价格 * 1</span>  <span style="marginLeft:90px;color:red;">店铺积分最多1位整数，1位小数</span> 
      </p>
      <p class="collection">
        <span style="color:red;marginRight:9px;">*</span>
        <span>收藏商品送积分(分)</span> 
        <span style="marginLeft:10px;">
            <el-radio v-model="radio" label="1">是</el-radio>
             <el-radio v-model="radio" label="2">否</el-radio>
        </span>
           
           <el-form-item prop="jifen1">
        <el-input v-model="ruleForm.jifen1" style="width:250px;"></el-input>
        </el-form-item>
         <span style="color:red;marginLeft:34px;">积分最多7位整数</span>
      </p>
    <p class="collection">
        <span style="color:red;marginRight:9px;">*</span>
        <span>关注店铺送积分(分)</span> 
        <span style="marginLeft:10px;">
             <el-radio v-model="radio1" label="1">是</el-radio>
             <el-radio v-model="radio1" label="2">否</el-radio>
        </span>
           
        <el-form-item prop="jifen2">
        <el-input v-model="ruleForm.jifen2" style="width:250px;"></el-input>
        </el-form-item>
         <span style="color:red;marginLeft:34px;">不能为空</span>
      </p>
      <p class="collection">
        <span style="color:red;marginRight:9px;">*</span>
        <span>晋升会员送积分(分)</span> 
         <span style="marginLeft:10px;">
            <el-radio v-model="radio2" label="1">是</el-radio>
             <el-radio v-model="radio2" label="2">否</el-radio>
        </span>
           
           <el-form-item prop="name1">
        <el-input v-model="ruleForm.name" style="width:250px;"></el-input>
        </el-form-item>
      </p>
      <div class="box">
          <button class="btn">保存</button>
      </div>
      </el-form>
    </div>
</template>

<script>
export default {
data(){
       var validatejifen = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入积分'));
        } else {
          callback();
        }
      };
      var validatejifenone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入积分'));
        } else if(value>7){
             callback(new Error('请输入正确的积分'));
        }else{
       callback()
        }
      };
      var validatejifentwo = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入积分'));
        } else {
          callback();
        }
      };

    return {
        radio: '1',
        radio1:'1',
        radio2:'1',
        ruleForm:{
         jifen:'',
         jifen1:'',
         jifen2:''
        },
        rules:{
          jifen: [
            { validator: validatejifen, trigger: 'blur' }
          ],
           jifen1: [
            { validator: validatejifenone, trigger: 'blur' }
          ],
           jifen2: [
            { validator: validatejifentwo, trigger: 'blur' }
          ],
        }
    }
}
}
</script>

<style lang="less" scope>
.integralpayment{
    background: #fff;
    height: 500px;
    .collection{
        display: flex;
        margin-top: 20px;
        align-items: center;
        .el-form-item{
            display: flex;
            align-items: center;
            margin: 0;
            margin-top: 10px;
            .el-form-item__content{
                margin-left: 0!important;
            }
        }
    }
    .box{
        .btn{
        width: 100px;
        height: 36px;
        color: #fff;
        background: #00a2ff;
        border: none;
        border-radius: 5px;
        position: absolute;
        top: 300px;
        left: 20px;
        }
        
    }
}


</style>
