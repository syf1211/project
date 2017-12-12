<template>
  <div class="shouye" v-title='"分类"'>
    <div class='ul'>
      <div v-for='(item,ind) in arr' :class='{active : ac==ind}' @click='commodityFn(item.component,ind)' class='li'>{{item.content}}</div>
    </div>
    <main>
      <component :is='isTab' :datas='datas' ></component>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import fenl from './components/fenl.vue'
import pinpai from './components/pinpai.vue'

export default {
  data () {
    return {
      isTab: 'fenl',
      ac: '0',
      arr: [
        {component: 'fenl', content: '分类'},
        {component: 'pinpai', content: '品牌'}
      ],
      datas: {
        wordData: [
          {img: '//img.haimi.com/FloxuBkDf7JLo-AtEqLGRRnhAxJn', arrWord: ['面膜', '面霜水乳', '眼霜', '精华', '爽肤水', '卸妆', '洁面', '隔离', '精油']},
          {img: '//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit', arrWord: ['毛巾', '摆件', '雨具', '收纳精华', '洗衣']},
          {img: '//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6', arrWord: ['杯壶', '杯壶', '刀铲', '餐具', '其他']},
          {img: '//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD', arrWord: ['玩具', '奶粉', '尿裤', '喂养']},
          {img: '//img.haimi.com/FhJPFBPHwBExbG-O9o_Jb7KWjiMD', arrWord: ['手提包', '钱包', '电动牙刷', '剃须刀', '空气净化器']}
        ],
        imgArr: [
          {img: '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN', word1: '日默瓦', word2: '复古之名万箱朝拜'},
          {img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I', word1: '膳魔师', word2: '百年品牌源自德国'},
          {img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm', word1: '猫王', word2: '胆机之父匠心之作'},
          {img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN', word1: 'Boogie Board', word2: '一天5次可用30年'},
          {img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1', word1: '质造', word2: '马云也在用的杯子'},
          {img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I', word1: '膳魔师', word2: '百年品牌源自德国'},
          {img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm', word1: '猫王', word2: '胆机之父匠心之作'},
          {img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN', word1: 'Boogie Board', word2: '一天5次可用30年'},
          {img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1', word1: '质造', word2: '马云也在用的杯子'},
          {img: '//img.haimi.com/Ft2BQcB9zAZHygf4zu2mdKziH0lN', word1: '日默瓦', word2: '复古之名万箱朝拜'},
          {img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I', word1: '膳魔师', word2: '百年品牌源自德国'},
          {img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm', word1: '猫王', word2: '胆机之父匠心之作'},
          {img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN', word1: 'Boogie Board', word2: '一天5次可用30年'},
          {img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1', word1: '质造', word2: '马云也在用的杯子'},
          {img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I', word1: '膳魔师', word2: '百年品牌源自德国'},
          {img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm', word1: '猫王', word2: '胆机之父匠心之作'},
          {img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN', word1: 'Boogie Board', word2: '一天5次可用30年'},
          {img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1', word1: '质造', word2: '马云也在用的杯子'}
        ]
      }
    }
  },
  methods: {
    commodityFn (value, ind) {
      this.isTab = value
      this.ac = ind
    }
  },
  components: {
    FooterBar,
    fenl,
    pinpai
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.active{
  border-bottom:0.02rem solid #000;
  display: inline-block!important;
}
.img{
  a{
    width:100%;
    display:block;
    img{
      width:100%;
    }
  }
}
.ul{
  width:100%;
  line-height:0.9rem;
  text-align:center;
  padding-bottom:0.1rem;
  .li{
    display: inline-block!important;
    padding:0 10px; 
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
