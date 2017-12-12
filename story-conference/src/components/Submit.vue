<template>
  <div class='video-box'>
    <video-com :videoSrc='videoSrc'></video-com>
    <router-view/>
   <!--<submit-video/>-->
   <!--<upload-success/>-->
    <!--<comment-end/>-->
  </div>
</template>
<script>
import SubmitVideo from '@/views/SubmitVideo'
import CommentEnd from '@/views/CommentEnd'
import VideoCom from '@/components/VideoCom'

export default {
  data () {
    return {
      videoSrc: ''
    }
  },
  components: {
    SubmitVideo,
    CommentEnd,
    VideoCom
  },
  created () {
    this.videoSrc = window.localStorage.getItem('videoSrc')
  }
}
</script>
<style scoped lang='scss'>
.video-box{
  width:100%;
}
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
