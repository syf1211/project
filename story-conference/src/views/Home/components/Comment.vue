<template>
  <div class='comment'>
    <div class='word-box'>
      <p>感谢您对故事大赛的支持，</p>
      <p>点击下方查阅您的分数和老师独家点评</p>
    </div>
    <div class='btn' @click='commentFn'><button>查看老师的点评</button></div>
  </div>
</template>
<script>
export default {
  methods: {
    commentFn () {
      this.$router.push('/submit/commentend')
    }
  }
}
</script>
<style scoped lang='scss'>
.comment{
  padding-bottom:0.8rem;
}
.word-box{
  text-align:center;
  padding:1rem 0;
  p{
    line-height:0.5rem;
    color:#454545;
  }
}
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
.btn{
  text-align:center;
  button{
    width:5.3rem;
    height:0.9rem;
    background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
    border-radius: 100px;
    border:0;
    color:#fff;
  }
}
</style>
