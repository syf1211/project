<template>
  <div class='home'>
    <h1>上传视频要求</h1>
    <ul>
      <li><a href='javascript:;'>上传视频时长为3-5分钟；</a></li>
      <li><a href='javascript:;'>声音清晰洪亮，仪态端庄富有感情，可自带背景音乐</a></li>
      <li><a href='javascript:;'>每一位学员只能上传一条视频，确认提交后不能修改</a></li>
    </ul>
    <div class='upload'><upload-btn @uploadOk='uploadOk'>上传视频</upload-btn></div>
    <div class='record'><upload-btn @uploadOk='uploadOk' :capture='capture'>录制视频</upload-btn></div>
  </div>
</template>
<script>
import UploadBtn from '@/components/UploadBtn'
export default {
  name: 'Upload',
  data () {
    return {
      capture: 'capture'
    }
  },
  methods: {
    uploadOk (data) {
      window.localStorage.setItem('videoSrc', data.data.data.url)
      this.$router.push('/submit/submitvideo')
    }
  },
  components: {
    UploadBtn
  }
}
</script>
<style scoped lang='scss'>
.upload{
  width:2.6rem;
  height:0.9rem;
  display:inline-block;
  margin:0.5rem 0 0.5rem 0.35rem;
}
.record{
  width:2.6rem;
  height:0.9rem;
  display:inline-block;
  margin:0.5rem 0 0.5rem 0.35rem;
}
h1{
  line-height:1rem;
}
ul{
  width:100%;
  padding-left:0.3rem;
  box-sizing:border-box;
  li{
    list-style:disc;
    color:#DEDEDE;
    font-size:0.14rem; 
    line-height:0.8rem;
    a{
      color:#454545;
    }
  }
}
.ma{
  text-align:center;
  margin-top:0.8rem;
}
.btn-box{
  display:flex;
  justify-content:space-between;
  padding:0.8rem 0;
  button{
    width:2.6rem;
    height:0.9rem;
    color:#fff;
    border:0;
    background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
    border-radius: 100px;
  }
}
</style>
