<template>
  <!-- 点餐页面 -->
  <div>
    <van-tabs swipeable
              color='rgb(35, 149, 255)'
              sticky
              ref="tabs">
      <van-tab title="点餐">
        <div class="order">
          <div class="left">
            <menu-show :menuList="menuList"></menu-show>

          </div>
          <div class="right">

            <goods-show :goods-list="goodsList"
                        :menu-list="menuList"></goods-show>
          </div>
          <div class="bottom">
            <goods-active></goods-active>
          </div>
        </div>
      </van-tab>
      <van-tab title="商家"
               class="merchantBox"
               ref="merchantBox">
        <h2>
          {{getChooseMerch.ccmMenuName}}
        </h2>
        <p>
          {{getChooseMerch.note}}
        </p>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import goodsShow from 'components/food/goods'
import menuShow from 'components/food/menuList'
import goodsActive from 'components/food/goodsActive'
export default {
  components: {
    goodsShow,
    menuShow,
    goodsActive
  },
  data () {
    return {
      menuList: [],
      goodsList: []
    }
  },
  computed: {
    getGoodsData () {
      return this.$store.getters['foods/getGoodsData']
    },
    getMenuList () {
      return this.$store.getters['foods/getMenuList']
    },
    getChooseMerch () {
      return this.$store.getters['merchant/getChooseMerch']
    }
  },
  watch: {
    getGoodsData (val) {
      this.goodsList = val
    },
    getMenuList (val) {
      this.menuList = val
    }
  },
  created () {
    let merch = this.$store.getters['merchant/getChooseMerch']
    this.$store.dispatch('foods/saveGoodsList', merch)
  },
  mounted () {
    this.$nextTick(() => {
      let clientH = document.body.clientHeight
      let offsetH = this.$refs.tabs.$el.children[0].clientHeight
      this.$refs.merchantBox.$el.style.height = `${clientH - offsetH}px`
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/styles/public'
.merchantBox
  display flex
  flex-direction column
  justify-content center
  align-items center
  background white
.merchantBox h2
  font-size $font-size-large-x
  color $color-text-q
  margin-bottom 20px
.merchantBox p
  color $color-dialog-background
  margin-bottom 20px
.order
  height 100%
  background white
  display flex
.left
  // float left
  width 25%
.right
  // float right
  width 75%
  margin-left 25%
</style>
