<<template>
  <div class='malyer-box' ref='scrollDom'>
      <div class='notice-box'>
        <strong @click='close'>X</strong>
        <h1>{{info.title}}</h1>
        <div class='wrapper' ref='wrapper'>
          <div ref='content' class='content'>
            <template v-if='info.malyer instanceof Array'>
              <foldNav :jobData='info.malyer'></foldNav>
            </template>    
            <template v-else-if="typeof(info.malyer) === 'object'">
              <ul class='ul'>
                <li>主条款</li>
                <li
                  v-for='(item, index) in info.malyer.main'
                  :key='index'
                ><span>{{item.title}}</span><b>〉</b></li>
                <li>主条款</li>
                <li
                  v-for='(item, index) in info.malyer.other'
                  :key='index'
                ><span>{{item.title}}</span><b>〉</b></li>
              </ul>
            </template>
            <template v-else>
              <div class='text' v-html='info.malyer'></div>
            </template>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import foldNav from './foldNav'
export default {
  name: 'malyerCom',
  props: ['info'],
  data () {
    return {
      bool: false
    }
  },
  methods: {
    close () {
      this.$emit('closeEvt')
    },
    BScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          scrollbar: true
        })
      })
    }
  },
  updated () {
    this.BScroll()
  },
  mounted () {
    this.BScroll()
  },
  components: {
    foldNav
  }
}
</script>
<style lang='less' scoped>
.wrapper{
  position: absolute;
  width: 100%;
  bottom:0;
  top:0.8rem;
  overflow: hidden;
}
.content{
  position: absolute;
  top:0;
  left:0;
  right: 0;
}
.malyer-box{
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  background: rgba(0, 0, 0, 0.5);
  .notice-box{
    z-index:1;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    top:40%;
    max-height: 100%;
    overflow: auto;
    background: #fff;
    // animation: box 1s forwards;
    .text{
      margin-top:0.2rem;
      line-height: 0.4rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      font-size: 0.3rem;
      p{
        font-size:0.4rem;
        color: #00f!important;
      }
    }  
    strong{
      position: absolute;
      top:0.1rem;
      right: 0.2rem;
      font-size: 0.45rem;
      color: #ccc;
    }
    h1{
      line-height: 0.8rem;
      text-align: center;
      font-size: 0.35rem;
      &:after{
        content: '';
        position: absolute;
        top:0.8rem;
        background: #ccc;
        display: block;
        width: 200%;
        height:0.02rem;
        transform-origin:left top;
        transform:scale(0.5);
      }
    }
    .ul{
      margin-top:0.1rem;
      li{
        line-height: 0.8rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        &:nth-child(odd){
          background: #fff;
        }
        &:nth-child(even){
          background: #FAFAFA;
          display: flex;
          justify-content: space-between;
          b{
            color: #ccc;
            font-size: 0.3rem;
          }
        }
      }
    }
  }
  @keyframes box{
    from {
      bottom:-100%;
    }
    to {
      bottom:0rem;
    }
  }
}
</style>
