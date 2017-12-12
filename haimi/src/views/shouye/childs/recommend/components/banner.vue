<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for='item in bannerList'><img :src='item.img'></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    bannerList: {
      default: []
    }
  },
  data: function () {
    return {
      msg: '轮播图',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper-wrapper{
  overflow:hidden;
  .swiper-slide{
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>
