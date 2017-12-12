<template>
  <div class='uploadBtn'>
    <slot></slot>
    <input 
      type='file' 
      ref='file' 
      @change='changeFile'
      v-if="capture==''">
    <input 
      type='file' 
      ref='file' 
      @change='changeFile'
      accept="video/*" 
      capture="camera" 
      v-else>
  </div>
</template>
<script>
export default {
  name: 'Upload',
  props: {
    capture: {
      default: ''
    }
  },
  methods: {
    changeFile () {
      let file = this.$refs.file.files[0]
      var formData = new FormData()
      formData.append('test-upload', file)
      this.$http.post('http://39.106.70.14:3000/api/upload', formData).then((data) => {
        if (data) {
          this.$emit('uploadOk', data)
        }
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.uploadBtn{
  position:relative;
  width:2.6rem;
  height:0.9rem;
  line-height:0.9rem;
  text-align:center;
  color:#fff;
  border:0;
  background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
  border-radius: 100px;
  input{
    position:absolute;
    left:0rem;
    top:0rem;
    opacity:0;
  }
}
</style>
