<template>
  <div class="img-list">
    <div class='h1'>保险课堂</div>
    <a 
      class='log-list'
      v-for='(item,index) in logList'
      :key='index'
      href='javascript:;'
      @click='detailFn(item.article_id)'
    >
      <div class='list-left'>
        <div class='word1'>{{item.title}}</div>
        <div class='word2'>{{item.description}}</div>
      </div>
      <div class='list-right'><img :src='item.cover'/></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['logList'],
  methods: {
    detailFn (id) {
      this.$router.push('/listdetails/' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.h1{
  background: #fff;
  color: #ccc;
  font-size:0.40rem;
  line-height:0.90rem;
  padding: 0 0.20rem;
  box-sizing:border-box;
}
.log-list {
  display: block;
  display: flex;
  height: 2.00rem;
  padding: 0 0.20rem;
  box-sizing:border-box;
  border-bottom:0.01rem solid #ccc;
  margin-top:0.15rem; 
  background:#fff;
}
.list-left{
  flex:1;
  overflow: hidden;
  font-size: 0.30rem;
}
.list-left .word1{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.80rem;
}
.list-left .word2{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  text-overflow: ellipsis;
  line-height: 0.50rem;
  color: #ccc;

}
.list-right{
  width:2.40rem;
  text-align: center;
}
.list-right img{
  width: 80%;
  margin-top:0.20rem; 
  height: 1.50rem;
}
</style>
