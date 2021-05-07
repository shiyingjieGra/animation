<template>
  <b-navbar :fixed-top=true>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          :src="logoImage"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        主页
      </b-navbar-item>
      <b-navbar-item href="#">
        动画展示
      </b-navbar-item>
      <b-navbar-item href="#">
        模型
      </b-navbar-item>
      <b-navbar-dropdown label="关于我们">
        <b-navbar-item href="#">
          我们为什么做这个
        </b-navbar-item>
        <b-navbar-item href="#">
          我们怎么做这个
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data () {
    return {
      logoImage: require('@image/logo.gif')
    }
  },
  mounted () {
    this.initPage()
    console.log('unknow')
  },
  methods: {
    initPage () {

    }
  }
}
</script>
<style scoped>

</style>
