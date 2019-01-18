<template>
  <div>
    <delivery-address></delivery-address>
    <van-card :num="item.num"
              v-for="item of getGoodsList"
              :price="item.price"
              :desc="item.desc"
              :title="item.name"
              :thumb="item.photo"
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
export default {
  components: { counter, deliveryAddress },
  computed: {
    checkDisabled () {
      return this.getAllPrice === 0
    },
    getGoodsList () {
      let arr = this.$store.getters['foods/getGoodsList']
      let filterArr = arr.filter(x => {
        return x.num > 0
      })
      console.log(arr)
      console.log(filterArr)
      return filterArr
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

      this.$api.ccm.foods.pay(data).then(res => {
        if (res.iRet) {
          this.$router.push({ path: '/ccm/recharge/paySuccess' })
        } else {
          this.$toast.fail(res.strError)
        }
      })
    }
  },
  activated () {
    this.$store.dispatch('address/saveAddress')
  }
}
</script>

<style lang="stylus" scoped>
</style>
