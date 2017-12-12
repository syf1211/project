<template>
  <div class="shouye" v-title='"登录"'>
    <h1>请登录</h1>
    <main>
      <div class='user'>账号：<input v-model='username.user'></div>
      <div class='pwd'>密码：<input v-model='username.pwd'> </div>
      <button @click='login'>登录</button>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'

export default {
  data () {
    return {
      username: {user: '', pwd: ''}
    }
  },
  methods: {
    login: function () {
      let user = this.username.user
      let pwd = this.username.pwd
      if (user === '' && pwd === '') {
        alert('账号或密码不能为空!!!')
        return false
      } else {
        if (user === 'sunyanfei' && pwd === '123') {
          localStorage.setItem('user', user)
          console.log(this.$route.query.loginDoCallback)
          this.$router.replace(this.$route.query.loginDoCallback) // 跳转路由
        } else {
          alert('账号或密码错误!!!')
          return false
        }
      }
    }
  },
  components: {
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
  background:#fff;
}
h1{
  width:100%;
  line-height:1rem;
  text-align:center;
  background:#fff9f3;
}
.user,.pwd{
  width:100%;
  padding:0.5rem 0.3rem 0.1rem 0.3rem;
  border-bottom:0.01rem solid #ccc; 
}
input{
  width:60%;
  height:100%;
  border:0;
  outline:none;
}
button{
  width:90%;
  margin-left:5%;
  background:#991f33;
  height:1rem;
  color:#fff;
  margin-top:0.5rem;
}
</style>
