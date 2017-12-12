<template>
  <div class="img-word">
    <div class='img'><img :src='img'></div>
    <content-box :title='msg' ac='ac'>
      <div class='ul'>
        <div class='li' v-for='item in dataArr'>
          <a href='javascript:;'><img :src='item.img'></a>
          <p>{{item.word1}}</p>
          <p>{{item.word2}}</p>
        </div>
      </div>
    </content-box>
    <content-box></content-box>
  </div>
</template>

<script>
import ContentBox from '@/components/ContentBox.vue'
export default {
  props: ['dataArr', 'msg', 'img'],
  data: function () {
    return {
      aa: '...'
    }
  },
  components: {
    ContentBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.img-word{
  width:100%;
  img{
    width:100%;
  }
}
.ul{
  width:100%;
  display:flex;
  background:#f7f7f7;
  box-sizing:border-box;
  justify-content:space-between;
  flex-wrap:wrap;
  .li{
    width:48.5%;
    background:#fff;
    margin-bottom:0.25rem;
    p{
      line-height:0.5rem;
      padding:0 0.3rem;
    }
  }
}
a{
  display:block;
}
</style>
