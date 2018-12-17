<template>
  <!-- 商户目录组件 -->
  <div class="menuList col col-3">
    <ul>
      <li v-for="(item, index) of menuList"
          :key="item.ccmMenuCode"
          @click="addAvtive(index)"
          :class="{activeMer:index==activeMer}">
        {{item.ccmMenuName}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['menuList'],
  data () {
    return {
      activeMer: -1
    }
  },
  methods: {
    addAvtive (index) {
      // console.log(mapGetters(['getMenuList']))
      console.log(this.$store.getters['foods/getMenuList'])
      console.log(index)
      this.activeMer = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.menuList
  overflow-y auto
  height 100%
  background-color #f8f8f8
  padding-bottom 10.666667vw
  position fixed
  padding 0
  width 25%
.menuList ul
  flex none
  position relative
  z-index 0
.menuList ul li
  text-align center
  font-size 0.32rem
  color #666
  line-height 1.2em
  padding 4.666667vw 2vw
  position relative
.activeMer
  background white
</style>
