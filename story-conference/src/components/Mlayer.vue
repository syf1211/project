<template>
  <div class='layer' :class="{layer1: type == 1, layer2: type == 2, layer3: type == 3, }">
    <template v-if='type == 1'>
      <div class='layer-mask layer-fadeIn'></div>
      <div class='layer-main layer-scaleIn'>
        <div class='layer-title'>{{title}}</div>
        <div class='layer-content' ref="content">{{content}}</div>

        <template v-if="typeof btns == 'string'">
          <div class='layer-btns'>
            <span class="btn" @click="okFn">确定</span>
          </div>
        </template>
        <template v-else>
          <div class='layer-btns'>
            <span class="btn" @click="okFn">确定</span> 
            <span class="btn btn-cancel" @click="cancelFn">取消</span>
          </div>
        </template>
      </div>
    </template>
    <template v-if='type == 2'>
      <div class='layer-msg layer-fadeIn'>{{content}}</div>
    </template>
    <template v-if='type == 3'>
      <div class='layer-mask layer-fadeIn'></div>
      <div class='layer-loading layer-fadeIn'></div>
    </template>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      isShow: false,
      title: '标题',
      type: 1,
      content: '您是否要参加吗？',
      btns: ['取消', '取消'],
      time: 0,
      okCallback: function () {},
      cancelCallback: function () {}
    }
  },
  mounted () {
    if (typeof this.content === 'object') {
      let MC = Vue.extend(this.content)
      let component = new MC()
      let contentBox = this.$refs.content
      contentBox.innerHTML = ''
      contentBox.appendChild(component.$mount().$el)
      console.log(component.$mount().$el)
    }
    if (this.time !== 0) {
      setTimeout(() => {
        this.close()
        this.time = 0
      }, this.time)
    }
  },
  methods: {
    close () {
      document.body.removeChild(this.$el)
      this.$destroy()
    },
    okFn () {
      if (this.okCallback.toString() === 'function okCallback() {}') {
        this.okCallback(() => {
          this.close()
        })
      } else {
        this.close()
      }
    },
    cancelFn () {
      this.cancelCallback()
      this.close()
    }
  }
}
</script>
<style scoped lang='scss'>
.layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .layer-mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, .3);
      z-index: 1000;
  }
  .layer-loading {
      border-radius: 15px;
      width: 150px;
      height: 150px;
  }
  .layer-main {
      position: relative;
      z-index: 1001;
      background: #fff;
      width: 90%;
      border-radius: 5px;
  }
  .layer-title {
      line-height:2.5;
      text-align: center;
      color: #555;
      font-size:0.35rem;
      border-bottom: 1px #eee solid;
  }
  .layer-content {
      text-align: center;
      line-height: 1.5;
      padding: 25px;
      height:2.5rem;
      font-size:0.5rem;
  }
  .layer-btns {
    display: flex;
    text-align:center;
    margin-bottom:0.5rem;
    span {
      border-top: 1px #eee solid;
      line-height: 2.5;
      font-size:.27rem;
      text-align: center;
      flex: 1;
      display: block;
      color: #fe6432;
      &:not(:first-child) {
          border-left: 1px #eee solid;
          color: #fff;
          background:#888;
      }
    }
    .layer-btn-cancel {
      color: #555;
    }
    .btn{
      width:5.3rem;
      height:0.9rem;
      line-height: .9rem;
      margin:0 0.6rem;
      box-sizing:border-box;
      background-image: linear-gradient(90deg, #46C18C 0%, #47C372 49%, #6ED552 100%);
      border-radius: 100px;
      color:#fff;
      border:0;
    }
  }
}

.layer-scaleIn {
  animation: scaleIn 0.3s ease-out;
}

.layer-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.layer-scaleOut {
  animation: scaleIn 0.3s ease-out reverse;
}

.layer-fadeOut {
  animation: fadeIn 0.3s ease-out reverse;
}

.layer-msg {
  line-height: 2.2;
  background: rgba(0, 0, 0, .5);
  max-width: 80%;
  color: #ddd;
  padding: 0 20px;
  border-radius: 10px;
  z-index: 10001;
}
.layer2 {
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate3d(-50%, -50%, 0);
}
@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(1.1);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
