<template>
  <div class="columns full-height" slot="animation">
    <left-bar class="column is-2"></left-bar>
    <html-panel class="animation-content" :url="animation"></html-panel>
  </div>
</template>

<script>
import HtmlPanel from '../../common/htmlPanel.vue'
import LeftBar from './leftBar.vue'

export default {
  name: 'animation',
  components: {
    LeftBar,
    HtmlPanel
  },
  computed: {
    animation() {
      return this.$store.state.animationUrl
    }
  }
}
</script>
<style lang="less" scoped>
.full-height {
  height: 100%;
  margin-top: 0px;

  .animation-content {
    width: 100%;
  }
}
</style>
