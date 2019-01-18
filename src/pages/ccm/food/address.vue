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
      let list = this.$store.getters['address/getAddress']
      list.map(x => {
        x.name = x.personName
        x.tel = x.phone
      })
      return list
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
      this.$store.commit('address/setAddressEdi', { del: false })
      this.$router.push({ path: '/ccm/food/addressEdi' })
    },
    onEdit (val) {
      console.log('edi')
      this.$store.commit('address/setAddressEdi', Object.assign(val, { del: true }))
      this.$router.push({ path: '/ccm/food/addressEdi' })
    },
    changAddress (val) {
      this.$store.commit('address/setAddressChoose', val)
      this.$router.push({ path: '/ccm/food/payfood' })
    }
  },
  activated () {
    this.$store.dispatch('address/saveAddress')
  }
}
</script>

<style lang="stylus" scoped>
</style>
