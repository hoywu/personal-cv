<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <el-popover v-model:visible="visible"
              :hide-after="0"
              :teleported="false"
              placement="bottom"
              transition="none"
              trigger="click"
              popper-style="padding: 5px 0 5px 0 !important;">

    <template #reference>
      <slot name="reference"></slot>
    </template>

    <div id="popover-body" @click="visible = false">
      <slot></slot>
    </div>

  </el-popover>
</template>

<style scoped>
#popover-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#popover-body>:slotted(*) {
  width: 100%;
}
</style>
