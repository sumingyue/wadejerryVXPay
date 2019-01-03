<template>
  <van-cell-group>
    <van-cell v-for="item in list"
              :key="item.merchantId"
              @click="chooseMerch(item)"
              is-link>
      <template>
        <h2 class="title">{{item.merchantName}}</h2>
        <p class="note">{{item.note}}</p>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      length: 10
    }
  },
  computed: {
    getMerch () {
      return this.$store.getters['merchant/getMerchant']
    }
  },
  watch: {
    getMerch (val) {
      if (val.length > 1) {
        this.list = val.slice(0, this.length)
      } else if (val.length === 1) {
        this.chooseMerch(val[0])
      } else {
        this.$dialog.alert({
          message: '当前时段没有商户'
        }).then(() => {
          this.$router.push({ path: '/ccm' })
        })
      }
    }
  },
  methods: {
    chooseMerch (par) {
      this.$store.commit('merchant/setChooseMerch', par)
      this.$router.push({ path: 'foodsList' })
    }
  },
  activated () {
    this.$store.dispatch('merchant/saveMerchantList')
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
.title
  font-size $font-size-medium-x
.note
  font-size $font-size-small
  color $color-dialog-background
</style>
