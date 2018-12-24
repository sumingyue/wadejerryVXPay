<template>
  <van-list v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
    <van-cell v-for="item in list"
              :key="item.merchantId"
              @click="chooseMerch(item)">
      <template>
        <p>{{item.ccmMenuName}}</p>
        <p>{{item.ccmMenuName}}</p>
        <p>{{item.ccmMenuName}}</p>
        <p>{{item.ccmMenuName}}</p>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      length: 8
    }
  },
  computed: {
    getMerch () {
      return this.$store.getters['merchant/getMerchant']
    }
  },
  watch: {
    getMerch (val) {
      this.list = val.slice(0, this.length)
    }
  },
  methods: {
    onLoad () {
      let thisLength = this.list.length
      console.log(thisLength)
      console.log(this.getMerch)
      this.list = [...this.list, ...(this.getMerch.slice(thisLength, thisLength + this.length))]

      this.loading = false

      //   if (this.list.length === this.getMerch.length) {
      //     this.finished = true
      //   }
    },
    chooseMerch (par) {
      this.$store.commit('merchant/setChooseMerch', par)
      this.$router.push({ path: 'foodsList' })
    }
  },
  created () {
    this.$store.dispatch('merchant/saveMerchantList')
  }
}
</script>

<style lang="stylus" scoped>
</style>
