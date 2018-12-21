<template>
  <div>
    <van-cell-group>
      <van-field v-model="addressInfo.name"
                 required
                 clearable
                 label="姓名"
                 placeholder="请输入姓名" />

      <van-field v-model="addressInfo.tel"
                 label="电话"
                 clearable
                 placeholder="请输入电话"
                 required />
      <van-field v-model="addressInfo.address"
                 label="地址"
                 clearable
                 placeholder="请输入地址"
                 autosize
                 required />
    </van-cell-group>
    <div class="btnBox">
      <van-button size="large"
                  type="primary">添加</van-button>
    </div>
    <div class="btnBox">
      <van-button size="large"
                  type="danger">删除</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressInfo: {}
    }
  },
  computed: {
    getEdiData () {
      return this.$store.getters['address/getAddressEdi']
    }
  },
  watch: {
    getEdiData (val) {
      console.log(val)
      this.addressInfo = val
    }
  },
  methods: {
    onSave (res) {
      console.log(res)
    },
    onDelete (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
.btnBox
  padding 25px
.btnBox:nth-child(2)
  padding-bottom 0
</style>
