<script setup lang="ts">
import * as log from '@/data/log';
import PrintButton from '@/components/elem/button/PrintButton.vue';
import DownloadButton from '@/components/elem/button/DownloadButton.vue';
import ShareButton from '@/components/elem/button/ShareButton.vue';

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
</script>

<template>
  <div id="control-box" class="no-print">
    <PrintButton @print="printBtn" />
    <div id="control-box-right">
      <DownloadButton />
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

#control-box-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
