<template>
  <div>
    <nav-header></nav-header>
    <van-cell-group>
      <van-cell title="消费帐号"
                size="large"
                value="内容" />
      <van-cell title="卡状态"
                size="large"
                center
                value="正常" />
      <van-cell title="开户时间"
                size="large"
                value="内容"
                label="描述信息" />
    </van-cell-group>

    <div class="btnBox">
      <van-button square
                  size="large"
                  @click="doReport"
                  type="primary">挂失</van-button>
    </div>
  </div>
</template>

<script>
import navHeader from 'components/header'
export default {
  components: {
    navHeader
  },
  methods: {
    doReport () {
      console.log('asdf')
    }
  }
}
</script>

<style lang="stylus" scoped>
.btnBox
  padding 35px
</style>
