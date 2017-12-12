<template>
  <div class='not-concern'>
    <div class='head-box'>
      <img src='../static/img/场景背景.png' class='house'/>
      <div class='sun-box'>
        <img src='../static/img/太阳.png' class='sun'>
      </div>
      <img src='../static/img/云 1.png' class='cloud1' >
      <img src='../static/img/云 2.png' class='cloud2'>
      <img src='../static/img/云 3.png' class='cloud3'>
      <img src='../static/img/鸟 1.png' class='bird1'>
      <img src='../static/img/鸟 2.png' class='bird2'>
      <div class='car-box'>
        <img src='../static/img/车身.png' class='car'>
        <img src='../static/img/轮子 1.png' class='whell1'>
        <img src='../static/img/轮子 2.png' class='whell2'>
      </div>
    </div>
    <div class='section-box'>
      <div class='section'>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    dialog () {
      console.log(1)
    }
  },
  components: {}
}
</script>
<style scoped lang='scss'>
.not-concern{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  height:100%;
  width:100%;
  background:url('../static/img/背景.png') no-repeat;
  background-size:100% 100%;
  overflow-x:hidden;
  overflow-y:auto;
  .head-box{
    position:relative;
    width:100%;
    height:4.96rem;
    .house{
      width: 100%;
      position: absolute;
      top: -1rem;
      left: 0;
    }
    .sun-box{
      position:absolute;
      top:0.12rem;
      left:0.12rem;
      width:1.9rem;
      height:1.9rem;
      .sun{
        width:100%;
        height:100%;
      }
    }
    .cloud1{
      position: absolute;
      width: 1.46rem;
      height: 0.56rem;
      left: 5.54rem;
      top: 1.04rem;
    }
    .cloud2{
      position: absolute;
      width: 1.4rem;
      height: 0.5rem;
      left: 0.34rem;
      top: 1.38rem;
    }
    .cloud3{
      position: absolute;
      width: 1.06rem;
      height: 0.3rem;
      left: 2.2rem;
      top: .5rem;
    }
    .bird1{
      position: absolute;
      width: .44rem;
      height: .12rem;
      left: 4.68rem;
      top: 1.74rem;
    }
    .bird2{
      position: absolute;
      width: .44rem;
      height: .12rem;
      left: 6.06rem;
      top: 2rem;
      animation:bird2 5s infinite;
      transform:translateX(0)
    }
    .car{
      position: absolute;
      width: .74rem;
      height: .32rem;
      left: 0.35rem;
      top: 4.4rem;
    }
    .whell1{
      position: absolute;
      width: .18rem;
      height: .18rem;
      left: .5rem;
      top: 4.62rem;
    }
    .whell2{
      position: absolute;
      width: .18rem;
      height: .18rem;
      left: .8rem;
      top: 4.62rem;
    }
  }
  .car-box{
      animation:car-box 5s linear infinite;
  }
  .section-box{
    position:absolute;
    top:4.94rem;
    width:100%;
    padding:0 0.3rem 0.3rem 0.3rem;
    box-sizing:border-box;
    .section{
      width:100%;
      height:100%;
      padding-bottom:2rem;
      padding:0 0.3rem;
      box-sizing:border-box;
      background:#fff;
      border-bottom-left-radius:0.2rem;
      border-bottom-right-radius:0.2rem;
    }
  }
}
@keyframes car-box{
  100% {
    transform:translate(0)
  }
  50% {
    transform:translate(6rem)
  }
  0% {
    transform:translate(0)
  }
}
</style>
