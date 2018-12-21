<template>
  <div>
    <van-address-list v-model="chosenAddressId"
                      :list="getAddress"
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
      this.$store.commit('address/setAddressEdi', {})
      this.$router.push({ path: '/ccm/food/addressEdi' })
    },
    onEdit (val) {
      console.log('edi')
      this.$store.commit('address/setAddressEdi', val)
      this.$router.push({ path: '/ccm/food/addressEdi' })
    },
    changAddress (val) {
      this.$store.commit('address/setAddressChoose', val)
      this.$router.push({ path: '/ccm/food/payfood' })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
