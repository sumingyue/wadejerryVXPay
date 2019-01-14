<template>
  <div class="record-box"
       @click="goDetail">
    <div class="recordBox van-hairline--surround">
      <div class="infoContent">
        <h3 class="title">{{info.merchantName}}</h3>
        <p class="infoVal">金额: ￥{{info.totalFee}}</p>
        <p class="infoVal">时间: {{info.orderTime}}</p>
      </div>
      <van-icon name="arrow"
                size="25px"
                color="#999" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  methods: {
    goDetail () {
      this.$router.push({ path: '/ccm/recode/recode_detail', query: { id: this.info.orderListId, name: this.info.merchantName } })
    }
  }
}
</script>

<style lang="stylus" scoped>
$infoMargin = 8px 0
.recordBox
  margin-bottom 10px
  box-shadow 4px 6px 13px 0px #ddd
  background white
  display flex
  justify-content space-between
  align-items center
  height 20vh
.title
  font-size 18px
  padding $infoMargin
.infoVal
  font-size 14px
  color #666
  padding $infoMargin
.infoContent
  margin 0 30px
.record-box
  height 100%
</style>
