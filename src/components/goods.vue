<template>
  <div class="body">

  </div>
</template>

<script>
export default {
  props: ['goodsData'],
  data () {
    return {
      num: 1
    }
  }

}
</script>

<style lang="stylus" scoped>
.describe
  height 24px
  font-size 12px
  color #999
  overflow hidden
  margin-bottom 3px
.bottom
  margin-top 5px
  // line-height 12px
.button
  padding 0
  float right
.image
  width 100%
  display block
.clearfix:before, .clearfix:after
  display table
  content ''
.clearfix:after
  clear both
.body
  margin-bottom 10px
.content
  padding-left 10px
  margin-top 5px
.content span
  font-weight 700
.imgBox
  margin-right 5px
</style>
