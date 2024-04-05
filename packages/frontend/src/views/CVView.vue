<script setup lang="ts">
import CVControl from '@/components/cv/CVControl.vue';
import CVPage from '@/components/cv/CVPage.vue';

const route = useRoute();

// 为子组件提供日志来源
provide('logFrom', route.name?.toString() || route.fullPath);
</script>

<template>

  <div class="wrapper">

    <CVControl />
    <CVPage />

  </div>

  <el-empty description="建设中" />

</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
