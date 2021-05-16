<template>
  <aside class="menu">
    <p class="menu-label title">
      three.js
    </p>
    <ul class="menu-list">
      <li
        v-for="animation of animationList"
        :key="animation.id"
        :class="animation.id === activeId ? 'active' : ''"
        @click="changeActive(animation)"
      >
        <img :src="animation.imageUrl" />
        <p class="description">animation/{{ animation.text }}</p>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      activeId: 1,
      animationList: [
        {
          id: 1,
          imageUrl: 'https://threejs.org/examples/screenshots/webgl_animation_cloth.jpg',
          htmlUrl: 'https://threejs.org/examples/webgl_animation_cloth.html',
          text: 'test1111'
        },
        {
          id: 2,
          imageUrl: 'https://threejs.org/examples/screenshots/webgl_animation_keyframes.jpg',
          htmlUrl: 'https://threejs.org/examples/webgl_animation_keyframes.html',
          text: 'test'
        },
        {
          id: 3,
          imageUrl: 'https://threejs.org/examples/screenshots/webgl_animation_skinning_blending.jpg',
          htmlUrl: 'https://threejs.org/examples/webgl_animation_skinning_blending.html',
          text: 'test'
        },
        {
          id: 4,
          imageUrl: 'https://threejs.org/examples/screenshots/webgl_animation_skinning_additive_blending.jpg',
          htmlUrl: 'https://threejs.org/examples/webgl_animation_skinning_additive_blending.html',
          text: 'test'
        },
        {
          id: 5,
          imageUrl: 'http://localhost:80/images/bear.jpg',
          htmlUrl: 'http://127.0.0.1/pages/views/index.html',
          text: 'test'
        }
      ]
    }
  },
  mounted() {
    if (this.animationList.length) {
      this.$store.commit('handleAnimationUrl', this.animationList[0].htmlUrl)
    }
  },
  methods: {
    changeActive(item) {
      this.activeId = item.id
      this.$store.commit('handleAnimationUrl', item.htmlUrl)
    }
  }
}
</script>
<style lang="less" scoped>
.menu {
  padding-right: 5px;
  height: 98%;
  .title {
    font-size: 18px;
    margin-left: 15px;
    padding-top: 20px;
  }
  .menu-list {
    height: calc(100% - 40px);
    overflow-y: scroll;
    list-style: none;
    margin-left: 1em;
    li {
      margin-bottom: 10px;
      margin-right: 5px;

      img {
        border-radius: 5px;
        // width: 240px;
        border: 1px solid;
        cursor: pointer;
      }
      .description {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .active img {
      box-shadow: 0 0 0 3px #049ef4;
      text-decoration: none;
      border: 1px solid #049ef4;
    }
  }
}
</style>
