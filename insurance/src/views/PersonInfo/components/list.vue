<template>
  <div class="info-list">
    <span><small class="red">*</small><strong>{{info.label}}</strong></span>
    <div>
      <select class="dialog-box" v-model="infoText" dir="rtl">
        <option disabled style="color:#ccc;">请选择</option>
        <option
          v-for='(v, i) in info.list'
          :key='i'
          @click="checkText"
          value="v.value"
        >{{v.label}}</option>
      </select>
      <b>〉</b>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data () {
    return {
      infoText: '请选择'
    }
  },
  methods: {
    checkText (e) {
      this.infoText = e.target.innerText
      console.log(this.infoText)
    }
  }
}
</script>
<style scopedSlots lang='less'>
  .info-list{
    width: 100%;
    box-sizing: border-box;
    padding:0 0.1rem 0 0.3rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    line-height: 0.8rem;
    border-bottom: 0.01rem solid #eee;
    b{
      display: inline-block;
      width: 0.5rem;
      text-align: right;
      font-size:0.16rem; 
      color: #eee;
    }
  }
  .dialog-box{
    min-width: 2rem;
    border:0.01rem solid #888;
    background: #fff;
    font-weight: bold;
    box-sizing: border-box;
    border:0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: #fff;
    direction: rtl;
    option{
      direction: ltr;
    }
  }
  .red{
    color: #FF4774;
  }
</style>
