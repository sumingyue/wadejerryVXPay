<template>
  <div id="user"
       class="user">
    <div class="myphoto">
      <div class="imgwrap">
        <img id="face"
             :src="photo"
             alt="用户头像">
      </div>
    </div>
    <a id="nickname"
       class="nickname">{{nickname}}</a>
    <div id="backBtn"
         @click="backUrl">
      <van-icon name="arrow-left"
                color="white"
                size="20px"
                style="margin: 12px" />
    </div>
    <div id="setBtn">
      <a href="/mobile/onecard/unbind">
        <img class="barRight"
             :src="setImg">
      </a>
    </div>
    <!--end myphoto-->
    <div class="mybox">
      <ul>
        <li v-for="item of info"
            :key="item">
          <a>
            <span>{{item}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cookie from 'common/js/cookie'
export default {
  data () {
    return {
      photo: require('assets/image/b.jpg'),
      setImg: require('assets/image/mobile/index/03.png'),
      nickname: 'Z',
      info: {
        share: 555,
        collection: 'zleste3',
        score: '张三'
      }
    }
  },
  methods: {
    backUrl () {
      this.$router.go(-1)
    }
  },
  activated () {
    debugger
    let cookieData = cookie.getAll()
    if (cookieData.lnegth === undefined) {
      this.$api.basic.getInfo().then(res => {
        const data = res.map
        cookie.set(data, 365)
        this.$nextTick(() => {
          this.photo = data.headimgurl
          this.nickname = data.userName
          this.info = {
            share: data.personCode,
            collection: data.personId,
            score: data.personName
          }
        })
      })
    } else {
      this.$nextTick(() => {
        // this.photo = require(cookieData.headimgurl)
        this.photo = cookieData.headimgurl
        this.nickname = cookieData.userName
        this.info = {
          share: cookieData.personCode,
          collection: cookieData.personId,
          score: cookieData.personName
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#user
  background-color #00a0e9
  background-image url('../assets/image/bg1.jpg')
  background-size cover
  background-repeat no-repeat
  background-position top center
  height 205px
  box-shadow inset 0 0 1000px rgba(0, 0, 0, 0.5)
#face
  width 75px
  height 75px
  border-radius 50%
.imgwrap
  width 75px
  height 75px
  border-radius 50%
  background rgba(255, 255, 255, 0.3)
  padding 3px
#setBtn
  position fixed
  right 0
  top 0
#backBtn
  position fixed
  left 0
  top 0
.barRight
  width 20px
  height 20px
  float right
  margin 12px
.myphoto
  width 75px
  margin 0 auto
  padding 30px 0 10px
.nickname
  display block
  height 45px
  line-height 45px
  text-align center
  color white
.mybox
  height 45px
  background rgba(255, 255, 255, 0.3)
  box-shadow 0 -1px 3px rgba(0, 0, 0, 0.1)
.mybox li
  float left
  width 33.333%
  padding 5px 0 0
  white-space nowrap
.mybox li a
  display block
  height 30px
  color white
  text-shadow 0 1px 1px black
  text-align center
  line-height 30px
  border-right solid 1px rgba(255, 255, 255, 0.3)
  cursor text
</style>
