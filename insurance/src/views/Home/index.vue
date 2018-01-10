<template>
  <div class="home">
    <main>
      <swiper 
        :list="swiperList"
        @on-index-change="demo01_onIndexChange"
        :loop='true'
        dots-position='center'
      ></swiper>
      <div style="height:44px;">
        <Sticky :check-sticky-support="false" :offset="0"><tab 
          :line-width="1"
          custom-bar-width="60px"
          active-color='#E85782'
          disabled-color='#E85782'
          v-model="index"
        >
          <tab-item 
            v-for="(item, index) in navList"
            :key='index'
            :selected="active === item.cat_name"
            active-class='#E85782'
            @on-item-click='tabList'
          >{{item.cat_name}}</tab-item>
        </tab></Sticky>
      </div>
      <ProductList :dataList='dataList'></ProductList>
      <load-more :tip="('正在加载')" v-show = 'flag == false'></load-more>
    </main>
    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import { Swiper, Tab, TabItem, Sticky, LoadMore } from 'vux'
import ProductList from '../../components/ProductList'
export default {
  name: 'home',
  data () {
    return {
      active: '推荐',
      index: 0,
      page: 0,
      pageSize: 5,
      catId: 0,
      flag: true,
      loadFlag: true,
      dataList: [],
      swiperList: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ],
      navList: []
    }
  },
  methods: {
    demo01_onIndexChange (index) {
      console.log(index)
    },
    tabList (index) {
      console.log(index)
      this.page = 0
      this.catId = 0
      this.loadFlag = true
      this.flag = true
      this.dataList = []
      let id = this.navList[index].cat_id
      this.getlist(this.page, this.pageSize, id)
    },
    getlist (page = 0, pageSize = 5, catId = 0) {
      this.$store.dispatch('productList/getProductList', {
        page,
        pageSize,
        catId
      }).then((res) => {
        // console.log(res.list)
        if (res.list.length === 0) {
          this.loadFlag = false
          this.flag = true
          return false
        }
        setTimeout(() => {
          this.dataList = [...this.dataList, ...res.list]
          this.flag = true
        }, 500)
      })
    },
    getnav () {
      this.$store.dispatch('productList/getHomeIndex').then((res) => {
        this.navList = res.data.cart_list
      })
    },
    scrollEvt () {
      document.addEventListener('scroll', this.scrollIf, false)
    },
    scrollIf () {
      if (!this.loadFlag) return false
      let bodyH = document.documentElement.offsetHeight
      let scrollH = window.scrollY
      let clientH = window.innerHeight
      if (bodyH <= scrollH + clientH && this.flag) {
        // console.log(this.page)
        this.flag = false
        this.page += 1
        this.getlist(this.page, this.pageSize, this.catId)
      }
    }
  },
  created () {
    this.getlist(this.page, this.pageSize, this.catId)
    this.getnav()
  },
  mounted () {
    this.scrollEvt()
  },
  components: {
    Swiper,
    Tab,
    TabItem,
    ProductList,
    FooterBar,
    Sticky,
    LoadMore
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'></style>
