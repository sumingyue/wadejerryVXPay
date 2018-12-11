<template>
  <div class="tac">
    <mu-row>
      <mu-col span='3'
              class="menuBox">
        <menu-show :menuList="menuList"></menu-show>
      </mu-col>
      <mu-col span='9'>
        <goods-show :goodsList="goodsList"
                    :menuList="menuList"></goods-show>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import goodsShow from 'components/food/goods'
import menuShow from 'components/food/menuList'
export default {
  components: {
    goodsShow,
    menuShow
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
</style>
