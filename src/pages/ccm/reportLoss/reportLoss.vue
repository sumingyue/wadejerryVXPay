<template>
  <div>
    <nav-header></nav-header>
    <van-cell-group>
      <van-cell title="消费帐号"
                size="large"
                :value="card.cardNumber" />
      <van-cell title="卡状态"
                size="large"
                center
                :value="status" />
      <van-cell title="开户时间"
                size="large"
                :value="card.enableTime" />
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
  data () {
    return {
      card: {
        cardStatus: '',
        cardNumber: '',
        enableTime: ''
      }

    }
  },
  watch: {
    getCard (val) {
      this.card = val
    }
  },
  computed: {
    getCard () {
      return this.$store.getters['card/getCard'][0]
    },
    status () {
      let index
      switch (Number(this.card.cardStatus)) {
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
        'cardNumber': this.card.cardNumber
      }).then(res => {
        if (res.success) {
          this.$store.dispatch('card/saveCard')
        } else {
          this.$toast.fail(res.msg)
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
