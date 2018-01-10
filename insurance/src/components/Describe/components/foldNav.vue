<template>
  <div class="flodNav" v-if='jobData'>
    <div class="fold-box" v-for="(item, index) in jobData" :key='index'>
      <div class="fold-title">{{item.name}}</div>
      <template v-if='item.child'>
        <template v-for='(v,i) in item.child'>
          <Cell
            :key='i'
            :title="v.name"
            is-link
            :border-intent="false"
            :arrow-direction="showIndex == (`${index}-${i}`) ? 'up' : 'down'"
            @click.native="changeIndex(`${index}-${i}`)"></Cell>
          <template v-if="v.child && showIndex == (`${index}-${i}`)">
            <cell-box
              v-for='(val,ind) in v.child'
              :key='ind'
              :border-intent="false"
              class="sub-item">{{val.name}}</cell-box>
          </template>
        </template>
      </template>
    </div>   
  </div>
</template>
<script>
import { Cell, CellBox } from 'vux'
export default {
  name: 'foldNav',
  props: ['jobData'],
  data () {
    return {
      showIndex: -1
    }
  },
  methods: {
    changeIndex (ind) {
      if (this.showIndex === ind) {
        this.showIndex = -1
      } else {
        this.showIndex = ind
      }
    }
  },
  created () {
    console.log(this.jobData)
  },
  components: {
    Cell,
    CellBox
  }
}
</script>
<style scoped lang='less'>
.flodNav{
  background: #eee;
  .fold-title{
    background: #fff;
    text-align:center;
    height: 0.8rem;
    border-bottom:0.01rem solid #eee;
    border-top:0.2rem solid #eee;
    line-height: 0.8rem;
  }
  .vux-cell-box{
    background: #eee!important;
  }
  .weui-cell{
    background: #fff;
    line-height: 0.5rem;
  }
}
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
