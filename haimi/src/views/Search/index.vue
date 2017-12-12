<template>
  <div class="search-page" v-title='"查询"'>
    <search-bar theme='white' :defaultVal='$route.params.con'></search-bar>         
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
export default {
  data () {
    return {
      msg: 'search'
    }
  },
  components: {
    SearchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
