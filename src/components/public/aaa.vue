<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in img.imgArr" :key="index"><img style="width: 100px;height: 100px;" :src="item" alt=""><span @click="del(index)">删除</span></li>
    </ul>
    <div class="box" :id="img.idname" v-show="img.imgArr.length<img.limit">

    </div>
    <div :id="img.idname+img.idname"></div>
  </div>

</template>

<script>
  import GetPolicySignature from '@/api/GetPolicySignature.js';
  import plupload from 'plupload'
  import moment from 'moment';

  export default {
    name: "aaa",
    props:['img'],
    data(){
      return{
        imgSrc:{},
        obj:{
          'key': '',
          'policy':'',
          'OSSAccessKeyId':'',
          'success_action_status': '200', //让服务端返回200,不然，默认会返回2040
          'signature':'',
        },
        key:'',
        host:'',
        objName:'',
        imhUrl:'',
      }
    },
    methods:{
      del(index){
        this.img.imgArr.splice(index,1);
      },
      //随机数
      random(len) {
        len = len || 32;
        let chars = 'ABCDEFGHIGKLMNOPQRSDUVWHVZabcdefghigklmnopqrsduvwhvz123456789';
        let maxPos = chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
          pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
      },
      getKey() {
        let date = new Date();
        date = moment(date).format('YYYY-MM-DD HH:mm:ss');
        GetPolicySignature.call(this, `?input.clientTimespan=${date}`).then((res) => {
          console.log('res', res)
          if (res.data.code === 1) {
            this.obj.key = `${res.data.data.dir}`
            this.obj.policy = res.data.data.policy
            this.obj.OSSAccessKeyId = res.data.data.accessid
            this.obj.signature = res.data.data.signature
            this.key = `${res.data.data.dir}`
            this.host = res.data.data.host
            this.imgUrl = res.data.data.imgUrl

            let new_multipart_params = {
              'key': this.objName,
              'policy': this.obj.policy,
              'OSSAccessKeyId': this.obj.OSSAccessKeyId,
              'success_action_status': '200', //让服务端返回200,不然，默认会返回204
              'signature': this.obj.signature,
            };
            console.log('obj', this.obj)

            this.plUploader.setOption({
              'url': this.host,
              'multipart_params': new_multipart_params
            });

            this.plUploader.start()
            return true
          }
        })
      },
      initPlUploader() {
        this.plUploader= new plupload.Uploader({
          runtimes: 'html5,flash,silverlight,html4',
          url:'http://oss-cn-shenzhen.aliyuncs.com',
          browse_button:this.img.idname,
          container:this.img.idname+this.img.idname,
          multi_selection: true,
          filters: {
            mime_types: [
              { title: 'Image files', extensions: 'jpg,png,bmp,jpeg' }
            ],
            max_file_size: '3mb',
            prevent_duplicates: false
          },
          init: {
            FilesAdded:(up, files)=>{
              console.log('111111111')
              console.log(files)

              this.getUploadData(up,'',false)
            },
            BeforeUpload:(up,files)=>{
              console.log('上传之前',files)
              this.getUploadData(up,files.name,true)
            },
            UploadComplete:(up, files)=>{
                console.log('6666999')
              this.img.imgArr.splice(this.img.limit);
            },
            FileUploaded: (up, file, info)=>{
              if(info.status===200){
                console.log('ok',`${this.imgUrl}/${this.objName}`)
                // this.imgSrc.push(`${this.imgUrl}/${this.objName}`)

                this.img.imgArr.push(`${this.imgUrl}/${this.objName}`)
                // this.imgsPapers.push({src:`${this.host}/${this.objName}`})
                // this.imgSrc[this.op] = `${this.host}/${this.objName}`
                // console.log(this.imgSrc, '上传图片路径');
                // console.log(this.op, '父');
                // this.$emit('img', this.imgSrc[this.op])
              }
            },
            Error:(up,info)=>{
              if(info.code===-600){
              }
            }
          }
        })
        this.plUploader.init()
      },
      getUploadData(up,filename,ret){
        if(ret===false){
          ret=this.getKey()
          console.log('this.obj',this.obj)
        }else{
          if(filename!==''){
            let suffix=this.getName(filename)
            this.objName=`${this.key}${this.random(10)}${suffix}`
          }
          let new_multipart_params = {
            'key':this.objName,
            'policy': this.obj.policy,
            'OSSAccessKeyId': this.obj.OSSAccessKeyId,
            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
            'signature': this.obj.signature,
          };
          // console.log(new_multipart_params)
          up.setOption({
            'url': this.host,
            'multipart_params': new_multipart_params
          });
          up.start();
        }
      },
      getName(filename){
        let suffix=''
        suffix=filename
        return suffix
      },


    },
    mounted(){
      this.initPlUploader();
      console.log('555')
    }
  }
</script>

<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  .box{
    width: 100px;
    height: 100px;
    border: 1px solid pink;
  }
</style>
