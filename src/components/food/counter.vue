<template>
  <!-- 计数按钮组件 -->
  <div class="content">
    <span v-if="buyNum"
          class="ifContent">
      <span @click='minusNum'>
        <van-icon name="minus"
                  color='#2396ff'
                  class-prefix="my-icon"
                  size='25px' />
      </span>
      <span class="numText">{{buyNum}}</span>
    </span>
    <span @click='addNum'>
      <van-icon name="add"
                color='#2396ff'
                class-prefix="my-icon"
                size='25px' />
    </span>
  </div>
</template>

<script>

export default {
  props: ['foodInfo'],
  data () {
    return {
      buyNum: this.foodInfo.num || 0,
      buyPrice: 0,
      foodId: this.foodInfo.id || this.foodInfo.wareCode
    }
  },
  computed: {
    listenGoods () {
      return this.$store.getters['foods/getGoodsList']
    }
  },
  watch: {
    listenGoods: {
      handler (newV, oldV) {
        let index = 0
        for (const item of newV) {
          if (item.id === this.foodId) {
            this.buyNum = item.num
          } else {
            index++
          }
        }
        if (index === newV.length) {
          this.buyNum = 0
        }
      },
      deep: true
    }
  },
  methods: {
    addNum () {
      let goodsList = this.$store.getters['foods/getGoodsList']
      let index = 0
      goodsList.map(item => {
        if (item.id === this.foodId) {
          item.num++
        } else {
          index++
        }
      })

      if (index === goodsList.length) {
        goodsList.push({
          id: this.foodInfo.wareCode,
          num: 1,
          name: this.foodInfo.wareName,
          price: this.foodInfo.price,
          desc: this.foodInfo.wareGroup,
          photo: this.foodInfo.photo,
          merchantId: this.foodInfo.ccmMenuId
        })
      }

      this.$store.commit('foods/setGoodsList', goodsList)
    },
    minusNum () {
      let goodsList = this.$store.getters['foods/getGoodsList']

      goodsList.map(item => {
        if (item.id === this.foodId) {
          item.num--
        }
      })

      this.$store.commit('foods/setGoodsList', goodsList)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  display flex
  justify-content flex-end
.ifContent
  display flex
  align-items center
.numText
  margin 0 8px
  font-size 14px
</style>
