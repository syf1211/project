<template>
  <div class='login-page'>
    <h1>账号密码登录</h1>
    <div class="user-box"><input type='text' placeholder="请输入用户名/手机号/邮箱"></div>
    <div class="pwd-box"><input type='password' placeholder="请输入密码"></div>
    <div class="btn-box"><button @click='login'>登录</button></div>
    <div class="login-text">
      <span><a href="javascritp:;">注册账号</a></span>
      <span><a href="javascritp:;">忘记密码</a></span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      login () {
        this.$store.dispatch('user/loginFn').then((res) => {
          this.$router.replace('/home')
        })
      }
    }
  }
</script>
<<style scoped lang='less'>
.login-page{
  padding:0 0.7rem;
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  h1{
    font-size:0.5rem;
    line-height:2.5rem;
  }
  .user-box,.pwd-box{
    width:100%;
    height:1rem;
    line-height:1rem;
    border-bottom:0.01rem solid #eee;
    input{
      width:100%;
      height:70%;
      border:0;
    }
  }
  .btn-box{
    margin-top:0.7rem;
    button{
      width:6rem;
      height:0.8rem;
      color:#fff;
      background:#FF4774;
      border:0;
      font-size:0.3rem;
    }
  }
  .login-text{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:1.4rem;
  }
}
</style>

