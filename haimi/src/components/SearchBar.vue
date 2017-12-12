<template>
  <div class='search-wrap'>
    <div class="search-box" :class='[theme]'>
      <div class="text"> 
        <input placeholder="搜索宝贝" v-model="searchVal" type="text">
        <a href="javascript:;"  class="clear-text" v-show='searchFlag' @click='close'></a>
      </div>
    
      <!-- <router-link 
        class="submit"
      :to="{name:'Search',params:{'searchVal':searchVal}}"
      >搜索</router-link>-->
      <router-link :to="'/search/'+searchVal" class="submit">搜索</router-link>
      <!--<div class="submit" @click='searchFn' >搜索</div>-->
    </div>
    
    <template v-if='allArr'>
      <div class='detailsUl'>
        <div class='li' v-for='item in detailsNav'>{{item}}</div>
      </div>
      <word :dataArr='allArr'></word>
    </template>
    
  </div>
</template>

<script>
import word from '@/views/shouye/components/word'
export default {
  // name: 'SearchBar',
  props: {
    theme: {
      default: 'black'
    },
    defaultVal: {
      default: ' '
    }
  },
  data: function () {
    return {
      searchVal: this.defaultVal,
      allArr: [],
      detailsNav: ['综合排序', '销量优先', '价格排序']
    }
  },
  watch: {
    defaultVal: function () {
      this.$http.get('/api/productAll', {
        params: {
          val: this.searchVal
        }
      }).then(res => {
        this.allArr = res.data
      }, error => {
        console.log(error)
      })
    }
  },
  methods: {
    searchFn: function () {
      this.$emit('searchCallBack', this.searchVal)
    },
    close: function () {
      this.searchVal = ''
    }
  },
  computed: {
    searchFlag () {
      return this.searchVal.length >= 1
    }
  },
  components: {
    word
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-box{
  height: 1rem;
  width:100%;
  display:flex;
  padding:10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .text{
    flex: 1;    
    display:flex;
    input{
      display:block;
      flex:1;
      background: none;
      border:0;
      outline:none;
      line-height: 0.24rem;
      font-size: 0.12rem;
      padding: 0 10px;
    }
    .clear-text {
        display: block;
        height: .5rem;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
        width: .3rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzk4NDhBODYwNDExRTZCRDlERDVENTczQjIwN0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCQzk4NDhCODYwNDExRTZCRDlERDVENTczQjIwN0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JDOTg0ODg4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JDOTg0ODk4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HK54VAAACkUlEQVR42ryXTUhUURTHn4+wsLQgDZcp5sYwTSQykMaNpqbjokKsVaALWwSVuSlwVQq1CBIGol2CH6CBGZboSiQjUpGiUtsG08KvnEGC/J84Ty5P79d8Hfht3rtz/v+5975zz00LhUKOYRwB9SAASkAeOAr+gTXwE8yBSTAGNk2SHjAYcwrcB80gQzLmBHMOtLF4H+gGK6rkruIdifWAL+CmQlw2W63gK3gEDtkaoH/9AdwznCVZpINOMAPyTQ2UgWlw2klclMhy+g0UgLcgx0l85PIGLZAZoDUeTpK4F5R7QNwTooGuBE+7LErBQ7+BQnDbSV3c8TalZ6BTs9ujoBd8MkgeAc/BR83X0eEZyALXNElfgnZQCd4pxm2BRnALNGlytoDDLpdXXZEp542zxYnfS8SDwruLBsWqlgxUGUwrGRgRTAR9JvzPgjxrugiQgTOGG6daYsIvTkvQz+usi2KXTzUnDhMBn/iAofj/wufykerEYWI2RnGKTDKQFsN3TF9Dse9Zq6X4biFatfxNhKd+1vf8CpiwzLXhcidjK+7VggbwGhwUaoCNiWUyMG8h3iSIXwaDbGIkRhMLLh+Ruoiy+LggPiSsec0+JkzyTpKBUf53qnihEHckJm5oclLfOEYG1rlwqOIsOM5nxpBit9fwnsg2qLCvwB/vBHwMritOxArw26JOhDVjtrnh3T2Ov4FnKewHnnrtutgRPQCLKRD/zN3XnpbMO2rDSRSn3Ff5q9q3K14Cl5Jk4hdvzCXdvYDargsJXo45WU7ZzegH3/OegL9xCG/z/fC87I7oavq7u6CIu5uIhfAmF68ibnij8dyOv/PllNr2Ol5HumqdBMd4zCofarTDp8Ab0+v5jgADABSilJXiVZaAAAAAAElFTkSuQmCC) 50% no-repeat;
        background-size: .3rem;
        margin-top: 2px;
        margin-right: 10px;
    }
  }
  .submit{
    width: 0.4rem;
    line-height: 0.6rem;
    text-align:center;
    width:40px;
  }

  &.black{
    background: #242424;
    .text{
      background: #1a1a1a;
      input{
        color:#fff;
      }
    }
    .submit{
      color: #fff;
    }
  }
  &.white{
    background: #fff;
    .text{
      background: #f7f7f7;
      input{
        color:#000;
      }
    }
    .submit{
      color: #000;
    }
  }
}
.detailsUl{
  width:100%;
  padding:0.3rem 5%;
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
  border-bottom:0.01rem solid #ccc;
  .li{
    &:nth-child(1){
      color: #991f33;
    }
  }
}
.active{
  color:#991f3;
}
</style>
