<template>
  <div class='fenl'>
    <div class='fenl' v-for='item in datas.wordData'>
      <div class='img'><a href='javascript:;'><img :src='item.img'></a></div>
      <div class='cle'>
        <a v-for='word in item.arrWord' :href='"#/search/"+word'>{{word}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import Search from '@/views/Search'

export default {
  props: ['datas'],
  components: {
    FooterBar,
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.img{
  a{
    width:100%;
    display:block;
    img{
      width:100%;
    }
  }
}
.cle{
  width:100%;
  margin-top:0.3rem;
  a{
    padding: .2rem .3rem;
    border: 1px solid #e5e5e5;
    float: left;
    margin: 0 0 .22rem .3rem;
  }
}
</style>
