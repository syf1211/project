<template>
  <div class="describe-page">
    <template v-if='detailsData.product'>
      <div class='img-box'><img :src='detailsData.product.cover'/></div>
      <info :detailsData='detailsData'/>
      <condition :features='detailsData.product.features'/>
      <div class='content'>有商家分享保险，即可获取1张优惠券</div>
      <tabBar
        v-if='detailsData.plan_list.length !== 1'
        :navData='detailsData.plan_list'
        @changeNav='changeNav'
      ></tabBar>
      <template v-if='detailsData.items'>
        <div class='cell-box'>
          <cell 
            v-for='(item, index) in detailsData.items'
            :key='index'
            :title="item.label"
            :value="item.value"
            :is-link='true'
            :border-intent='false'
            @click.native='insureFn(item.description, item.label)'
          ></cell>
          <div class='necessary'>
            更多详情，请阅读
            <a href='javascript:;' @click='insureFn(detailsData.data.insure_notice, "投保条款")'>《投保条款》</a>和
            <a href='javascript:;' @click='clauseFn(detailsData.product.product_id, "保险条款")'>《保险条款》</a>
          </div>
        </div>
      </template>
      <div class="empty"></div>
      <insure :detailsData='detailsData' @sureFn='sureFn'></insure>
      <malyerCom :info = 'info' v-show='info.flag' @closeEvt='closeEvt'/>
      <confirmInsure
        :detailsData = 'detailsData'
        @SetPrice='SetPrice'
        ref='genesDom'
      ></confirmInsure>
    </template>
  </div>
</template>
<script>
import tabBar from './components/tabBar'
import confirmInsure from './components/confirmInsure'
import malyerCom from './components/malyerCom'
import info from './components/info'
import insure from './components/insure'
import condition from './components/condition'
import { Group, Cell } from 'vux'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'describe',
      productId: '',
      info: {
        flag: false,
        malyer: '',
        title: ''
      },
      detailsData: {}
    }
  },
  watch: {
    $route () {
      this.getDetailsData(this.$route.params.id)
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.$refs.genesDom.healthFlag) {
      this.$refs.genesDom.healthFlag = false
      next(from.path)
    } else {
      next()
    }
  },
  methods: {
    closeEvt () {
      this.info.flag = false
    },
    changeNav (id) {
      this.$router.replace('/describe/' + id)
    },
    getDetailsData (id) {
      this.$store.dispatch('details/getDetailsData', {
        id
      }).then((res) => {
        this.detailsData = res.data
        console.log(this.detailsData)
      })
    },
    insureFn (msg, title) {
      this.info.malyer = msg
      this.info.title = title
      this.info.flag = true
    },
    clauseFn (productId, title) {
      this.$store.dispatch('clause/clause', {
        productId
      }).then((res) => {
        this.insureFn(res.data, title)
        this.clauseData = res.data
        // console.log(res.data)
      })
    },
    sureFn () {
      let alertDom = document.querySelector('.alert-box')
      let markDom = document.querySelector('.mark-box')
      alertDom.classList.remove('alertHide')
      markDom.classList.remove('markHide')
      alertDom.classList.add('alertShow')
      markDom.classList.add('markShow')
    },
    SetPrice (val) {
      this.detailsData.product.price = val
    }
  },
  created () {
    this.getDetailsData(this.$route.params.id)
  },
  components: {
    info,
    Group,
    Cell,
    insure,
    malyerCom,
    condition,
    tabBar,
    confirmInsure
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.img-box{
  width: 100%;
  height: 5rem;
  img{
    width:100%;
  }
}
.content{
  background:#FFECF0;
  padding:0 0.2rem;
  line-height:0.8rem;
  height:0.8rem;
  color:#A69B9D;
  box-sizing:border-box;
}
.cell-box{
   background: #fff;
  .necessary{
    padding: 0.2rem 0.15rem 0.3rem 0.15rem;
    box-sizing:border-box;
    font-size:0.25rem;
    a{
      color:blue;
    }
  }
  .weui-cell:before {
    border-top: 1px solid #fff;
  }
  .weui-cell{
    font-size:0.25rem;
    padding: 0.25rem 0.15rem;
    box-sizing:border-box;
  }
}
.empty{
  padding-top:1.3rem;
}
</style>
