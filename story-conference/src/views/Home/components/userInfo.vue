<template>
  <div class='user-info'>
    <div class='content-head'>
      <div class='head-left'>
        <div class='img-head'><img src='../../../static/img/head-img.jpg'></div>
          <div class='name-box'>
            <span class='name'>孙燕飞</span>
            <span class='years'>5岁</span>
          </div>
      </div>
      <div class='head-right'>
        <span class='num'>1604人</span>
        <span class='person'>已参加</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userInfo'
}
</script>
<style scoped lang='scss'>
.content-head{
  width:100%;
  border-bottom:0.01rem solid #ccc;
  display:-webkit-flex;
  padding: 0.4rem 0;
  justify-content:space-between;
  .img-head{
    box-sizing:border-box;
    padding-right:0.3rem;
    img{
      width:0.8rem;
      height:0.8rem;
      border-radius:50%;;
    }
  }
  .head-left{
    display:flex; 
    .name-box{
      display:flex; 
      flex-direction:column;
      .name{
        font-size:0.38rem;
      }
      .years{
        width:0.56rem;
        height:0.3rem;
        line-height:0.3rem;
        text-align:center;
        font-size:0.16rem;
        background:#FD911F;
        color:#fff;
        border-radius:1rem;
      }
    }
  }
  .head-right{
    display:flex; 
    flex-direction:column;
    span{
      line-height:0.4rem;
    }
    .person{
      font-size:0.16rem;
    }
  }
}
</style>
