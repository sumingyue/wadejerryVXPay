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
      <div class="ccbPay">
        <form action="http://www.ejf365.com/YDHLPAY/payment/pay"
              ref="ccb_from">
          <input type="hidden"
                 name="payamount"
                 :value="calcRec">
          <input type="hidden"
                 name="appcode"
                 :value="base.appcode">
          <input type="hidden"
                 name="shcode"
                 :value="base.shcode">
          <input type="hidden"
                 name="counterid"
                 :value="base.counterid">
          <input type="hidden"
                 name="paymachine"
                 :value="base.paymachine">
          <input type="hidden"
                 name="showpayway"
                 :value="base.showpayway">
          <input type="hidden"
                 name="shflowid"
                 :value="setShflowid">
          <input type="hidden"
                 name="backURL"
                 :value="base.backURL">
          <input type="hidden"
                 name="notifyURL"
                 :value="base.notifyURL">
          <input type="hidden"
                 name="channel"
                 :value="base.channel">
          <input type="hidden"
                 name="mac"
                 :value="setMd5">
          <van-button square
                      size="large"
                      @click.prevent="doSubmit"
                      type="primary">充值</van-button>
        </form>
      </div>
      <div class="wxPay">
        <van-button square
                    size="large"
                    @click="doRec"
                    type="primary">wx充值</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import api from 'api/base'
import BASE from 'common/js/base'
// import axios from 'axios'
export default {
  data () {
    return {
      checkBtn: 5,
      checkInput: '',
      base: {
        appcode: 'whzxyy',
        shcode: '20181105162711517000099313',
        counterid: '20181105162711596000099316',
        paymachine: 'm',
        backURL: `${BASE.ip}${api.ccm.recharge.rechargeBack}`,
        notifyURL: `${BASE.ip}${api.ccm.recharge.rechargeNotify}`,
        md5_key: '78ZqLtHiGsTfvp8vzPKAzTN4c',
        showpayway: '1',
        channel: 'third'
      },
      shflowid: ''
    }
  },
  computed: {
    calcRec () {
      let recNum
      if (this.checkBtn === '') {
        recNum = this.checkInput
      } else {
        recNum = `${this.checkBtn}.00`
      }
      return recNum
    },
    setShflowid () {
      return String(new Date().getTime()) + String(Math.floor(Math.random() * Math.pow(10, 13)))
    },
    setMd5 () {
      let md5Val = md5(this.base.appcode + this.base.shcode + this.calcRec + this.setShflowid + this.base.paymachine + this.base.backURL + this.base.notifyURL + this.base.counterid + this.base.md5_key)
      return md5Val
    }
  },
  methods: {
    doSubmit () {
      this.$api.ccm.recharge.rechargeBackCCB({ fee: this.calcRec, shflowid: this.setShflowid }).then(res => {
        if (res.data.iRet) {
          this.$refs.ccb_from.submit()
        } else {
          this.$toast(res.data.strError)
        }
      })
      return false
    },
    checkThis (e) {
      this.checkBtn = e.target.innerText
    },
    doRec () {
      let that = this
      this.$api.ccm.recharge.recharge({ totalFee: Number(this.calcRec) }).then(result => {
        function onBridgeReady () {
          WeixinJSBridge.invoke(
            'getBrandWCPayRequest', result.data.data,
            function (res) {
              if (res.err_msg === 'get_brand_wcpay_request:ok') {
                that.$router.push({ path: '/ccm/recharge/paySuccess' })
              }
            }
          )
        }

        if (typeof WeixinJSBridge === 'undefined') {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
          }
        } else {
          onBridgeReady()
        }
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
