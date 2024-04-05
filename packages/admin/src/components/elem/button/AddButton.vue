<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
  <el-button type="primary" @click="$emit('click')">
    <el-icon class="el-icon--left">
      <icon-material-symbols-add-circle-outline />
    </el-icon>
    新建
  </el-button>
</template>
