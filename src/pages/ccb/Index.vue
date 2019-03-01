<template>
  <div class="home">
    <van-field v-model="phoneNum"
               label="手机号"
               placeholder="请输入手机号以进行绑定"
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
      if (!(/^1[34578]\d{9}$/.test(this.phoneNum))) {
        this.phoneErr = '手机号格式错误'
        return
      }
      this.$axios.post(baseUrl + '/weixin/query/personCode', {
        personCode: this.phoneNum
      }).then(data => {
        let res = data.data
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
