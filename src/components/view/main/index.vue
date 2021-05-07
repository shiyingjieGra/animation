<template>
  <div>
    <main-head></main-head>
    <div class="body">
      <manu-left></manu-left>
      <content-body></content-body>
    </div>
  </div>
</template>

<script>
import contentBody from './contentBody'
import mainHead from './mainHead'
import manuLeft from './manuLeft'

export default {
  components: {
    mainHead,
    contentBody,
    manuLeft
  }
}
</script>

<style scoped lang="less">
  .body {
    height: 1000px;
  }
</style>
