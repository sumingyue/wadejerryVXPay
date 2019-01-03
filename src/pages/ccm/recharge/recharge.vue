<template>
  <div class="recBox">
    <van-row type="flex"
             justify="space-around"
             class="recBtnBox">
      <van-col span="6">
        <van-button :plain="!(checkBtn==5)"
                    @click="checkThis"
                    type="primary">5</van-button>
      </van-col>
      <van-col span="6">
        <van-button :plain="!(checkBtn==10)"
                    @click="checkThis"
                    type="primary">10</van-button>
      </van-col>
      <van-col span="6">
        <van-button :plain="!(checkBtn==30)"
                    @click="checkThis"
                    type="primary">30</van-button>
      </van-col>
    </van-row>
    <van-row type="flex"
             justify="space-around"
             class="recBtnBox">
      <van-col span="6">
        <van-button :plain="!(checkBtn==50)"
                    @click="checkThis"
                    type="primary">50</van-button>
      </van-col>
      <van-col span="6">
        <van-button :plain="!(checkBtn==100)"
                    @click="checkThis"
                    type="primary">100</van-button>
      </van-col>
      <van-col span="6">
        <van-field v-model="checkInput"
                   @click="checkThis"
                   type="number"
                   placeholder="其他"
                   class="checkInput" />
      </van-col>
    </van-row>
    <div class="btnBox">
      <van-button square
                  size="large"
                  @click="doRec"
                  type="primary">充值</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkBtn: 5,
      checkInput: ''
    }
  },
  methods: {
    checkThis (e) {
      this.checkBtn = e.target.innerText
    },
    doRec () {
      let recNum
      if (this.checkBtn === '') {
        recNum = this.checkInput
      } else {
        recNum = this.checkBtn
      }

      this.$api.recharge.recharge({
        totalFee: recNum
      }).then()

      console.log(recNum)
    }
  }
}
</script>

<style lang="stylus" scoped>
.btnBox
  padding 35px
.recBox
  background white
  height 100vh
  display flex
  flex-direction column
  justify-content space-evenly
.recBtnBox button
  width 100%
.checkInput
  border-bottom 1px solid #4b0
</style>
