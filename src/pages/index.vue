<template>
  <div>
    <nav-header></nav-header>
    <div class="dmenu">
      <ul>
        <li v-for="item of menuList" :key="item.title">
          <router-link :to="{ path: item.path }">
            <img :src="item.img">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navHeader from 'components/header'
export default {
  components: {
    navHeader
  },
  data () {
    return {
      menuList: [{
        img: require('assets/image/mobile/ccm.jpg'),
        title: '消费管理',
        path: 'ccm'
      }, {
        img: require('assets/image/mobile/rvm.jpg'),
        title: '访客管理'
      }, {
        img: require('assets/image/mobile/wam.jpg'),
        title: '考勤管理'
      }, {
        img: require('assets/image/mobile/acm.jpg'),
        title: '门禁管理'
      }, {
        img: require('assets/image/mobile/pfm.jpg'),
        title: '车辆管理'
      }, {
        img: require('assets/image/mobile/idm.jpg'),
        title: '信息发布'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.dmenu
  background-color rgb(255, 255, 255)
  margin 20px 10px
  border-left 1px solid #ddd
  border-top 1px solid #ddd
  overflow hidden

.dmenu ul li a
  display block
  width 33%
  text-align center
  color #666
  float left
  padding 15px 0
  border-bottom 1px solid #ddd
  border-right 1px solid #ddd
  position relative

.dmenu ul
  // display flex
  // flex-wrap wrap

.dmenu ul li
  // flex 0 0 30%
  // display flex
  // justify-content center

.dmenu ul li img
  width 50px
  height 50px
  margin-bottom 5px
</style>
