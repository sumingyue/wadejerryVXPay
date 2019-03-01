<template>
  <div>
    <nav-bar>消费记录</nav-bar>
    <div class="datepick-box">
      <div class="date-box"
           @click="showPick = !showPick">{{date}}
        <van-icon name="arrow-down"
                  size="16px"
                  style="margin-left: 10px" />
      </div>
      <div class="total-box">合计{{total}}</div>
      <van-popup v-model="showPick"
                 position="bottom">
        <van-datetime-picker v-model="currentDate"
                             type="year-month"
                             @confirm="changePicker" />
      </van-popup>
    </div>
    <recode-block v-for="item in info"
                  :key="item.orderTime"
                  :info="item"></recode-block>
  </div>
</template>

<script>
import recodeBlock from 'components/ccm/record/record'
import navBar from 'components/navbar'

export default {
  components: { recodeBlock, navBar },
  data () {
    return {
      info: [],
      showPick: false,
      currentDate: new Date(),
      date: ''
    }
  },
  computed: {
    total () {
      let num = 0
      for (const item of this.info) {
        num += Number(item.totalFee)
      }
      return num
    }
  },
  methods: {
    changePicker(val) {
      let date = this.$moment(val).format('YYYY-MM-DD')
      let month = date.slice(5, 6) === '0' ? date.slice(6, 7) : date.slice(5, 7)
      this.date = `${date.slice(0, 4)}年${month}月`

      this.$api.ccm.recode.recodes({
        year: date.slice(0, 4),
        month
      }).then(res => {
        this.info = res.data
        this.showPick = false
      })
    }
  },
  activated () {
    let date = new Date()
    this.$api.ccm.recode.recodes({
      year: date.getUTCFullYear(),
      month: date.getMonth() + 1
    }).then(res => {
      this.info = res.data
    })

    this.date = `${date.getUTCFullYear()}年${date.getMonth() + 1}月`
  }
}
</script>

<style lang="stylus" scoped>
.date-box
  display flex
  align-items center
  margin-bottom 5px
.datepick-box
  color #333
  padding 10px
.total-box
  color #999
  font-size 0.8rem
</style>
