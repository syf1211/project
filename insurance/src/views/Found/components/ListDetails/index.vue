<template>
  <div class='list-details' v-if='detailData.cover'>
    <img class='cover' :src='detailData.cover'/>
    <div class="detail-page">
      <h1>{{detailData.title}}</h1>
      <div class='artice-content' v-html='detailData.content'></div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'listDetails',
  data () {
    return {
      detailData: {}
    }
  },
  created () {
    this.$store.dispatch('details/getArticle', {
      id: this.$route.params.id
    }).then((res) => {
      this.detailData = res.data
      console.log(this.detailData)
    })
  }
}
</script>


<style scoped lang='less'>
.list-details{
  width:100%;
  img{
    width:100%;
    height: auto;
  }
  .detail-page{
    padding: 0 0.3rem;
    box-sizing: border-box;
    h1{
      font-size: 0.38rem;
      font-weight: bold;
      line-height: 0.6rem;
      margin: 0.4rem 0;
    }
    .artice-content{
      font-size: 0.35rem;
    }
  }
}
</style>
