<template>
  <main>
    <nav class='nav'>
      <el-menu
        :default-active="defaultActive"
        :router="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <template 
          v-for='(item,index) in $router.options.routes' 
          v-if='item.meta'
        >
          <el-submenu :index="(index+'')" :key='index' v-if='item.children'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{setDefaultActive(index, item.path)}}{{item.meta.title}}</span>
            </template>
            <el-menu-item 
              v-for='(item2,index2) in item.children' 
              :index="index+'-'+(index2+1)" 
              :key="index+'-'+(index2+1)"
              :route='{path:item.path+"/"+item2.path}'
            >{{setDefaultActive(index+'-'+(index2+1), item.path+"/"+item2.path)}}{{item2.meta.title}}</el-menu-item>
          </el-submenu>   
          <el-menu-item :index="(index+'')" :route='{path:item.path}' v-else>
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>     
      </el-menu>
    </nav>
    <div class='content'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for='(item,index) in $route.matched' :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: true,
      defaultActive: '4-2'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    setDefaultActive (index, path) {
      if (path === this.$route.path) {
        this.defaultActive = index
      }
      return ''
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
main{
  width:100%;
  height:100%;
  position:relative;
}
.nav{
  width:200px;
  position:absolute;
  top:0;
  left:0;
  height:100%;
  border-right:1px solid #ccc;
}
.content{
  position:absolute;
  top:0px;
  left:200px;
  right:0;
  bottom:0;
}
.el-breadcrumb{
  border-bottom:1px solid #ccc;
  line-height:40px;
  padding-left:20px;
  box-sizing:border-box;
}
</style>