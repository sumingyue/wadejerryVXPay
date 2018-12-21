<template>
  <div>
    <van-address-list v-model="chosenAddressId"
                      :list="getAddress"
                      :disabled-list="getDisabledList"
                      disabled-text="以下地址超出配送范围"
                      @select="changAddress"
                      @add="onAdd"
                      @edit="onEdit" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: '1'
    }
  },
  computed: {
    getAddress () {
      return this.$store.getters['address/getAddress']
    },
    getDisabledList () {
      return this.$store.getters['address/getDisabledList']
    }
  },
  watch: {
    getAddress (val) {
      console.log(val)
    }
  },
  methods: {
    onAdd () {
      console.log('add')
      this.$router.push({ path: '/ccm/food/addressEdi' })
    },
    onEdit () {
      console.log('edi')
    },
    changAddress () {
      // this.$store
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
