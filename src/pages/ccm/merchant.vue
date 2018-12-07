<template>
  <div>
    <el-row class="tac">
      <el-col :span="6">
        <el-menu default-active="1" class="el-menu">
          <el-menu-item-group title="分组一">
            <el-menu-item index="1">选项1</el-menu-item>
            <el-menu-item index="2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created () {
    this.axios.post('/mobile/ccm/merchant', {}).then()
  }
}
</script>

<style lang="stylus" scoped>
.tac
  height 100%
</style>
