<template>
  <div>
    <van-cell-group>
      <van-field v-model="getEdiData.personName"
                 required
                 clearable
                 label="姓名"
                 maxlength=32
                 placeholder="请输入姓名" />

      <van-field v-model="getEdiData.phone"
                 label="电话"
                 clearable
                 maxlength=32
                 placeholder="请输入电话"
                 required />
      <van-field v-model="getEdiData.address"
                 label="地址"
                 clearable
                 maxlength=32
                 placeholder="请输入地址"
                 autosize
                 required />
    </van-cell-group>
    <div class="btnBox">
      <van-button size="large"
                  type="primary"
                  @click="onSave">保存</van-button>
    </div>
    <div class="btnBox">
      <van-button size="large"
                  v-if="getEdiData.del"
                  type="danger"
                  @click='onDelete'>删除</van-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getEdiData () {
      return this.$store.getters['address/getAddressEdi']
    },
    getAddress () {
      return this.$store.getters['address/getAddress']
    }
  },
  watch: {
    getEdiData (val) {
      console.log(val)
    }
  },
  methods: {
    onSave () {
      this.$api.ccm.address.saveAddress(this.getEdiData).then(res => {
        this.$store.dispatch('address/saveAddress')
        this.$router.push({ path: '/ccm/food/address' })
      })
    },
    onDelete () {
      let par = {
        Id: this.getEdiData.id
      }
      this.$api.ccm.address.delAddress(par).then(res => {
        this.$store.dispatch('address/saveAddress')
        this.$router.push({ path: '/ccm/food/address' })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.btnBox
  padding 50px
.btnBox:nth-child(2)
  padding-bottom 0
</style>
