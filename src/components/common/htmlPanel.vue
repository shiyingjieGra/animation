<template>
  <div class="html-panel-content">
    <b-loading :is-full-page="true" v-model="loading"></b-loading>
    <iframe class="show-iframe" :src="url"></iframe>
  </div>
</template>

<style></style>

<script>
import Axios from 'axios'

export default {
  // 使用时请使用 :url.sync=""传值
  props: {
    url: {
      required: true
    }
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
    }
  },
  mounted() {
    console.log(this.url)
    this.load(this.url)
  },
  methods: {
    load(url) {
      if (url && url.length > 0) {
        let param = {
          accept: 'text/html, text/plain'
        }

        // 加载中
        this.loading = true
        Axios.get(url, param)
          .then(response => {
            this.loading = false

            // 处理HTML显示
            this.html = response.data
          })
          .catch(() => {
            this.loading = false
            this.html = '加载失败'
          })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.html-panel-content {
  height: 100%;
  .show-iframe {
    height: 100%;
    width: 100%;

    ::-webkit-scrollbar {
      width: 10px;
      height: 1px;
    }
    ::-webkit-scrollbar-thumb {
      //滑块部分
      border-radius: 5px;
      background-color: rgb(175, 74, 240);
    }
    ::-webkit-scrollbar-track {
      //轨道部分
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #ededed;
      border-radius: 5px;
    }
  }
}
</style>
