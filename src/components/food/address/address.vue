<template>
  <div class="address-container">
    <section class="cart-address"
             @click="goAddress">
      <div class="address-item">
        <p class="title">
          <span>订单配送至</span>
        </p>
        <p class="address-detail">
          <span class="address-text">{{defaultAddress.address}}</span>
          <van-icon name="arrow" />
        </p>
        <h2 class="address-name"><span>{{defaultAddress.personName}}</span>
          <span class="phone">{{defaultAddress.phone}}</span></h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultAddress: {}
    }
  },
  methods: {
    goAddress () {
      this.$router.push({ path: '/ccm/food/address' })
    }
  },
  computed: {
    getDefaultAddress () {
      return this.$store.getters['address/getDefaultAddress']
    },
    getAddressChoose () {
      return this.$store.getters['address/getAddressChoose']
    }
  },
  watch: {
    getDefaultAddress (val) {
      this.defaultAddress = val
    },
    getAddressChoose (val) {
      this.defaultAddress = val
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
.address-name
  font-size $font-size-small !important
  line-height 1.21
  margin-bottom 1.333333vw
.address-detail span
  font-size 1.3rem
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  max-width calc(100% - 4vw)
.address-detail
  font-size $font-size-medium-x
  font-weight 700
  line-height 1.88
  overflow hidden
  display flex
  align-items center
.address-container
  background $themeColor
.title
  font-size $font-size-small-s !important
  line-height 1.21
  color hsla(0, 0%, 100%, 0.8)
.cart-address
  background-color transparent
  padding 4.266667vw 0 0
  min-height 22.133333vw
  display flex
  align-items center
  justify-content center
.address-item
  flex 0 100%
  padding 0 2.133333vw
  position relative
  color #fff
  overflow hidden
</style>
