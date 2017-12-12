<template>
  <div class='dialog-box' v-if='isShow'>
    <div class='dialog'>
      <span @click='close'>X</span>
      <h1>登录</h1>
      <div class='user'><input type='text' placeholder='手机号码' v-model='user.username'></div>
      <div class='pwd'><input type='password' placeholder='密码' v-model='user.pwd'></div>
      <div class='btn'><button @click='login'>登录</button></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      user: {
        username: '',
        pwd: ''
      }
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    close () {
      this.isShow = false
    },
    login () {
      if (this.user.username !== '' && this.user.pwd !== '') {
        // window.localStorage.setItem('user', JSON.stringify(this.user))
        this.isShow = false
      } else {
        alert('账号密码不能为空')
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.dialog-box{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0, 0, 0, 0.5);
  z-index:99;
  .dialog{
    background:#fff;
    width:6.36rem;
    height:6.50rem;
    border-radius:8px;
    position:absolute;
    top:2.82rem;
    left:0.58rem;
    span{
      display:block;
      width:0.64rem;
      height:0.64rem;
      color:#ccc;
      text-align:center;
      line-height:0.64rem;
      position:absolute;
      right:0.1rem;
      top:0.1rem;
      font-size:0.5rem;
    }
    h1{
      color:#454545;
      font-size:0.4rem;
      text-align:center;
      position:absolute;
      top:0.5rem;
      left:3rem;
    }
    .user{
      width:80%;
      height:1rem;
      margin-left:10%;
      border-bottom:0.01rem solid #ccc;
      position:absolute;
      top:2rem;
      left:0;
      line-height:1rem;
      input{
        height:50%;
        wdith:100%;
        border:0;
      }
    }
    .pwd{
      width:80%;
      height:1rem;
      margin-left:10%;
      border-bottom:0.01rem solid #ccc;
      position:absolute;
      top:3rem;
      left:0;
      line-height:1rem;
      input{
        height:50%;
        wdith:100%;
        border:0;
      }
    }
    .btn{
      text-align:center;
      position:absolute;
      top: 5rem;
      left: 0.51rem;
      button{
        background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
        border-radius: 100px;
        width:5.32rem;
        height:0.9rem;
        color:#fff;
      }
    }
  }
}
</style>
