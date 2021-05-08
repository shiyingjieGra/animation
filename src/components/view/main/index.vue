<template>
  <div>
    <main-head></main-head>
    <div class="body">
      <keep-alive>
        <component :is="nowPage"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import contentBody from './contentBody'
import mainHead from './mainHead'
import manuLeft from './manuLeft'
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
    contentBody,
    manuLeft,
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
  height: 1000px;
}
</style>
