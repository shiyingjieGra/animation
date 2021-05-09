<template>
  <div slot="tutorials">
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
      url: 'http://localhost:3000/html/test.html'
    }
  }
}
</script>
