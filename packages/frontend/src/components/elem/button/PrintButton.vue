<script setup lang="ts">
const emit = defineEmits(['print']);
</script>

<template>
  <el-button type="" @click="emit('print')">
    <el-icon class="el-icon--left">
      <icon-ep-printer />
    </el-icon>
    打印
  </el-button>
</template>
