<template>
  <!-- 主界面菜单列表 -->
  <div class="menu">
    <section class="list-menu">
      <ul>
        <li v-for="item of data"
            :key="item.title">
          <router-link tag="div"
                       :to="item.path">
            <img :src="item.imgSrc">
            <span>{{item.title}}</span>
            <i class="iconRight"></i>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="stylus">
.menu
  background-color rgb(255, 255, 255)
  // margin 0 3px
  overflow hidden
.list-menu
  border-top 1px solid #ddd
.list-menu ul li
  touch-action manipulation
  user-select none
  -webkit-user-drag none
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  border-bottom 1px solid #ddd
  padding 0.65rem 0.6rem
.list-menu ul li div
  line-height 3.05rem
  font-size 0
.list-menu ul li div img
  width 1.25rem
  height 1.05rem
  vertical-align middle
.list-menu ul li div span
  font-size 1rem
  vertical-align middle
  line-height 1.05rem
  margin-left 0.35rem
.iconRight
  background-image url('../assets/image/mobile/icons/menu-icon-05.png')
  width 1.6rem
  height 1.6rem
  float right
  background-size contain
  margin-left 0.5rem
  margin-top 0.7rem
</style>
