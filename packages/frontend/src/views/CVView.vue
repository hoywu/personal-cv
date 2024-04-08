<script setup lang="ts">
const route = useRoute();

// 为子组件提供日志来源
provide('logFrom', route.name?.toString() || route.fullPath);
</script>

<template>

  <div class="wrapper">

    <CVControl />
    <CVPage />

  </div>

</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
