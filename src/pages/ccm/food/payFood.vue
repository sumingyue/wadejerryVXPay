<template>
  <div>
    <delivery-address></delivery-address>
    <van-card :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.name"
              :thumb="item.photo"
              v-for="item of getGoodsList"
              :key="item.id">
      <div slot="footer">
        <counter :foodInfo="item"></counter>
      </div>
    </van-card>
    <van-submit-bar :price="getAllPrice"
                    :disabled="checkDisabled"
                    button-text="提交订单"
                    @submit="onSubmit" />
  </div>
</template>

<script>
import counter from 'components/food/counter'
import deliveryAddress from 'components/food/address/address'
import api from 'api'
export default {
  components: { counter, deliveryAddress },
  computed: {
    checkDisabled () {
      return this.getAllPrice === 0
    },
    getGoodsList () {
      return this.$store.getters['foods/getGoodsList']
    },
    getAllPrice () {
      return (this.$store.getters['foods/getAllPrice']) * 100
    },
    getAddress () {
      return this.$store.getters['foods/getAddress']
    }
  },
  methods: {
    onSubmit () {
      let merchant = this.$store.getters['merchant/getChooseMerch']
      let data = {}
      data.merchantId = merchant.merchantId
      data.totalAmout = this.$store.getters['foods/getAllPrice']
      data.number = this.$store.getters['foods/getNum']
      data.wareCodes = this.$store.getters['foods/getParData']

      console.log(data)
      api.foods.pay().then(result => {
        function onBridgeReady () {
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', result,
            function (res) {
              alert(JSON.stringify(res))
              if (res.err_msg === 'get_brand_wcpay_request:ok') {
                this.$router.push({ path: '/ccm/record' })
              }
            }
          )
        }
        if (typeof WeixinJSBridge === 'undefined') {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
          }
        } else {
          onBridgeReady()
        }
      })
      this.$toast.success('submit')
    }
  },
  created () {
    this.$store.dispatch('address/saveAddress')
  }
}
</script>

<style lang="stylus" scoped>
</style>
