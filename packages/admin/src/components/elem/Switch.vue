<script setup lang="ts">
const autoReload = defineModel<boolean>();

defineProps({
  text: {
    type: String,
    default: '自动刷新',
  },
});
</script>

<template>
  <div class="switch-box">
    <el-switch v-model="autoReload" />
    <el-text size="small">{{ text }}</el-text>
  </div>
</template>

<style scoped>
.switch-box {
  display: flex;
  align-items: center;
  gap: 3px;
}

.switch-box :deep(.el-switch) {
  height: initial;
}
</style>
