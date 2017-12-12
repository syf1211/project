<template>
  <div class='conten-box'>
    <div class='text-box'>
      <textarea maxlength='20' v-model='text' @keyup='textFn'></textarea>
      <span>不超过20个字</span>
    </div>
    <btn @click.native='submitFn'>提交</btn>
    <div class='resetBtn'><button>重新录制</button></div>
  </div>
</template>
<script>
import btn from '@/components/Button'
export default {
  data () {
    return {
      text: '请输入视频名称（在读年级、名称）',
      src: window.localStorage.getItem('videoSrc')
    }
  },
  methods: {
    textFn () {
      console.log(this.text)
    },
    submitFn () {
      this.$http.post('http://39.106.70.14:3000/api/addVideo', {
        name: this.text,
        video_src: this.src
      }).then((res) => {
        console.log(res)
        if (res.statusText === 'OK') {
          this.$router.push({path: 'uploadsuccess', query: {name: this.text}})
          setTimeout(() => {
            this.$router.push('/headerimg/comment')
          }, 3000)
        } else {
          alert('提交失败')
        }
      })
    }
  },
  components: {
    btn
  }
}
</script>
<style scoped lang='scss'>
.conten-box{
  width:100%;
  padding:0 0.3rem;
  box-sizing:border-box;
}
.text-box{
  width:100%;
  border-bottom:0.01rem solid #ccc;
  padding-bottom:0.4rem;
  textarea{
    width:100%;
    height:1.5rem;
    border:0;
    padding-top:0.3rem;
  }
  span{
    display:block;
    text-align:right;
    padding:0 0.2rem;
    box-sizing:border-box;
  }
}
.btn{
  text-align:center;
  margin-top:3.5rem;
  button{
    width:5.3rem;
    height:0.9rem;
    background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
    border-radius: 100px;
    color:#fff;
    border:0;
  }
}
.resetBtn{
  text-align:center;
  margin-top:0.3rem;
  button{
    background:#fff;
    color:#46C184;
    border:0;
  }
}
</style>
