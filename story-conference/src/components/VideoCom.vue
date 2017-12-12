<template>
  <div class='video-con'>
    <div class='header'>
      <vue-video ref="video1" :options="videoOptions"></vue-video>
      <!--<video :src="'http://39.106.70.14:3000/'+videoSrc" controls="controls"></video>-->
    </div>
  </div>
</template>
<script>
import VueVideo from 'vue-video-module'
export default {
  props: ['videoSrc'],
  data () {
    return {
      videoOptions: {
        src: 'http://39.106.70.14:3000/' + this.videoSrc,
        poster: '',
        controlBar: true,
        spinner: 'circles',
        fullscreen: true,
        aspect: {
          width: 75,
          height: 44
        }
      }
    }
  },
  components: {
    VueVideo
  }
}
</script>
<style scoped lang='scss'>
.video-con{
  width:100%;
}
.header{
  width:100%;
  height:5.4rem;
  video{
    width:100%;
    height:100%;
  }
}
</style>
