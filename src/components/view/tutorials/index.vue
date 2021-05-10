<template>
  <div class="content-body" slot="tutorials">
    <html-panel :url="url"></html-panel>
  </div>
</template>

<script>
import HtmlPanel from '@/components/common/htmlPanel'

export default {
  components: {
    HtmlPanel
  },
  mounted() {
  },
  data() {
    return {
      url: 'http://localhost:3000/package/canvas与动画/canvas动画.html'
    }
  }
}
</script>
<style lang="less" scoped>
.content-body {
  height: 100%;
}
</style>
