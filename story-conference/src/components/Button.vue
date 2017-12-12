<template>
  <div class='btn'><button><slot></slot></button></div>
</template>
<script>
export default {
  name: 'enterstory'
}
</script>
<style scoped lang='scss'>
.btn{
  text-align:center;
  padding:0.4rem 0;
  button{
    background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
    border-radius: 100px;
    width:5.3rem;
    height:0.9rem;
    border:0;
    color:#fff;
  }
}
</style>
