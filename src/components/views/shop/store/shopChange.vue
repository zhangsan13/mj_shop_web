<template>
    <div  class="container">
        <ul>
            <li v-for="item in childAccounts" :key="item.id">
                <div class="img-show"><img :src="null == item.pic ? imgSrc : item.pic" alt="店铺头像"></div>
                <div class="content">{{item.shopName}}</div>
                <div class="btn"><el-button type="primary" @click="switchShopPost(item.shopId)">选择</el-button></div>
            </li>
        </ul>
    </div>
</template>

<script>

    import GetShopChildAccount from '../../../../api/ShopInfo/GetShopChildAccount';
    import SwitchShop from '../../../../api/ShopInfo/SwitchShop';
    import router from '../../../../router';

    export default {
        name: "shopChange",
        data(){
            return {
                imgSrc:'http://kuailian-upload.oss-cn-shenzhen.aliyuncs.com/upload/201904/12/Gcuiv3d9BEf.jpg',
                childAccounts: [],
                selectShopId: 0
            }
        },
        mounted: function(){
            this.initData(1, 10);
        },
        methods: {
            initData: function(pageIndex, pageSize){
                GetShopChildAccount.call(this,'?clientVersion=1.0.0&clientTimespan=' + this.$Tool.formatDate(new Date())).then(res => {
                    if(undefined != res.data.data) {
                        this.childAccounts = res.data.data;
                    }
                })
            },
            switchShopPost: function(id){
                this.$confirm('确定要切换账号吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    SwitchShop.call(this, {
                        selectedShopId: id,
                        refresh_token: JSON.parse(sessionStorage.getItem('tokenInfo')).refresh_token,
                        clientVersion: '1.0.0',
                        clientTimespan: this.$Tool.formatDate(new Date())
                    }).then(res => {
                        if(res.data.code == 1){
                            sessionStorage.setItem("tokenInfo",JSON.stringify(res.data.data.tokenInfo));
                            const menuInfos = res.data.data.menuInfos;
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  li{
    padding: 10px 20px;
    background: #ffffff;
    margin-bottom: 10px;
    >div{
      display: inline-block;
      vertical-align: middle;
    }
  }
  .img-show{
    height: 52px;
    width: 52px;
    margin-right: 20px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .content{
    color: #333333;
    font-size: 14px;
  }
  .btn{
    float: right;
    padding-top: 8px;
    /deep/ button{
      padding: 0px;
      width: 104px;
      height: 36px;
    }
  }

</style>