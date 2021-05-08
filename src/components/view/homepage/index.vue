<template>
  <div class="page-body-container" slot="homepage">
    <canvas ref="background" class="background"></canvas>
    <div class="content-show"></div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    height: function() {
      return document
    }
  },
  mounted() {
    this.setBackGroundImg()
  },
  data() {
    return {
      // bgImg: require('@image/background1.jpg')
    }
  },
  methods: {
    setBackGroundImg() {
      window.requestAnimFrame = (function() {
        return window.requestAnimationFrame
      })()
      let canvas = this.$refs.background
      let c = canvas.getContext('2d')
      let numStars = 2000
      let radius = '0.' + Math.floor(Math.random() * 9) + 1
      let focalLength = canvas.width * 2
      let warp = 0
      let centerX, centerY
      let stars = []
      let star
      let i
      let animate = true
      initializeStars()

      function executeFrame() {
        if (animate) window.requestAnimFrame(executeFrame)
        moveStars()
        drawStars()
      }

      function initializeStars() {
        centerX = canvas.width / 2
        centerY = canvas.height / 2

        stars = []
        for (i = 0; i < numStars; i++) {
          star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
          }
          stars.push(star)
        }
      }

      function moveStars() {
        for (i = 0; i < numStars; i++) {
          star = stars[i]
          star.z--

          if (star.z <= 0) {
            star.z = canvas.width
          }
        }
      }

      function drawStars() {
        let pixelX, pixelY, pixelRadius

        // Resize to the screen
        if (
          canvas.width !== window.innerWidth ||
          canvas.height !== window.innerHeight - 84
        ) {
          canvas.width = window.innerWidth
          console.log(window.innerHeight)
          canvas.height = window.innerHeight - 84
          initializeStars()
        }
        if (warp === 0) {
          // 此代码块改背景色为渐变色
          let grd = c.createRadialGradient(
            canvas.width,
            canvas.height,
            canvas.width,
            canvas.width,
            canvas.height,
            1000
          )
          grd.addColorStop(0, 'rgba(1, 9, 41, 0.6)')
          grd.addColorStop(1, 'rgba(2, 8, 36, 0.6)')
          c.fillStyle = grd
          c.fillRect(0, 0, canvas.width, canvas.height)
        }
        c.fillStyle = 'rgba(209, 255, 255, ' + radius + ')'
        for (i = 0; i < numStars; i++) {
          star = stars[i]

          pixelX = (star.x - centerX) * (focalLength / star.z)
          pixelX += centerX
          pixelY = (star.y - centerY) * (focalLength / star.z)
          pixelY += centerY
          pixelRadius = 1 * (focalLength / star.z)

          c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius)
          c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')'
        }
      }

      executeFrame()
    }
  }
}
</script>

<style lang="less" scoped>
.page-body-container {
  height: 100%;
  // width: 68%;

  .background {
    width: 100%;
    margin: 0 auto;
    // height: 100%;
    display: block;
    position: absolute;
    z-index: -5;
  }

  .content-show {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(253, 253, 253, 0.4);
  }
}
</style>
