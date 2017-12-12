<template>
  <div class='upload-success'>
    <div class='header-word'>记录我们绚丽的童年 蒋大为 小学五年级 </div>
    <ul class='comment-box'>
      <li><small>宝贝分数：</small><span style='color:#F25555'>98分</span></li>
      <li><small>老师评语：</small><span>蒋宝宝，你的童年记录太赞了，老师为你感到高兴。不过在自己语言表达的逻蒋宝宝，你的童年记录太赞了，老师为你感到高兴。不过在自己语言表达的逻逻辑顺序，可以在思考后再表达。</span></li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang='scss'>
.upload-success{
  width:100%;
  padding:0.3rem;
  box-sizing:border-box;
  .header-word{
    padding:0.3rem 0;
    text-algin:center;
    border-bottom:0.01rem solid #E0E0E0;
    color:#333333;
  }
}
.comment-box{
  li{
    line-height:.7rem;
    display:flex;
    font-size:0.3rem;
  }
}
small{
  color:#999999;
  flex:2;
}
span{
  color:#333333;
  flex:8.5;
  display:block;
}
</style>
