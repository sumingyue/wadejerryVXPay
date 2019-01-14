<template>
  <div class="record-box">
    <div class="infoContent van-hairline--bottom">
      <h3 class="title">{{this.$route.query.name}}</h3>
    </div>
    <van-card :num="item.total"
              v-for="item of val[0].wareListDto"
              :price="item.unitPrice"
              :desc="item.wareGroup"
              :title="item.wareName"
              :thumb="item.photo"
              centered
              :key="item.wareCode" />

    <div class="info_val_box">
      <p class="infoVal">总价: <span class="total">￥{{val[0].totalFee}}</span></p>
      <p class="infoVal">下单时间: <span>{{val[0].orderTime}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: [{
        'wareListDto': [],
        'totalFee': '',
        'orderTime': '',
        'orderListId': 0
      }]
    }
  },
  activated () {
    let par = this.$route.query
    // this.$api.ccm.recode.recode({ Id: par.id }).then(res => {
    //   this.val = res.data.arr
    //   console.log(res.data.arr)
    // })
    this.$axios.post('recode_detail', { Id: par.id }).then(res => {
      this.val = res.data.arr
      console.log(res.data.arr)
    })
  }
}
</script>

<style lang='stylus' scoped>
.info_val_box
  align-self flex-end
  margin-top 3vh
.title
  font-size 18px
  color #666
  margin-left 5vw
.infoVal
  font-size 14px
  color #666
  display flex
  justify-content space-between
  padding 0 10px
  align-items center
  height 5vh
.total
  color black
  font-size 24px
  color orangered
.infoContent
  margin-bottom 10px
  background white
  flex-direction column
  display flex
  justify-content space-evenly
  height 5vh
.record-box
  height 100vh
  background white
</style>
