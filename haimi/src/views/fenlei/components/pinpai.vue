<template>
  <div class='pinpai'>
    <div class='pinbox' v-for='item in datas.imgArr'>
      <div class='img'><a href='javascript:;'><img :src='item.img'></a></div>
      <div class='p'>
        <p>{{item.word1}}</p>
        <p>{{item.word2}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['datas']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.pinpai{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  .pinbox{
    width:100% / 3;
    .img{
      width:100%;
      a{
        display:block;
        width:100%;
        img{
          width:100%;
        }
      }
    }
  }
}
.p{
  padding: 0.2rem 0;
  p{
    text-align:center;
    line-height:0.4rem;
    &:nth-child(1){
      font-size:0.3rem;
    }
    &:nth-child(2){
      color:#999;
    }
  }
}
</style>
