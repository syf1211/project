<template>
  <div class="icon-list">
    <div class='icon-list'>
    <div class='dl' v-for="(item, index) in iconList" :key='index'> 
      <div class='dt'><img :src='item.icon'/></div>
      <div class='dd'>{{item.text}}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iconList: [
        {
          text: '我的保单',
          icon: './static/images/icon10.png'
        },
        {
          text: '投保人信息',
          icon: './static/images/icon5.png'
        },
        {
          text: '申请理财',
          icon: './static/images/icon10.png'
        },
        {
          text: '申请退保',
          icon: './static/images/icon2.png'
        },
        {
          text: '申请续保',
          icon: './static/images/icon11.png'
        },
        {
          text: '销售纪录',
          icon: './static/images/icon12.png'
        },
        {
          text: '设置',
          icon: './static/images/icon4.png'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped ;ang='less'>
.icon-list{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: .20rem 0;
}
.icon-list .dl{
  width: 25%;
  text-align: center;
  padding: .50rem 0;
}
.icon-list .dl .dt img{
  width: .50rem;
  height: .50rem;
}
.icon-list .dl .dd{
  font-size: .25rem;
  margin-top:0.2rem;
}
</style>
