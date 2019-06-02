<template>
  <div class="container">
    我要宣传
    <p>url11{{imgUrl1}}</p>
    <p>url22{{imgUrl2}}</p>
    <upload :op="img[0]" :all="img" @img="img1"></upload>
    <upload :op="img[1]" :all="img"  @img="img2"></upload>

    <aaa :img="child"></aaa>
    45
    <aaa :img="bbb"></aaa>
  </div>
</template>

<script>
  import upload from '@/components/public/upload'
  import aaa from '@/components/public/aaa'
  export default {
    mounted () {

    },
    data () {
      return {
        img: ['one', 'two'],
        imgUrl1: undefined,
        imgUrl2: undefined,
        child:{idname:'qqq',limit:2,imgArr:[]},
        bbb:{idname:'www',limit:3,imgArr:[]},
      }
    },
    methods: {
      img1 (e) {
        this.imgUrl1 = e
        console.log(e, '接受第一个')
      },
      img2 (e) {
        this.imgUrl2 = e
        console.log(e, '接受第er个')
      }
    },
    components: {
      upload,
      aaa
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
