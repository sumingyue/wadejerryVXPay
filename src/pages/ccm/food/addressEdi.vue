<template>
  <div>
    <van-cell-group>
      <van-field v-model="getEdiData.name"
                 required
                 clearable
                 label="姓名"
                 placeholder="请输入姓名" />

      <van-field v-model="getEdiData.tel"
                 label="电话"
                 clearable
                 placeholder="请输入电话"
                 required />
      <van-field v-model="getEdiData.address"
                 label="地址"
                 clearable
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
      this.$api.ccm.address.saveAddress(this.getAddress).then(res => {
        this.$store.dispatch('address/saveAddress')
      })
    },
    onDelete () {
      let par = {
        Id: this.getEdiData.id
      }
      this.$api.ccm.address.delAddress(par).then(res => {
        this.$store.dispatch('address/saveAddress')
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
