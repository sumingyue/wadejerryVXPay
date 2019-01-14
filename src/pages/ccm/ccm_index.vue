<template>
  <div>
    <nav-header></nav-header>
    <div class="submenu">
      <menu-list :data="menuList"></menu-list>
    </div>
  </div>
</template>

<script>
import menuList from 'components/menuList'
import navHeader from 'components/header'

export default {
  components: {
    menuList,
    navHeader
  },
  data () {
    return {
      menuList: [{
        title: '消费充值',
        // path: 'ccm/recharge',
        path: 'carfeeQuery',
        imgSrc: require('assets/image/mobile/ccm_1.jpg')
      }, {
        title: '餐卡挂失',
        path: 'ccm/reportLoss',
        imgSrc: require('assets/image/mobile/ccm_2.jpg')
      }, {
        title: '餐厅订餐',
        path: 'ccm/food/merchant',
        imgSrc: require('assets/image/mobile/ccm_3.jpg')
      }, {
        title: '消费记录',
        path: 'ccm/recode',
        imgSrc: require('assets/image/mobile/ccm_4.jpg')
      }]
    }
  }
}
</script>
