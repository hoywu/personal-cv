<script setup lang="ts">
defineProps<{
  text?: string
}>();
</script>

<template>
  <div class="icon-text-box" v-if="text">
    <el-icon>
      <slot></slot>
    </el-icon>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.icon-text-box {
  font-size: var(--cv-icon-text-size);
  color: var(--neutral-700);
  display: flex;
  align-items: center;
  gap: 3px;
}
</style>
