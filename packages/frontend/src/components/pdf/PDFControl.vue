<script setup lang="ts">
import * as log from '@/data/log';

// 由于可能需要调整页面样式，所以通过父组件触发打印事件
const emit = defineEmits(['print']);
const logFrom = inject('logFrom');

function printBtn() {
  emit('print');

  log.logClick(
    'page:' + logFrom,
    'PrintButton',
  )
}

// 与页面共享的数据
const showPhoto = inject('showPhoto', ref(false));
</script>

<template>
  <div id="control-box" class="no-print">

    <div id="control-box-left">
      <PrintButton @print="printBtn" />
      <el-switch v-model="showPhoto" active-text="显示照片" />
    </div>

    <div id="control-box-right">
      <!-- <DownloadButton /> -->
      <ShareButton />
    </div>

  </div>
</template>

<style scoped>
#control-box {
  width: 100%;
  max-width: 210mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#control-box-left,
#control-box-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
