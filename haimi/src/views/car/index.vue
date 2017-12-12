<template>
  <div class="shouye" v-title='"购物车"'>
    <main>
      <div class='shopCar'>
        <div class='img'>购物车竟然是空的</div>
        <button>去首页看看</button>  
      </div>
      <div class='carList'>
        <content-box title='大家都在买'>
          <img-word :dataArr='dataArr'></img-word>
        </content-box>
      </div>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import ContentBox from '@/components/ContentBox'
import imgWord from '@/views/shouye/components/word'

export default {
  data () {
    return {
      dataArr: []
    }
  },
  created () {
    this.$http.get('/api/product').then(res => {
      this.dataArr = res.data
    }, error => {
      console.log(error)
    })
  },
  components: {
    FooterBar,
    ContentBox,
    imgWord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ac{
  width:100%;
  line-height:1rem;
  text-align:center;
}
main{
  display:flex;
  flex-direction:column;
}
.shopCar{
  width:100%;
  height:5rem;
  text-align:center;
  margin-bottom:1rem;
}
button{
  background:#fff;
  padding:0.1rem 0.3rem;
}
.img{
  width:100%;
  height:0.5rem;
  padding-top:3rem;
  text-align:center;
}
.carList{
  background:#fff;
  flex:1;
}
</style>
