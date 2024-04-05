<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>

<template>
  <el-icon v-if="props.icon === 'ph:read-cv-logo'">
    <icon-ph-read-cv-logo />
  </el-icon>

  <el-icon v-else-if="props.icon === 'ph:file-pdf'">
    <icon-ph-file-pdf />
  </el-icon>
</template>
