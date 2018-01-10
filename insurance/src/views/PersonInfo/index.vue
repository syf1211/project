<template>
  <div class="person-box" v-if='info'>
    <div class="info-list">
      <span><small class="red">*</small><strong>{{this.startData}}</strong></span>
      <div class="info-con"><input type="date"><b>〉</b></div>
    </div>
    <div class='content-box'>
      <div class="content" v-for='(item, index) in info.detailData.models' :key='index'>
        <div class="info-title" v-if='item.title != "选择起保日期"'>{{item.title}}</div>
        <div class="lists-info" v-for='(val, ind) in item.attributes' :key='ind'>
          <dateText 
            v-if='val.type === "date"'
            :info='val'></dateText>
          <list
          v-if='val.type === "radio"'
          :info='val'></list>
          <list
            v-if='val.type === "list"'
            :info='val'></list>
          <text-box v-if='val.type === "text"'
            :info='val'></text-box>
        </div>
      </div>
    </div>
    <div class="infoFoot">
      <div class="left-info">￥{{$route.query.price}}</div>
      <div class="right-info"><button @click='submitHeathFn'>提交</button></div>
    </div>
  </div>
</template>
<script>
import list from './components/list'
import textBox from './components/text'
import dateText from './components/dateText'
export default {
  data () {
    return {
      msg: '个人信息页',
      info: this.$route.query,
      startData: ''
    }
  },
  methods: {
    submitHeathFn () {
      console.log(1)
    }
  },
  created () {
    this.startData = this.info.detailData.models[4].attributes[0].label
    console.log(this.$route.query)
  },
  components: {
    list,
    textBox,
    dateText
  }
}
</script>
<style scoped lang='less'>
.person-box{
  width: 100%;
  height: 100%;
  background: #fff;
  
  overflow-x: hidden;
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
        width: 5.3rem;
        text-align: right;
        font-size:bold;
      }
      b{
        display: inline-block;
        width: 0.5rem;
        text-align: right;
        font-size:0.16rem; 
        color: #eee;
      }
    }
  }
  .content-box{
    padding-bottom:1.2rem;
  }
  .content{
    .info-title{
      line-height: 0.6rem;
      line-height: 0.6rem;
      background:#F8F8F8;
      color: #A8A9AB;
      width: 100%;
      box-sizing: border-box;
      padding:0 0.1rem 0 0.3rem;
      display: flex;
      align-items: center;
      line-height: 0.8rem;
    }
  }
  .infoFoot{
    width:100%;
    height:1rem;
    position: fixed;
    bottom:0;
    left: 0;
    background:#333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .left-info{
      color:#fff;
      padding-left:0.3rem;
      box-sizing: border-box;
      font-size: 0.3rem; 
    }
    .right-info{
      width:2rem;
      height: 100%;
      background: #FF4774;
      button{
        width: 100%;
        height: 100%;
        border:0;
        background:rgba(255,255,255,0);
        color: #fff;
        font-size: 0.25rem; 
      }
    }
  }
}
.red{
  color: #FF4774;
}
</style>

