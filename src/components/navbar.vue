<template>
  <nav class="nav-box">
    <div id="backBtn"
         @click="backUrl">
      <van-icon name="arrow-left"
                color="white"
                size="20px" />
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="right-btn"></div>
  </nav>
</template>

<script>
export default {
  methods: {
    backUrl () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
.nav-box
  display flex
  background $themeColor
  width 100vw
  height 2rem
  justify-content space-between
  align-items center
.title
  color white
.right-btn
  width 20px
</style>
