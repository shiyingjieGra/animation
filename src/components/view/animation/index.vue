<template>
  <div class="columns full-height" slot="animation">
    <left-bar class="column is-2"></left-bar>
  </div>
</template>

<script>
import LeftBar from './leftBar.vue'

export default {
  components: {
    LeftBar
  }
}
</script>
<style lang="less" scoped>
.full-height {
  height: 100%;
}
</style>
