<template>
  <div>
    <recode-block v-for="item in info"
                  :key="item.orderTime"
                  :info="item"></recode-block>
  </div>
</template>

<script>
import recodeBlock from 'components/ccm/record/record'
export default {
  components: { recodeBlock },
  data () {
    return {
      info: []
    }
  },
  activated () {
    this.$api.ccm.recode.recodes().then(res => {
      this.info = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
