<template>
  <div class="user-info">
    <div class='zoom-top'>
      <div class='head-img'><img src='../../../../static/images/head-img.jpg'/></div>
      <div class='info-name'>听说</div>
      <div class='info-tel'>15340637655</div>
    </div>
    <canvas id="wave" width="750" height="200" style="width: 750px; height: 200px;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    wage () {
      function SiriWave (opt) {
        this.opt = opt || {}
        this.K = 1
        this.F = 15
        this.speed = this.opt.speed || 0.1
        this.noise = this.opt.noise || 30
        this.phase = this.opt.phase || 0
        this.container = this.opt.container || '#canvas'
        if (!window.devicePixelRatio) {
          window.devicePixelRatio = 1
        }
        this.width = devicePixelRatio * (this.opt.width || 320)
        this.height = devicePixelRatio * (this.opt.height || 100)
        this.MAX = (this.height / 2) - 4
        this.canvas = document.querySelector(this.opt.container)
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.canvas.style.width = (this.width / devicePixelRatio) + 'px'
        this.canvas.style.height = (this.height / devicePixelRatio) + 'px'
        this.ctx = this.canvas.getContext('2d')
        this.run = false
      }
      SiriWave.prototype = {
        _globalAttenuationFn: function (x) {
          return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2)
        },
        _drawLine: function (attenuation, color, width, noise, F) {
          this.ctx.moveTo(0, 0)
          this.ctx.beginPath()
          this.ctx.strokeStyle = color
          this.ctx.lineWidth = width || 1
          var x, y
          F = F || this.F
          noise = noise * this.MAX || this.noise
          for (var i = -this.K; i <= this.K; i += 0.01) {
            i = parseFloat(parseFloat(i).toFixed(2))
            x = this.width * ((i + this.K) / (this.K * 2))
            y = this.height / 2 + noise * Math.pow(Math.sin(i * 10 * attenuation), 1) * Math.sin(F * i - this.phase)
            this.ctx.lineTo(x, y)
          }
          this.ctx.lineTo(this.width, this.height)
          this.ctx.lineTo(0, this.height)
          this.ctx.fillStyle = color
          this.ctx.fill()
        },
        _clear: function () {
          this.ctx.globalCompositeOperation = 'destination-out'
          this.ctx.fillRect(0, 0, this.width, this.height)
          this.ctx.globalCompositeOperation = 'source-over'
        },
        _draw: function () {
          if (!this.run) {
            return
          }
          this.phase = (this.phase + this.speed) % (Math.PI * 64)
          this._clear()
          this._drawLine(0.5, 'pink', 1, 0.35, 6)
          this._drawLine(1, '#fff', 1, 0.25, 6)
          window.clearAnimationFrame = requestAnimationFrame(this._draw.bind(this), 1000)
        },
        start: function () {
          this.phase = 0
          this.run = true
          this._draw()
        },
        stop: function () {
          this.run = false
          this._clear()
        },
        setNoise: function (v) {
          this.noise = Math.min(v, 1) * this.MAX
        },
        setSpeed: function (v) {
          this.speed = v
        },
        set: function (noise, speed) {
          this.setNoise(noise)
          this.setSpeed(speed)
        },
        bl: function (val) {
          return 1920 / 15
        }
      }
      var SW = new SiriWave({
        width: window.innerWidth,
        height: 80,
        container: '#wave'
      })
      SW.setSpeed(0.01)
      SW.start()
    }
  },
  mounted () {
    this.wage()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
canvas{
  position:absolute;
  top:3.5rem;
}
.zoom-top{
  background: #FE4974;
}
.head-img{
  text-align: center;
  padding: .70rem 0 .50rem 0;
}
.head-img img{
  width: 1.00rem;
  height: 1.00rem;
  border-radius: 50%;
}
.info-name{
  text-align: center;
  color:#fff;
  font-size: .25rem;
}
.info-tel{
  text-align: center;
  color:#fff;
  font-size: .25rem;
  padding: .20rem 0 1.5rem 0;
}
</style>
