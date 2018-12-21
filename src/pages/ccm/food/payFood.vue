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
