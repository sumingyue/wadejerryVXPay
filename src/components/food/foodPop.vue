<template>
  <!-- 已点餐弹出组件 -->
  <div class="cellGroupDiv">
    <div class="groupTitle">
      <div class="groupTitleText"><span>已选商品</span> </div>
      <a class="groupTitleA">
        <span @click="clearAll">清空</span>
      </a>
    </div>
    <van-cell-group>
      <van-cell v-for="item of goodsList"
                v-if="item.num"
                :key="item.id"
                :title="item.name"
                size="large"
                class="cellLine">
        <div class="cellBox">
          <span class="cellSpan">￥{{item.num * item.price}}</span>
          <counter :foodInfo="item"></counter>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import counter from 'components/food/counter'
export default {
  components: { counter },
  computed: {
    goodsList () {
      return this.$store.getters['foods/getGoodsList']
    }
  },
  methods: {
    clearAll () {
      this.$store.commit('foods/setGoodsList', [])
    }
  },
  watch: {
    goodsList: {
      handler (newV, oldV) {
        // console.log(newV)
      },
      deep: true
    }
  }
}

</script>

<style lang="stylus" scoped>
.cellLine
  line-height 28px !important
.cellSpan
  flex 1
  padding-right 10px
.cellBox
  display flex
.cellGroupDiv
  padding-bottom 12.8vw
.groupTitle
  padding 0 4vw
  border-bottom 0.133333vw solid #ddd
  background-color #eceff1
  color #666
  height 10.666667vw
  display flex
  align-items center
  flex 1
  justify-content space-between
.groupTitleA
  flex none
  display flex
  align-items center
  padding-left 4vw
  color #666
  text-decoration none
  font-size 0.346667rem
  line-height 4vw
</style>
