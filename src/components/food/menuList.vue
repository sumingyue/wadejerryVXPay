<template>
  <!-- 商户目录组件 -->
  <div class="menuList col col-3">
    <ul>
      <li v-for="(item, index) of menuList"
          :key="item.ccmMenuId"
          @click="addAvtive(index, item.ccmMenuId)"
          :class="{activeMer:index==activeMer}">
        {{item.ccmMenuName}}
      </li>
    </ul>
  </div>
</template>

<script>
import scroll from 'common/js/scroll.js'
export default {
  props: ['menuList'],
  data () {
    return {
      activeMer: 0
    }
  },
  methods: {
    addAvtive (index, id) {
      let nowEle = document.querySelectorAll(`.menu`)[this.activeMer]
      this.activeMer = index
      let ele = document.querySelector(`#foodDl${id}`)
      // let box = document.querySelector(`.foodContainer`)
      this.$nextTick(() => {
        scroll(nowEle.offsetTop, ele.offsetTop)
      })
    },
    handleScroll () {
      this.$nextTick(() => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

        let menu = document.querySelectorAll('.menu')
        let indexT = {
          diff: 9999,
          index: 0
        }
        for (let i = 0; i < menu.length; i++) {
          const item = menu[i]
          let top = item.offsetTop
          let diff = scrollTop - top + 40

          if (diff > 0 && diff <= indexT.diff) {
            indexT = {
              diff: diff,
              index: i
            }
          }
        }

        this.activeMer = indexT.index
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
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
  font-size $font-size-small
  color #666
  line-height 1.2em
  padding 4.666667vw 2vw
  position relative
.activeMer
  background white
</style>
