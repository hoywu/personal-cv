<script setup lang="ts">
import * as log from '@/data/log';
import { createReusableTemplate } from '@vueuse/core';

const props = defineProps<{
  text: string
  link?: string
}>();

const logFrom = inject('logFrom');
function logger() {
  log.logClick(
    'page:' + logFrom,
    'Text:' + props.text,
  )
}

const [ButtonTemp, ButtonTempRef] = createReusableTemplate();

function copy() {
  navigator.clipboard.writeText(props.text);
  ElMessage.success('已复制到剪贴板');
}
function open() {
  window.open(props.link, '_blank');
}
function click() {
  if (props.link) {
    open();
  } else {
    copy();
  }
  logger();
}
</script>

<template>
  <ButtonTemp>
    <div class="info-button" @click="click">
      <el-icon color="var(--neutral-700)">
        <slot name="icon"></slot>
      </el-icon>
      <el-text class="info-button-text">
        {{ text }}
      </el-text>
    </div>
  </ButtonTemp>

  <el-tooltip :disabled="!link"
              :content="link"
              placement="bottom"
              effect="light">
    <ButtonTempRef />

    <template #content>
      <span class="info-button-tooltip-text">{{ link }}</span>
    </template>
  </el-tooltip>
</template>

<style scoped>
.info-button {
  font-size: calc(var(--cv-my-info-font-size) + 2px);

  background-color: var(--neutral-200);
  padding: 5px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
}

.info-button:hover {
  background-color: var(--neutral-300);
}

.info-button-text {
  font-size: var(--cv-my-info-font-size);
  color: var(--neutral-700);
}

.info-button-tooltip-text {
  font-size: calc(var(--cv-my-info-font-size) - 2px);
  color: var(--neutral-700);
}
</style>
