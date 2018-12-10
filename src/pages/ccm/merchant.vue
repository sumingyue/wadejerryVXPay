<template>
  <div>
    <mu-container class="tac">
      <mu-row>
        <mu-col span='3'>
          <div class="menuList">
            <ul>
              <li v-for="item of merchant"
                  :key="item.ccmMenuCode">
                {{item.ccmMenuName}}
              </li>
            </ul>
          </div>
        </mu-col>
        <mu-col span='4'>
          <good-show :goodsData='goods'></good-show>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import goodShow from 'components/goods'
export default {
  components: {
    goodShow
  },
  data () {
    return {
      merchant: [{
        'ccmMenuCode': '1',
        'ccmMenuName': '鸡腿',
        'merchantId': '1'
      }, {
        'ccmMenuCode': '2',
        'ccmMenuName': '鸡腿',
        'merchantId': '1'
      }],
      goods: [{
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
  },
  created () {
    this.axios.post('/mobile/ccm/merchant', {}).then(res => {
      this.merchant = res.data
    })
  },
  methods: {
    getGoods () {
      this.axios.post('/mobile/ccm/diancan/result').then(res => {
        this.goods = res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.tac
  height 100%
  background white
.menuList
  overflow-y auto
  height 100%
  background-color #f8f8f8
  padding-bottom 10.666667vw
</style>
