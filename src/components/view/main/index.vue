<template>
  <div class="body">
    <main-head></main-head>
    <div class="content">
      <keep-alive>
        <component :is="nowPage"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import mainHead from './mainHead'
import homepage from '../homepage/index'
import animation from '../animation/index'
import model from '../model/index'
import why from '../why/index'
import how from '../how/index'

export default {
  computed: {
    nowPage() {
      return this.$store.state.pageIndex
    }
  },
  components: {
    mainHead,
    homepage,
    animation,
    model,
    why,
    how
  },
  mounted() {
    console.log(this.$store)
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.body {
  height: calc(100vh - 84px);
  .content {
    height: calc(100vh - 84px);
  }
}
</style>
