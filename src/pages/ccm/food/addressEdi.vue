<template>
  <div>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
</style>
