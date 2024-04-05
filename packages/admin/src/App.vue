<script setup lang="ts">
import p, { save } from '@/data/personalization';

// 自动保存个性化数据
watch(p, (value) => {
  save(value);
}, { deep: true });
</script>

<template>
  <RouterView />
</template>
