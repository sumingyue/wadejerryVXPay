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
import md5 from 'js-md5'
// import axios from 'axios'
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
        recNum = `${this.checkBtn}.00`
      }

      this.recCCB(recNum)
    },
    recCCB (recNum) {
      let base = {
        appcode: 'whzxyy',
        shcode: '20181105162711517000099313',
        counterid: '20181105162711596000099316',
        paymachine: 'm',
        payamount: String(recNum),
        backURL: '',
        notifyURL: '',
        md5_key: '78ZqLtHiGsTfvp8vzPKAzTN4c',
        shflowid: String(new Date().getTime()) + String(Math.floor(Math.random() * Math.pow(10, 13)))
      }
      let md5Val = md5(base.appcode + base.shcode + base.payamount + base.shflowid + base.paymachine + base.backURL + base.notifyURL + base.counterid + base.md5_key)

      this.$api.ccm.recharge.rechargeCCB({
        // axios.post('/ccb/YDHLPAY/payment/pay', {
        payamount: base.payamount,
        appcode: base.appcode,
        shcode: base.shcode,
        counterid: base.counterid,
        paymachine: base.paymachine,
        showpayway: '1',
        timeout: '60',
        shflowid: base.shflowid,
        backURL: base.backURL,
        notifyURL: base.notifyURL,
        channel: 'third',
        mac: md5Val
      }).then(res => {
        console.log(res)
        console.log(res.responsep)
      }).catch(err => {
        console.log(err)
      })
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
