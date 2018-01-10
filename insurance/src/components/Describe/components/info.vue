<template>
  <div class="info">
    <div class='title-box'>
      <div class='info-title'>{{detailsData.product.title}}</div>
      <div class='info-img'><img :src='detailsData.company.logo'/></div>
    </div>
    <div class='price-num'>
      <div class='price'>￥{{price}}</div>
      <div class='num'>已售<span>{{detailsData.product.sale_num}}</span></div>
    </div>
    <div class='des'>{{detailsData.genes[0].label}}: {{detailsData.genes[0].value}} | {{detailsData.genes[2].label}}: {{detailsData.genes[2].value}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['detailsData'],
  data () {
    return {
      price: this.detailsData.product.price
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.info{
  width:100%;
  background:#fff;
  box-sizing:border-box;
  padding: 0.2rem 0.2rem 0.6rem 0.2rem;
  .title-box,.price-num{
    display:flex;
    justify-content:space-between;
  }
  .title-box{
    height: 1rem;
    font-size:0.3rem;
    line-height: 1rem;
    color:#000;
    .info-title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .info-img{
    width:2rem;
    height: 1rem; 
    img{
      width:100%;
      vertical-align:middle;
    }
  }
  .price-num{
    height: 0.4rem;
    line-height: 0.4rem;
    .price{
      color:#FD4873;
      font-size:0.3rem;
    }
    .num span{
      color:#FD4873;
      position:relative;
      top:0.01rem;
      left:0.03rem;
      font-size:0.3rem;
    }
  }
  .des{
    color:#ccc;
    margin-top:0.3rem;
    box-sizing:border-box;
  }
}
</style>
