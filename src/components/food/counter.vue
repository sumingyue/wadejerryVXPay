<template>
  <!-- 计数按钮组件 -->
  <div class="content">
    <span v-if="buyNum"
          class="ifContent">
      <span @click='minusNum'>
        <!-- <x-icon type="ios-minus"
                size="30"></x-icon> -->
        <van-icon name="minus"
                  color='#2396ff'
                  class-prefix="my-icon"
                  size='25px' />
      </span>
      <span class="numText">{{buyNum}}</span>
    </span>
    <span @click='addNum'>
      <!-- <x-icon type="ios-plus"
              size="30"></x-icon> -->
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
      buyNum: 0,
      buyPrice: 0
    }
  },
  methods: {
    addNum () {
      this.buyNum++
      let allPrice = this.$store.getters['foods/getAllPirce']
      allPrice += Number(this.foodInfo.price)
      this.$store.commit('foods/setAllPrice', allPrice)

      this.buyPrice = this.buyNum * this.foodInfo.price
    },
    minusNum () {
      this.buyNum--
      let allPrice = this.$store.getters['foods/getAllPirce']
      allPrice -= Number(this.foodInfo.price)
      this.$store.commit('foods/setAllPrice', allPrice)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  display flex
  justify-content flex-end
  padding-right 10px
.ifContent
  display flex
  align-items center
.numText
  margin 0 5px
</style>
