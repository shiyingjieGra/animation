<template>
 <div>
  <b-loading :is-full-page="true" v-model="loading"></b-loading>
  <p v-html="html"></p>
 </div>
</template>

<style>
</style>

<script>
import Axios from 'axios'

export default {
  // 使用时请使用 :url.sync=""传值
  props: {
    url: {
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      html: ''
    }
  },
  watch: {
    url(value) {
      this.load(value)
    },
  },
  mounted() {
    console.log(this.url);
    this.load(this.url)
  },
  methods: {
    load(url) {
      if (url && url.length > 0) {
        let param = {
          accept: 'text/html, text/plain',
        }

        // 加载中
        this.loading = true
        Axios.get(url, param)
          .then((response) => {
            setTimeout(() => {
              this.loading = false
            }, 2000)

            // 处理HTML显示
            this.html = response.data
          })
          .catch(() => {
            this.loading = false
            this.html = '加载失败'
          })
      }
    },
  },
}
</script>
