<script setup lang="ts">
import * as log from '@/data/log';
import Popover from '@/components/elem/Popover.vue';
import Divider from '@/components/elem/Divider.vue';
import * as Msg from '@/utils/Msg';
import QrcodeVue from 'qrcode.vue';

const url = window.location.href;
const logFrom = inject('logFrom');

function copyLinkBtn() {
  navigator.clipboard.writeText(url);
  Msg.success('链接已复制');

  log.logClick(
    'page:' + logFrom,
    'ShareButton_CopyLink:' + url,
  )
}
</script>

<template>
  <Popover>
    <template #reference>
      <el-button type="primary">
        <el-icon class="el-icon--left">
          <icon-ep-share />
        </el-icon>
        分享
      </el-button>
    </template>

    <el-button @click="copyLinkBtn" text>
      复制链接
    </el-button>

    <Divider />

    <div id="share-qr-code">
      <div>手机二维码</div>
      <QrcodeVue :value="url" />
    </div>
  </Popover>
</template>

<style scoped>
#share-qr-code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
}
</style>
