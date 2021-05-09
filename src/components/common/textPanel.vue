<template>
    <div v-html="html"></div>
</template>

<script>

export default {
  props: {
    url: {
      default: ''
    },
  },
  mounted() {
    console.log(this.url)
  },
  data() {
    return {
      html: require('html-loader!' + this.url)
    }
  }
}
</script>
