<template>
  <div class="box" id="particles">
    <div class='form'>
      <h1>{{msg}}</h1>
      <el-form status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="账户" prop="pass" >
          <el-input type="text" auto-complete="off" v-model='user.username'></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password"auto-complete="off" v-model='user.userpwd'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click=submitBtn>提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '个人中心',
      user: {
        username: '',
        userpwd: ''
      }
    }
  },
  methods: {
    submitBtn () {
      if (this.user.username === '') {
        alert('请填写账号')
      } else {
        if (this.user.userpwd === '') {
          alert('请填写密码')
        } else {
          this.$http.post('/api/login', this.user).then((data) => {
            window.localStorage.setItem('user', JSON.stringify(data))
            this.$root.user = data
            this.$router.replace('/home')
          })
        }
      }
    }
  },
  mounted () {
    particlesJS.load('particles', '../../../static/data/particles.json', function () {
      console.log('callback - particles.js config loaded')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1{
  font-weight:bold;
  font-size:30px;
  text-align:center;
  line-height:40px;
  margin-bottom:10px;
}
#particles{
   position: absolute;
   width: 100%;
   height: 100%;
   top:0;
   left:0;
   bottom:0;
   right:0;
   background: url('../../../static/img/timg (2).jpg');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 50% 50%;
}
.form{
  position:absolute;
  top:50%;
  left:50%;
  background:rgba(0,0,0,0.5);
  transform:translate(-50%,-50%);
}
</style>
