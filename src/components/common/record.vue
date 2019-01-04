<template>
  <div class="recordBox van-hairline--surround">
    <div class="infoContent">
      <h3 class="title">{{info.merchantName}}</h3>
      <p class="infoVal">下单时间:{{info.orderTime}}</p>
      <p class="infoVal">总价:{{info.totalFee}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="stylus" scoped>
.recordBox
  margin-bottom 10px
  box-shadow 5px 5px 20px 0px #2395FF
  background white
.title
  font-size 18px
  margin 5px
.infoVal
  font-size 14px
  color #666
  margin 5px
.infoContent
  padding 30px
</style>
