<template>
  <!-- 点餐合计组件 -->
  <div>
    <van-popup position="bottom"
               v-model="showPop">
      <food-pop></food-pop>
    </van-popup>
    <div class="container">
      <span class="shopCar"
            :class="{rubberBand: rubberBand}"
            @animationend="rubberBand = false"
            @click="clickShopCar"
            ref="shopCar">
        <van-icon name="cart"
                  :info="goodsNum"
                  color='white'
                  class="carIcon"
                  size="23px" />
        <!-- <span class="goodsNum">1</span> -->
      </span>
      <div class="content">
        <p class="price">
          <span>￥{{allPrice}}</span>
        </p>
        <p class="note">另需配送费3.6元</p>
      </div>
      <router-link role="button"
                   to="payfood"
                   class="goPay"><span>去结算</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import foodPop from 'components/food/foodPop'
export default {
  components: { foodPop },
  data () {
    return {
      allPrice: 0,
      goodsNum: 0,
      rubberBand: false,
      showPop: false
    }
  },
  computed: {
    listenFoods () {
      return this.$store.getters['foods/getGoodsList']
    }
  },
  methods: {
    clickShopCar () {
      this.showPop = true
    }
  },
  watch: {
    listenFoods: {
      handler (newValue, oldValue) {
        this.goodsNum = this.$store.getters['foods/getNum']
        this.allPrice = this.$store.getters['foods/getAllPrice']

        this.$nextTick(() => {
          this.rubberBand = true
        })
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
.container
  z-index 9999
  position fixed
  right 0
  bottom 0
  left 0
  display flex
  align-items center
  padding-left 21.066667vw
  background-color rgba(61, 61, 63, 0.9)
  height 12.8vw
.shopCar
  position absolute
  left 3.2vw
  bottom 2vw
  width 13.333333vw
  height 13.333333vw
  box-sizing border-box
  border-radius 100%
  background-color #3190e8
  border 1.333333vw solid #444
  box-shadow 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1)
  will-change transform
.carIcon
  top 9px
  left 9px
// .goodsNum
// position absolute
// right -1.2vw
// top -1.333333vw
// line-height 1
// background-image linear-gradient(-90deg, #ff7416, #ff3c15 98%)
// color #fff
// border-radius 3.2vw
// padding 0.533333vw 1.333333vw
// font-size 0.266667rem
.content
  flex 1
.price
  font-size 1.2rem
  line-height normal
  color #fff
.note
  color #999
  font-size $font-size-small-s
.goPay
  height 100%
  width 28vw
  background-color #38ca73
  color #fff
  text-align center
  text-decoration none
  font-size 1rem
  font-weight 700
  user-select none
  line-height 12.8vw
</style>
