<template>
  <div class="home">
    <van-field v-model="phoneNum"
               label="账户"
               placeholder="请输入手机号或身份证以进行绑定"
               :error-message='phoneErr' />
    <div class="btn-box">
      <van-button size="large"
                  square
                  @click.prevent="checkPhone"
                  type="primary">确定</van-button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneNum: '',
      phoneErr: ''
    }
  },
  methods: {
    checkPhone () {
      // let baseUrl = 'https://www.easy-mock.com/mock/5c08f24de1c4a705638a802c/wadejerryVXPay'
      let baseUrl = ''
      let idCardRE = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
      let phoneCardRE = /^1[34578]\d{9}$/
      if (!(phoneCardRE.test(this.phoneNum)) && !(idCardRE.test(this.phoneNum))) {
        this.phoneErr = '账户格式错误'
        throw Error('账户格式错误')
      } else {
        this.phoneErr = ''
      }
      this.$axios.post(baseUrl + '/weixin/query/personCode', {
        personCode: this.phoneNum
      }).then(res => {
        if (res.success) {
          this.$router.push({
            name: 'pay_ccb_check',
            params: res.onecardPersonDto
          })
          window.localStorage.payccb_person_data = JSON.stringify(res.onecardPersonDto)
        } else {
          alert(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-top 20vh
.btn-box
  padding 35px
</style>
