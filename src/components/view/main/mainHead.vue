<template>
  <b-navbar :fixed-top="true" :spaced="true" :shadow="true" :centered="true">
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="logoImage" alt="CANVAS" />
      </b-navbar-item>
      <div class="manu-container" v-for="menu in menuList" :key="menu.name">
        <b-navbar-item
          @click="changeMenu(menu)"
          v-if="menu.subMenu === 0"
          :active="menu.value === nowPage"
        >
          {{ menu.name }}
        </b-navbar-item>
        <b-navbar-dropdown
          :label="menu.name"
          :active="subHasActive(menu.subMenuList)"
          v-else
        >
          <b-navbar-item
            v-for="subMenu in menu.subMenuList"
            @click="changeMenu(subMenu)"
            :key="subMenu.name"
            :active="subMenu.value === nowPage"
          >
            {{ subMenu.name }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </div>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      logoImage: require('@image/logo.gif'),
      menuList: [
        {
          name: '主页',
          value: 'homepage',
          subMenu: 0
        },
        {
          name: '动画展示',
          value: 'animation',
          subMenu: 0
        },
        {
          name: '模型',
          value: 'model',
          subMenu: 0
        },
        {
          name: '关于我们',
          value: '',
          subMenu: 2,
          subMenuList: [
            {
              name: '为什么做这个',
              value: 'why',
              subMenu: 0
            },
            {
              name: '怎么做这个',
              value: 'how',
              subMenu: 0
            },
            {
              name: '教程',
              value: 'tutorials',
              subMenu: 0
            }
          ]
        }
      ],
      nowPage: 'homepage'
    }
  },
  mounted() {
    this.initPage()
  },
  computed: {
    subHasActive: function() {
      return function(subMenu) {
        let flag = false

        for (const menu of subMenu) {
          if (menu.value === this.nowPage) {
            flag = true
          }
        }
        console.log(flag)
        return flag
      }
    }
  },
  methods: {
    initPage() {},
    changeMenu(menu) {
      this.nowPage = menu.value
      this.$store.commit('handlePageList', menu.value)
      // this.$store.mainStore.pageIndex = menu.value
    }
  }
}
</script>
<style scoped lang="less">
/deep/.navbar-link.is-active,
a.navbar-item.is-active {
  color: #7957d5;
}
.manu-container {
  display: flex;
}
</style>
