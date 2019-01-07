<template>
  <div class="record-box">
    <div class="recordBox van-hairline--surround">
      <div class="infoContent">
        <h3 class="title">{{info.merchantName}}</h3>
        <p class="infoVal">下单时间: {{info.orderTime}}</p>
        <p class="infoVal">总价: ￥{{info.totalFee}}</p>
      </div>
      <van-icon name="arrow"
                size="25px"
                color="#999" />
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
  box-shadow 3px 3px 15px 0px #2395ff
  background white
  display flex
  justify-content space-between
  align-items center
  height 20vh
.title
  font-size 18px
  margin 5px
.infoVal
  font-size 14px
  color #666
  margin 5px
.infoContent
  margin 0 30px
.record-box
  height 100%
</style>
