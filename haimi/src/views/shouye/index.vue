<template>
  <div class="shouye" v-title='"首页"'>
    <main>
      <search-bar @searchCallBack='searchCallFn'></search-bar>
      <!--<navBar :navData='navData' :setTemp.sync='isTemplate'></navBar>-->
      <navBar :navData='navData' @setTemp='setTemp' v-pin='0'></navBar>
      <component :is='isTemplate' :pageId='pageId'></component>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import FooterBar from '@/components/FooterBar'
import navBar from './components/navBar'
import Recommend from './childs/recommend'
import LabelPage from './childs/labelPage'
import Vue from 'vue'

export default {
  name: 'shouye',
  data () {
    return {
      msg: 'shouye',
      pageId: 0,
      isTemplate: 'Recommend',
      navData: []
    }
  },
  created () {
    this.$http.get('/api/navbar').then(res => {
      this.navData = res.data
    }, error => {
      console.log(error)
    })
  },
  methods: {
    searchCallFn: function (val) {
      console.log(val)
    },
    setTemp: function (typeStr, pageId) {
      this.isTemplate = typeStr
      this.pageId = pageId
    }
  },
  components: {
    SearchBar,
    navBar,
    Recommend,
    LabelPage,
    FooterBar,
    Vue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
