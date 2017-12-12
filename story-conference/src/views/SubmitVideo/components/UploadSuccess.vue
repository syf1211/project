<template>
  <div class='upload-success'>
    <div class='header-word'>{{$route.query.name}}</div>
    <div class='success-img'><img src='../../../static/img/成功.png'></div>
    <p>上传成功</p>
    <p>活动初赛结果将于11月13日公布，敬请期待</p>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang='scss'>
.upload-success{
  .header-word{
    width:100%;
    padding:0.3rem;
    box-sizing:border-box;
    text-algin:center;
    border-bottom:0.01rem solid #E0E0E0;
    color:#333333;
  }
}
.success-img{
  text-align:center;
  margin-top:2rem;
}
p{
  text-align:center;
  line-height:0.5rem;
  color:#454545;
}
</style>
