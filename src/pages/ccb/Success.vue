<template>
  <div class="success-box">
    <div>
      <van-icon name="checked"
                color="limegreen"
                size="120px" />
    </div>
    <div class="text-box">
      <p class="success-text">支付成功</p>
      <router-link to="/pay_ccb">回到首页</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.success-box
  background white
  height 100vh
  display flex
  flex-direction column
  justify-content center
  align-items center
.success-text
  font-size 30px
.text-box
  height 30vh
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  padding 30px 0
</style>
