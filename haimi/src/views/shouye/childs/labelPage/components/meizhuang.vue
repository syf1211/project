<template>
  <div class="jujia">
    <word :dataArr='dataArr' :msg='msg'></word>
  </div>
</template>

<script>
import word from '@/views/shouye/components/word.vue'
export default {
  data: function () {
    return {
      msg: '美妆',
      dataArr: [
        {
          img: '//img.haimi.com/Fm8AfwrCFRU4zLu-K4dyB4Xu437z?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FhS2lVjSx4_tVUNYcY7fyAAV0PI6?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FspElGEWzLwSsNHrICVrg7Bup2SU?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fu5K3I4y0QI0T0ocMl7HfWJfvcHX?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FiLwQ699rV3zSXPxWcMt3nvi-vDP?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FgqPxqIjbAcL-tWXpBXqCff3lYTQ?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FlPOk-TC76VK1Rui6rgkPEy7ws6Q?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fotog5pzbC2Sg0dDA2VNIvlsdV8C?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fo10KuOgIJrxDqCJJrKOwlhmvX9h?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FkA2IXPu6KvMdAC5XEmzGCv1Peb7?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fv3c_dIcJ_9RfQaJe0mqH0N9Td94?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fv3c_dIcJ_9RfQaJe0mqH0N9Td94?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        }
      ]
    }
  },
  components: {
    word
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  background:#fff;
}
</style>
