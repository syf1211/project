<template>
  <div class="label">
    {{msg}}{{pageId}}
    <template v-if='pageId===1'>
      <img-word :dataArr='navCon' :msg='"个护"' :img='img'></img-word>
    </template>
    <template v-else>
      <word :dataArr='navCon' :msg='"美妆"'></word>
    </template>
    <!-- <meizhuang v-else-if='pageId === 2'></meizhuang>
    <gehu v-else-if='pageId === 3'></gehu>-->
  </div>
</template>

<script>
import jujia from './components/jujia.vue'
import meizhuang from './components/meizhuang.vue'
import gehu from './components/gehu.vue'
import imgWord from '@/views/shouye/components/imgWord.vue'
import word from '@/views/shouye/components/word.vue'

export default {
  props: ['pageId'],
  data: function () {
    return {
      msg: '其他页',
      navCon: [],
      img: ['//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2'],
      pomponentData: [
        {id: 1, text: jujia}
      ]
    }
  },
  watch: {
    'pageId': function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('获取数据' + this.pageId)
      this.$http.get('/api/navCon', {
        params: this.pageId
      }).then(res => {
        this.navCon = res.data
        console.log(res)
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    jujia,
    gehu,
    meizhuang,
    imgWord,
    word
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
