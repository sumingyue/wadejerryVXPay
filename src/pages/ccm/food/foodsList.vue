<template>
  <!-- 点餐页面 -->
  <div>
    <van-tabs swipeable
              color='rgb(35, 149, 255)'
              sticky>
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
      <van-tab title="商家">
        {{getChooseMerch.ccmMenuName}}
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
  }
}
</script>

<style lang="stylus" scoped>
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
