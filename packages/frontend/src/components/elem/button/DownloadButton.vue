<script setup lang="ts">
import Popover from '@/components/elem/Popover.vue';

</script>

<template>
  <Popover>
    <template #reference>
      <el-button type="primary">
        <el-icon class="el-icon--left">
          <icon-ph-download-simple-bold />
        </el-icon>
        下载
      </el-button>
    </template>


  </Popover>
</template>

<style scoped></style>
