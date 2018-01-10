<template>
  <div class='alert-insure' ref='scrollDom' v-if='detailsData'>
    <div class='mark-box' @click='close'></div>
    <div class='alert-box'>
      <div class='h1'>
        <span>{{this.detailsData.product.title}}</span>
        <span><img :src='this.detailsData.company.logo'></span>
      </div>
      <div class="alert-con">
        <div class='li' v-for='(item, index) in detailsData.genes' :key='index'>
          <div class='year' vi-if='item.label'>{{item.label}}：</div>
          <div class='year-con'>
            <template v-if='item.type == "fixed"'>
                <small>{{item.value}}</small>
            </template>
            <template v-else-if = "item.type == 'list'">
              <template v-if='JSON.parse(item.options).list'>
                <span
                  v-for='(v, i) in JSON.parse(item.options).list'
                  :key='i'
                  :class='{checkedActive: 0 == i}'
                  @click='checkedAc($event)'
                >
                  <input type="radio" name='radio' :value="v.value" id="i" v-model="gengesdata[item.gene_key]">
                  <label for='i'>{{v.value}}</label>
                </span>
              </template>
              <template v-else>
                <small
                  class="strong"
                  @click='numFn'
                >{{gengesdata[item.gene_key]}}</small>
                  <pickerBox
                    :stepData = 'JSON.parse(item.options).step'
                    v-model="gengesdata[item.gene_key]" />
              </template>
            </template>
            <template v-else-if = "item.type == 'list.days'">
              <select name='insurantDateLimit' v-model="gengesdata[item.gene_key]">
                <option
                  v-for='(v, i) in JSON.parse(item.options).list'
                  :key='i'
                >{{v.value}}</option>
              </select>
            </template>
            <template v-else>
              <small>{{item.value}}</small>
              <b class="jobs" @click="queryJob">查询职业</b>
              <malyerCom v-if='jobInfo.flag' :info='jobInfo' @closeEvt='closeEvt'></malyerCom>
            </template>
          </div>
        </div>
      </div>
      <div class='foot'>
        <span class="price">价格：￥{{this.detailsData.product.price}}</span>
        <span class="sure" @click="suredFn">立即投保</span>
      </div>
    </div>
    <healthInform
      v-if='healthFlag'
      :healthData='healthData'
      :detailsData='detailsData'
      @nextBtn='getInfo'
    ></healthInform>
  </div>
</template>
<script>
import pickerBox from './pickerBox.vue'
import malyerCom from './malyerCom.vue'
import healthInform from './healthInform.vue'
export default {
  name: 'confirmInsure',
  props: ['detailsData'],
  data () {
    return {
      gengesdata: {},
      stepData: {},
      nums: '1',
      health_id: '',
      jobInfo: {
        flag: false,
        malyer: '',
        title: ''
      },
      healthFlag: false,
      healthData: {},
      personInfo: {}
    }
  },
  methods: {
    closeEvt () {
      this.jobInfo.flag = false
    },
    close () {
      let alertDom = document.querySelector('.alert-box')
      let markDom = document.querySelector('.mark-box')
      alertDom.classList.add('alertHide')
      markDom.classList.add('markHide')
      alertDom.classList.remove('alertShow')
      markDom.classList.remove('markShow')
      // this.$refs.scrollDom.removeEventListener('touchmove', this.scrollDom, false)
    },
    numFn () {
      let pickerBox = document.querySelector('.picker-box')
      pickerBox.classList.remove('alertHide')
      pickerBox.classList.add('alertShow')
    },
    // scrollDom (e) {
    //   e.stopPropagation()
    //   e.preventDefault()
    // },
    checkedAc (e) {
      let parDom = e.path[2]
      let childrenDom = parDom.querySelectorAll('span')
      for (let i = 0; i < childrenDom.length; i++) {
        childrenDom[i].classList.remove('checkedActive')
      }
      e.target.parentNode.classList.add('checkedActive')
    },
    GetPrice () {
      this.$store.dispatch('productList/GetPrice', {
        product_id: this.detailsData.product.product_id,
        genes: this.gengesdata
      }).then((data) => {
        // console.log(data)
        this.$emit('SetPrice', data.price)
      })
    },
    queryJob () {
      this.$store.dispatch('productList/getJob', {
        product_id: this.detailsData.product.product_id
      }).then((res) => {
        this.jobInfo.title = '查询职业'
        this.jobInfo.malyer = res
        this.jobInfo.flag = true
      })
    },
    getInfo (healthId) {
      this.$store.dispatch('productList/getInfo', {
        product_id: this.detailsData.product.product_id
      }).then((res) => {
        this.personInfo = res
        // console.log(res, this)
        this.healthFlag = false
        console.log(this.detailsData)
        this.$router.push({path: '/personinfo', query: {detailData: this.personInfo, price: this.detailsData.product.price, headth_id: healthId}})
      })
    },
    suredFn () {
      let needHeathy = this.detailsData.options.need_health
      if (needHeathy) {
        // console.log(1)
        this.$store.dispatch('productList/getHeathy', {
          product_id: this.detailsData.product.product_id,
          genes: ''
        }).then((res) => {
          this.healthData = res
          this.healthFlag = true
        })
      } else {
        // console.log(0)
        this.getInfo()
      }
    }
  },
  created () {
    this.detailsData.genes.forEach((item) => {
      this.$set(this.gengesdata, item.gene_key, item.value)
      if (item.type === 'list' || item.type === 'list.days') {
        this.$watch(() => {
          // console.log(this.gengesdata[item.gene_key])
          return this.gengesdata[item.gene_key]
        }, () => {
          this.GetPrice()
        })
      }
    })
  },
  mounted () {
    // this.$refs.scrollDom.addEventListener('touchmove', this.scrollDom, false)
  },
  components: {
    pickerBox,
    malyerCom,
    healthInform
  }
}
</script>
<style scoped lang='less'>
  .mark-box{
    position: fixed;
    top:0;
    left: 0;
    bottom:0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index:-1;
    opacity: 0;
  }
  .alert-box{
    width:100%;
    background: #fff;
    position:fixed;
    bottom:-100%;
    left:0;
    min-height: 2rem;
    max-height: 7rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    .alert-con{
      width: 100%;
      .li{
        border-bottom: 0.01rem solid #ccc;
        padding: 0.3rem 0.2rem 0.3rem 0;
        box-sizing: border-box;
        display: flex;
        .year{
          width:1.5rem;
          margin: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .year-con{
          padding-left:0.5rem; 
          flex:1;
          .jobs{
            color:#FE4773;
            margin-left:10px; 
          }
          span{
            border:1px solid #ccc;
            padding: 0.2rem 0.2rem;
            margin-right:0.1rem;
            margin-bottom:0.1rem; 
            display: inline-block; 
            border-radius: 0.25rem;
            position: relative;
            input{
              position: absolute;
              top:50%;
              left:50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              border-radius: 0.25rem;
              opacity: 0;
            }
          }
          .strong{
            font-weight: bold;
          }
        }
      }
    }
    .h1{
      width: 100%;
      display: flex;
      height:1rem;
      line-height: 1rem;
      box-sizing: border-box;
      padding-right:0.2rem; 
      border-bottom:0.01rem solid #ccc;
      justify-content: space-between;
      span{
        &:nth-child(2){
          width: 2rem;
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
    .foot{
      width:100%;
      height:1rem;
      line-height: 1rem;
      display: flex;
      .price{
        flex:1;
        font-size: 0.28rem;
        color: #FF4774;
      }
      .sure{
        width: 2.5rem;
        color:#fff;
        background: #FF4774;
        font-size: 0.28rem;
        text-align: center;
      }
    }
  }
  .checkedActive{
    background: #FF4774;
    color: #fff;
  }
  .alertHide{
    animation: alertHide 1s forwards;
  }
  .alertShow{
    animation: alertShow 0.4s forwards;
  }
  .markShow{
    animation: markShow 0.8s forwards;
  }
  .markHide{
    animation: markHide 0.1s forwards;
  }
  @keyframes alertHide{
    from {
      bottom:0rem;
    }
    to {
      bottom:-100%;
    }
  }
  @keyframes alertShow{
    from {
      bottom:-100%;
    }
    to {
      bottom:0rem;
    }
  }
  @keyframes markShow{
    from {
      z-index:-1;
      opacity: 0;
    }
    to {
      z-index:0;
      opacity: 1;
    }
  }
  @keyframes markHide{
    from {
      z-index:0;
      opacity: 1;
    }
    to {
      z-index:-1;
      opacity: 0;
    }
  }
</style>
