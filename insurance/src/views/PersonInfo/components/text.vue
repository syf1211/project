<template>
  <div class="check-list">
    <div class="info-list">
      <span><small class="red">*</small><strong>{{info.label}}</strong></span>
      <div class="info-con"><input type="text"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  created () {
    // console.log(this.info)
  }
}
</script>
<style scopedSlots lang='less'>
.check-list{
  .info-list{
    width: 100%;
    box-sizing: border-box;
    padding:0 0.1rem 0 0.3rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    line-height: 0.8rem;
    .info-con{
      input{
        border:0;
        height: 0.45rem;
        width: 4.3rem;
        text-align: right;
        margin-right: 0.5rem;
        font-size:bold;
      }
    }
  }
}
.red{
  color: #FF4774;
}
</style>
