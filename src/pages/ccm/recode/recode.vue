<template>
  <div>
    <recode-block v-for="item in info"
                  :key="item.orderTime"
                  :info="item"></recode-block>
  </div>
</template>

<script>
import recodeBlock from 'components/common/record'
export default {
  components: { recodeBlock },
  data () {
    return {
      info: []
    }
  },
  activated () {
    this.$api.ccm.recode.recode().then(res => {
      console.log(res.data)
      this.info = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
