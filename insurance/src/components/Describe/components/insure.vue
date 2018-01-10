<template>
  <div class="insure">
    <div class='connect'>
      <i class=''></i>
      <b>联系客服</b>
    </div>
    <div class='price'>￥{{detailsData.product.price}}</div>
    <div class='sure' @click='sureFn'>立即投保</div>
  </div>
</template>

<script>
export default {
  name: 'insure',
  props: ['detailsData'],
  data () {
    return {
      msg: 'insure'
    }
  },
  methods: {
    sureFn () {
      this.$emit('sureFn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.insure{
  width:100%;
  height: 1rem;
  line-height:1rem;
  display:flex;
  box-sizing: border-box;
  position: fixed;
  bottom:0;
  left:0;
  .connect{
    background: #323232;
    width:1.3rem;
    border-right:0.01rem solid #ccc;
    color: #fff;
    text-align: center;
    b{
      font-size: 0.25rem;
    }
  }
  .price{
   background: #323232;
   color: #fff;
   flex:1;
   padding-left:0.3rem;
   font-size: 0.3rem;
  }
  .sure{
    background: #FE4773;
    font-size: 0.3rem;
    color: #fff;
    width:3rem;
    text-align: center;
  }
}
</style>
