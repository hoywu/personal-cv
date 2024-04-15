<script setup lang="ts">
import * as log from '@/data/log';

const logFrom = inject('logFrom');

function downloadPDF() {
  // TODO
  window.open('简历.pdf');
  log.logClick(
    'page:' + logFrom,
    'DownloadButton_PDF',
  )
}
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

    <el-button @click="downloadPDF" text>
      PDF 文档
    </el-button>

  </Popover>
</template>

<style scoped></style>
