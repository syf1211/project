<template>
  <div class='product-page'>
    <router-link
      class='list'
      v-for='(item, index) in dataList'
      :key='index'
      :to='"/describe/"+item.product_id'
    >
      <div class='dt'><img class='img' :src='item.cover'/></div>
      <div class='dd'>
        <div class='title'>{{item.title}}</div>
        <div class='content'>{{item.features}}</div>
        <div class='price-num'>
          <div class='price-box'>
            <div class='price'>{{item.price}}</div>
            <div class='price-con'>元起购买</div>
          </div>
          <div class='num'>{{item.sale_num}}人购买</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['dataList']
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
.list{
  display: flex;
  padding:0.2rem 0;
  margin:0 0.25rem;
  box-sizing:border-box;
  font-size:0.25rem;
  position: relative;
  &:after{
    content: '';
    width:200%;
    position: absolute;
    bottom: 0;
    height: 0.02rem;
    transform: scale(0.5);
    background: #ccc;
    transform-origin: left top;
  }
}
.dt{
  flex:5;
  padding-right:0.15rem;
}
.dt .img{
  width:100%;
  height:2.11rem; 
}
.dd{
  flex:6;
  overflow: hidden;
}
.title{
  font-size:0.30rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content{
  color:#999;
  line-height:0.40rem;
  margin-top:0.1rem; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  text-overflow: ellipsis;
}
.price-num{
  width:50%;
  display: flex;
  color:#999;
  margin-top:0.4rem;
  position: absolute;
  bottom: 0.2rem;
  justify-content: space-between;
}
.price{
  font-size: 0.40rem;
  position: relative;
  top:-0.15rem;
}
.price-box{
  display: flex;
  color:red;
  text-align: right;
}
</style>
