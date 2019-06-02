<template>
  <!--用户自提-->
  <div class="container">
    <h2>新增自提地点</h2>
    <div class="main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <el-form-item label="收费标准名称：" prop="name" >
          <el-input v-model="ruleForm.name" placeholder="请输入收费标准名称（仅商家可见）"></el-input>
        </el-form-item>

        <el-form-item label="自提地点：" required>
          <div class="area-select">
            <el-form-item label="" prop="province">
              <el-select v-model="ruleForm.province" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </el-form-item>
          </div>
          <div class="area-select">
            <el-form-item label="" prop="city">
              <el-select v-model="ruleForm.city" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </el-form-item>
          </div>
          <div class="area-select">
            <el-form-item label="" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </el-form-item>
          </div>
          <div class="area-select">
            <el-form-item label="" prop="street">
              <el-select v-model="ruleForm.street" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select>
            </el-form-item>
          </div>
          <span class="default">使用默认发货地址</span>
        </el-form-item>


        <el-form-item  prop="particular" >
          <div>
            <el-input type="textarea" :autosize="{ minRows: 1}" resize="none" placeholder="请输入内容" v-model="ruleForm.particular"></el-input>
            <span class="remind-right">与顾客来店导航有关，请详细填写</span>
          </div>
        </el-form-item>


        <el-form-item label="地图选点："  prop="particular" required>
          <el-input type="text" placeholder="请输入内容" v-model="ruleForm.particular"></el-input>
        </el-form-item>

        <el-form-item label="营业时间："   required>
          <div class="business-box">
            <div  class="business-date">
              <el-form-item prop="startData">
                <el-time-select v-model="ruleForm.startData" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select>
              </el-form-item>
            </div>
            <div class="business-middle">—</div>
            <div  class="business-date">
              <el-form-item prop="endData">
                <el-time-select v-model="ruleForm.endData" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间"></el-time-select>
              </el-form-item>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="贵宾专线：" prop="phone"  required>
          <el-input v-model="ruleForm.phone" placeholder="请输入联系方式"></el-input>
        </el-form-item>

        <el-form-item label="自提说明："  prop="explain" >
          <el-input type="textarea" :autosize="{ minRows: 4}" resize="none" placeholder="自提点收取的定金分别为20%或100%，自提时支付余额" v-model="ruleForm.explain"></el-input>
        </el-form-item>


        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </div>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userReceiveAdd",
    data(){
      return{
        ruleForm: {
          name: '',
          province:'',
          city:'',
          region:'',
          street:'',
          particular:'',
          startData:'',
          endData:'',
          phone:'',
          explain:'',
        },
        rules:{
          province:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          city:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          region:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          street:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          particular:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          startData:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          endData:[{required: true, message: '请输入活动名称', trigger: 'blur' }],
          phone:[{required: true, message: '请输入活动名称', trigger: 'blur' }],

        },
        options: [{value: '选项1', label: '黄金糕'},
          {value: '选项2', label: '双皮奶'},
          {value: '选项3', label: '蚵仔煎'},
          {value: '选项4', label: '龙须面'},
          {value: '选项5', label: '北京烤鸭'}],
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        this.$router.push({name:'UserReceiveList'});
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      this.$parent.change('用户自提');
    },
  }
</script>

<style lang="less" scoped>
  @import "less/userReceiveAdd.less";
</style>
