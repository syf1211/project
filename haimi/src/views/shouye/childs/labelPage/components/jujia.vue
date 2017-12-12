<template>
  <div class="jujia">
    <img-word :dataArr='dataArr' :msg='msg' :img='img'></img-word>
  </div>
</template>

<script>
import imgWord from '@/views/shouye/components/imgWord.vue'
export default {
  props: ['pageId'],
  data: function () {
    return {
      msg: '居家',
      img: ['//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2'],
      dataArr: [
        {
          img: '//img.haimi.com/FhEiGmVLqj4aNtfqI16fCRxB93ze?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/Fp_MXVA0COdImxT0SaLEByFz514S?imageView2/1/w/375/h/375',
          word1: '木墨MUMO 乳胶床垫',
          word2: '￥78.99'
        },
        {
          img: '//img.haimi.com/FvtLnLOTljJNxtX0CGnrjZP-Wjqd?imageView2/1/w/375/h/375',
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
    imgWord
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  background:#fff;
}
</style>
