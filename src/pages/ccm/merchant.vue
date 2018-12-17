<template>
  <!-- 点餐页面 -->
  <div class="tac">
    <div class="left">
      <menu-show :menuList="menuList"></menu-show>

    </div>
    <div class="right">

      <goods-show :goodsList="goodsList"
                  :menuList="menuList"></goods-show>
    </div>
    <div class="bottom">
      <goods-active></goods-active>
    </div>
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
      menuList: [{
        'ccmMenuCode': '1',
        'ccmMenuName': '牛肉',
        'merchantId': '1'
      }, {
        'ccmMenuCode': '2',
        'ccmMenuName': '鸡肉',
        'merchantId': '1'
      }],
      goodsList: [{
        'ccmMenuCode': '1',
        'ccmMenuName': '牛肉',
        'merchantId': '1',
        'data': [{
          'wareCode': '1',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }, {
          'wareCode': '2',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }]
      }, {
        'ccmMenuCode': '3',
        'ccmMenuName': '猪肉',
        'merchantId': '1',
        'data': [{
          'wareCode': '1',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }, {
          'wareCode': '2',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }]
      }, {
        'ccmMenuCode': '2',
        'ccmMenuName': '鸡肉',
        'merchantId': '1',
        'data': [{
          'wareCode': '1',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }, {
          'wareCode': '2',
          'wareName': '鸡腿',
          'price': '9',
          'photo': '/static/image/hamburger.png',
          'wareGroup': '4个鸡腿',
          'ccmMenuId': 1
        }]
      }
      ]
    }
  },
  // created () {
  //   this.axios.post('/mobile/ccm/merchant', {}).then(res => {
  //     this.merchant = res.data
  //   })
  // },
  methods: {
    // getGoods () {
    //   this.axios.post('/mobile/ccm/diancan/result').then(res => {
    //     this.goods = res.data
    //   })
    // }
  }
}
</script>

<style lang="stylus" scoped>
.tac
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
