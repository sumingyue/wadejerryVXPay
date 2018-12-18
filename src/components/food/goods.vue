<template>
  <!-- 商品目录组件 -->
  <div class="foodContainer">
    <dl v-for="(item) of menuList"
        :key="item.ccmMenuId"
        class="menu"
        :id='`foodDl${item.ccmMenuId}`'>
      <dt class="menuDt">
        <span>
          {{item.ccmMenuName}}
        </span>
      </dt>
      <dd class="menuitem"
          v-for="ite of filterList(item.ccmMenuId)"
          :key="ite.wareCode">
        <div class="foodBox">
          <span class="foodLogo">
            <img :src="ite.photo"
                 :alt="ite.wareName">
          </span>
          <section class="foodInfo">
            <p class="foodName">
              <span class="foodNameText">{{ite.wareName}}</span>
            </p>
            <p class="doosDesc">{{ite.wareGroup}}</p>

            <div class="priceBox">
              <span class="itePrice">￥{{ite.price}}</span>

              <counter :foodInfo='ite'></counter>
            </div>

          </section>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import counter from 'components/food/counter'

export default {
  components: { counter },
  props: ['goodsList', 'menuList'],
  data () {
    return {
      num: 1
    }
  },
  methods: {
    filterList (id) {
      let valArr = this.goodsList.filter(x => {
        return x.ccmMenuId === id
      })
      return valArr
    }
  },
  watch: {
    goodsList (newV, oldV) {
      // console.log(oldV)
      // console.log(newV)
    }
  }
}
</script>

<style lang="stylus" scoped>
imgWidth = 25.333333vw
.itePrice
  color #ff5339
.priceBox
  display flex
  justify-content space-between
  align-items center
.foodContainer
  overflow-y auto
  -webkit-overflow-scrolling touch
  // height 100vh
  height 100%
  padding-bottom 10.666667vw
  position relative
.menuDt
  position relative
  margin-left 2.666667vw
  padding 2vw 8vw 2vw 0
.menuDt span
  -webkit-flex 1
  flex 1
  color #999
  font-size 0.266667rem
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
.menuitem
  position relative
  margin 0
  min-height 30.666667vw
  padding-left 2.666667vw
.foodBox
  padding 2.666667vw 0
  margin-bottom 0.133333vw
  display -webkit-flex
  display flex
  min-height 27.466667vw
  position relative
.foodLogo
  width imgWidth
  height imgWidth
  -webkit-flex none
  flex none
  margin-right 2.666667vw
  position relative
.foodLogo img
  width 100%
  border-radius 0.533333vw
.foodInfo
  -webkit-flex 1
  flex 1
  position relative
  padding-bottom 6.666667vw
  padding-right 4vw
  display flex
  flex-direction column
  justify-content space-between
  height imgWidth
.foodName
  position relative
  padding-right 4vw
  display flex
  align-items start
.foodNameText
  font-weight 700
  overflow hidden
  font-size 0.4rem
  white-space nowrap
  width 40vw
  text-overflow ellipsis
.doosDesc
  margin 1.333333vw 0
  font-size 0.266667rem
  color #999
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  width 42.666667vw
</style>
