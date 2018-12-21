<template>
  <div>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      @save="onSave"
                      @delete="onDelete" />
  </div>
</template>

<script>
export default {
  computed: {
    areaList () {
      return this.$store.getters['address/getAreaList']
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
</style>
