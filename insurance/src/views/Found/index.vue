<template>
  <div class="found-page">
    <main>
      <scroller lock-y :scrollbar-x=false>
        <div class="box1">
          <div class="box1-item" v-for="(item, index) in swiperList" :key='index'><img :src='item.img'></div>
        </div>
      </scroller>
      <imgList :logList='logList'/>
    </main>
    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import imgList from './components/imgList'
import { Scroller } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: '发现',
      logList: [],
      swiperList: [
        {
          url: 'javascript:;',
          img: './static/images/foundImg.png'
        },
        {
          url: 'javascript:;',
          img: './static/images/foundImg.png'
        },
        {
          url: 'javascript:;',
          img: './static/images/foundImg.png'
        }
      ]
    }
  },
  methods: {
    demo01_onIndexChange (index) {
      console.log(index)
    }
  },
  created () {
    this.$store.dispatch('found/getDetailsData').then((res) => {
      this.logList = res.data.list
    })
  },
  components: {
    imgList,
    FooterBar,
    Scroller
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 19.2rem;
  background:#F6F9F5;
}
.box1-item {
  width: 6.01rem;
  height: 2.08rem;
  padding: 0.3rem 0 0.3rem 0.3rem;
  display:inline-block;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item img{
  width:100%;
  height:100%;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>
