<template>
  <div slot="why">
    <div v-html="html"></div>
  </div>
</template>

<script>

export default {
  mounted() {
  },
  data() {
    return {
      html: require('html-loader!@/source/why.html')
    }
  }
}
</script>
