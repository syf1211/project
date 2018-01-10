<template>
  <div class="picker-box">
    <div class="picker-content">
      <div class="picker-title">
        <div class="cancel-btn" @click='cancelBtn'>取消</div>
        <div class="sure-btn" @click='cancelBtn'>确定</div>
      </div>
      <picker :data='numData' v-model='num'></picker>
    </div>
  </div>
</template>
<script>
import { Picker } from 'vux'
export default {
  props: ['stepData'],
  data () {
    return {
      numData: [],
      num: ['1']
    }
  },
  watch: {
    num (newVal) {
      // console.log(newVal)
      this.$emit('input', this.num[0] + this.stepData.unit)
    }
  },
  created () {
    let numData = []
    let {
      min,
      max,
      step,
      unit
      } = this.stepData
    for (var i = min; i <= max; i += step) {
      numData.push({
        name: i + unit,
        value: i + ''
      })
    }
    this.numData.push(numData)
  },
  methods: {
    cancelBtn () {
      let pickerBox = document.querySelector('.picker-box')
      pickerBox.classList.add('alertHide')
      pickerBox.classList.remove('alertShow')
    }
  },
  components: {
    Picker
  }
}
</script>
<style scoped lang='less'>
.picker-box{
  position: fixed;
  left: 0;
  bottom:-100%;
  right: 0;
  z-index:9999;
  .picker-title{
    display: flex;
    justify-content: space-between;
    background: #fff;
    line-height: 1rem;
    div{
      padding: 0 0.3rem;
    }
  }
  .picker-content{
    background: #fff;
  }
}
</style>
