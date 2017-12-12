<template>
  <btn @click.native='enterFn'>参加故事大会</btn>
</template>
<script>
import btn from '@/components/Button'
import dialog from '@/components/dialog'
export default {
  name: 'enterstory',
  methods: {
    enterFn () {
      if (window.localStorage.getItem('user')) {
        // this.$dialog.hide()
        this.$router.push('/headerimg/upload')
      } else {
        // let that = this
        this.$dialog.open({
          title: '登录',
          type: 1,
          content: dialog
        })
        // this.$dialog.confirm('欢迎参加故事大会 ！！！', {
        //   okCallback (next) {
        //     setTimeout(() => {
        //       next()
        //     }, 2000)
        //     that.$router.push('/headerimg/upload')
        //   },
        //   cancelCallback () {
        //     console.log('取消')
        //   }
        // })

        // this.$dialog.msg('灵魂伴侣')
      }
    }
  },
  components: {
    btn
  }
}
</script>
<style scoped lang='scss'></style>
