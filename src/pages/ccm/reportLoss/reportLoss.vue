<template>
  <div class="report_container">
    <nav-header></nav-header>
    <div v-for="item of card"
         :key="item.cardId"
         class="report_group">
      <van-cell-group>
        <van-cell title="消费帐号"
                  size="large"
                  :value="item.cardNumber" />
        <van-cell title="卡状态"
                  size="large"
                  center
                  :value="calcStatus(item.cardStatus)" />
        <van-cell title="开户时间"
                  size="large"
                  :value="item.enableTime" />
        <van-cell title="操作"
                  size="large">
          <van-button size="small"
                      :disabled="item.cardStatus!=0"
                      slot="right-icon"
                      @click="doReport"
                      type="primary">挂失</van-button>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import navHeader from 'components/header'
export default {
  components: {
    navHeader
  },
  data () {
    return {
      card: []

    }
  },
  watch: {
    getCard (val) {
      console.log(val)
      this.card = val
    }
  },
  computed: {
    getCard () {
      return this.$store.getters['card/getCard']
    }
  },
  methods: {
    calcStatus (status) {
      let index
      switch (Number(status)) {
        case 0:
          index = '正常'
          break
        case 1:
          index = '挂失'
          break
        case 2:
          index = '其他'
          break
      }
      return index
    },
    doReport () {
      this.$api.ccm.cardLoss.cardLoss({
        'cardNumber': this.card.cardNumber
      }).then(res => {
        if (res.iRet) {
          this.$store.dispatch('card/saveCard')
        } else {
          this.$toast.fail(res.strError)
        }
      })
    }
  },
  activated () {
    this.$store.dispatch('card/saveCard')
  }
}
</script>

<style lang="stylus" scoped>
.btnBox
  padding 35px
.report_group
  margin-bottom 10px
.report_container
  height 100%
</style>
