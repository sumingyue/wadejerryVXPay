<template>
  <div class="check-box">
    <div class="about">
      <div class="about-box">
        <h3>人员编号</h3>
        <span>{{personData.personCode}}</span>
      </div>
      <div class="about-box">
        <h3>人员姓名</h3>
        <span>{{personData.personName}}</span>
      </div>
      <div class="about-box">
        <h3>部门名称</h3>
        <span>{{personData.deptName}}</span>
      </div>
      <div class="about-box">
        <h3>账户余额</h3>
        <span>{{personData.balance}}</span>
      </div>
    </div>
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
                ref="ccb_from"
                id="ccb_from">
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
            <!-- <input type="hidden"
                   name="shflowid"
                   :value="setShflowid"> -->
            <input type="hidden"
                   name="shflowid"
                   :value="base.shflowid">
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
                   :value="base.mac">
            <!-- <input type="hidden"
                   name="mac"
                   :value="setMd5"> -->
            <van-button square
                        size="large"
                        @click.prevent="doSubmit"
                        type="primary">充值</van-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BASE from 'common/js/base'
// import md5 from 'js-md5'
// import api from 'api/base'
export default {
  data () {
    return {
      checkBtn: 5,
      checkInput: '',
      base: {
        appcode: '',
        shcode: '',
        counterid: '',
        paymachine: '',
        backURL: '',
        notifyURL: '',
        md5_key: '',
        showpayway: '',
        channel: '',
        mac: '',
        shflowid: ''
      },
      // base: {
      //   appcode: 'whzxyy',
      //   shcode: '20181105162711517000099313',
      //   counterid: '20181105162711596000099316',
      //   paymachine: 'm',
      //   backURL: `${BASE.ip}${api.ccm.recharge.rechargeBack}`,
      //   notifyURL: `${BASE.ip}${api.ccm.recharge.rechargeNotify}`,
      //   md5_key: '78ZqLtHiGsTfvp8vzPKAzTN4c',
      //   showpayway: '1',
      //   channel: 'third'
      // },
      shflowid: '',
      personData: ''
    }
  },
  computed: {
    calcRec () {
      let recNum
      if (this.checkBtn === '') {
        let num = this.checkInput
        if (Number.isInteger(num)) {
          recNum = `${this.checkInput}.00`
        } else {
          recNum = Number(this.checkInput).toFixed(2)
        }
      } else {
        recNum = `${this.checkBtn}.00`
      }
      return recNum
    }
    // setShflowid () {
    //   return String(new Date().getTime()) + String(Math.floor(Math.random() * Math.pow(10, 13)))
    // },
    // setMd5 () {
    //   let md5Val = md5(this.base.appcode + this.base.shcode + this.calcRec + this.setShflowid + this.base.paymachine + this.base.backURL + this.base.notifyURL + this.base.counterid + this.base.md5_key)
    //   return md5Val
    // }
  },
  methods: {
    doSubmit () {
      if (this.calcRec === '' || this.calcRec === '0.00') {
        this.$toast('请检查输入金额')
        return
      }
      this.$api.ccm.recharge.rechargeBackCCB({ fee: this.calcRec, personId: this.personData.personId }).then(res => {
        if (res.iRet) {
          this.base = res.data
          this.$nextTick(() => {
            this.$refs.ccb_from.submit()
          })
        } else {
          this.$toast(res.strError)
        }
      })
      return false
    },
    checkThis (e) {
      this.checkBtn = e.target.innerText
    }
  },
  activated () {
    this.personData = JSON.parse(window.localStorage.payccb_person_data)
  }
}
</script>

<style lang="stylus" scoped>
.about
  display flex
  justify-content space-between
  align-items center
  flex-direction column
  // height 20vh
  // margin 0 10vw
  // padding-top 5vw
  height 10rem
  padding-top 2rem
  margin 0 2rem
.about-box
  display flex
  justify-content space-between
  align-items center
  width 100%
.btnBox
  padding 35px
.recBox
  background white
  height 25rem
  display flex
  flex-direction column
  justify-content space-evenly
.recBtnBox button
  width 100%
.checkInput
  border-bottom 1px solid #4b0
.check-box
  // height 100vh
  height 100%
  background white
</style>
