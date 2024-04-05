<script setup lang="ts">
defineEmits(['click']);
defineProps({
  disabled: Boolean,
});
</script>

<template>
  <el-popconfirm title="删除所有选中项？" @confirm="$emit('click')">
    <template #reference>
      <el-button type="danger" :disabled="disabled">
        <el-icon class="el-icon--left">
          <icon-material-symbols-delete-forever />
        </el-icon>
        删除
      </el-button>
    </template>
  </el-popconfirm>
</template>
