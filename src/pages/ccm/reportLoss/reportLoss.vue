<template>
  <div>
    <nav-header></nav-header>
    <van-cell-group>
      <van-cell title="消费帐号"
                size="large"
                :value="getCard.cardNumber" />
      <van-cell title="卡状态"
                size="large"
                center
                :value="status" />
      <van-cell title="开户时间"
                size="large"
                :value="getCard.enableTime" />
    </van-cell-group>

    <div class="btnBox">
      <van-button square
                  size="large"
                  @click="doReport"
                  type="primary">挂失</van-button>
    </div>
  </div>
</template>

<script>
import navHeader from 'components/header'
export default {
  components: {
    navHeader
  },
  computed: {
    getCard () {
      return this.$store.getters['card/getCard'][0]
    },
    status () {
      let index
      switch (Number(this.getCard.cardStatus)) {
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
    }
  },
  methods: {
    doReport () {
      this.$api.ccm.cardLoss.cardLoss({
        cardNumber: this.getCard.cardNumber
      }).then(res => {
        if (res.success) {
          this.$store.dispatch('card/saveCard')
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
</style>
