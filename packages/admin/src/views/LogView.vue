<script setup lang="ts">
import * as data from '@/data/data';
import p from '@/data/personalization';

const selected = ref([]);
const search = ref('');

const handleDelete = () => {
  data.deleteLogs(selected.value.map((item: any) => item.id));
};

const timer = setInterval(() => {
  if (p.value.autoReloadLog) {
    data.refreshLogList();
  }
}, 2000);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <ControlBar>
    <div id="left-bar">
      <DeleteButton :disabled="selected.length === 0" @click="handleDelete" />
      <Switch v-model="p.autoReloadLog" />
      <Switch v-model="p.defaultExpandLog" text="自动展开" />
    </div>

    <div id="right-bar">
      <div style="width: 210px">
        <el-input v-model="search" placeholder="搜索..." clearable />
      </div>
    </div>
  </ControlBar>

  <LogTable v-model:selected="selected" v-model:search="search" />
</template>

<style scoped>
#left-bar,
#right-bar {
  display: flex;
  gap: 10px;
}
</style>
