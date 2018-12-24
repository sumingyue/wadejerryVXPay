<template>
  <!-- <van-list v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"> -->
  <van-cell-group>
    <van-cell v-for="item in list"
              :key="item.merchantId"
              @click="chooseMerch(item)"
              is-link>
      <template>
        <h2 class="title">{{item.ccmMenuName}}</h2>
        <p class="note">{{item.note}}</p>
      </template>
    </van-cell>
  </van-cell-group>
  <!-- </van-list> -->
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
@import '~common/styles/public'
.title
  font-size $font-size-medium-x
.note
  font-size $font-size-small
  color $color-dialog-background
</style>
