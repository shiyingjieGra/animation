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
        <img :src="animation.url" />
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
          url: 'http://localhost:3000/images/bear.jpg',
          text: 'test1111'
        },
        {
          id: 2,
          url: 'http://localhost:3000/images/bear.jpg',
          text: 'test'
        },
        {
          id: 3,
          url: 'http://localhost:3000/images/bear.jpg',
          text: 'test'
        },
        {
          id: 4,
          url: 'http://localhost:3000/images/bear.jpg',
          text: 'test'
        }
      ]
    }
  },
  methods: {
    changeActive(item) {
      this.activeId = item.id
    }
  }
}
</script>
<style lang="less" scoped>
.menu {
  .title {
    font-size: 18px;
    margin-left: 15px;
    padding-top: 20px;
  }
  .menu-list {
    li {
      margin-bottom: 10px;

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
  ul {
    list-style: none;
    margin-left: 1em;
  }
}
</style>
