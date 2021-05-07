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
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
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
