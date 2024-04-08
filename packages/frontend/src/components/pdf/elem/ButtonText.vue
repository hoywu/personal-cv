<script setup lang="ts">
import * as log from '@/data/log';
import * as Msg from '@/utils/Msg';

const props = defineProps<{
  text: string;
  click?: () => void;
  decoration?: string;
}>();

const logFrom = inject('logFrom');
function logger() {
  log.logClick(
    'page:' + logFrom,
    'Text:' + props.text,
  )
}

function defaultClick() {
  navigator.clipboard.writeText(props.text).then(() => {
    Msg.success('已复制到剪贴板');
  }).catch((err) => {
    Msg.error('复制失败: ' + err);
  });
  logger();
}
function costomClick() {
  if (props.click) {
    props.click();
  }
  logger();
}
const click = props.click ? costomClick : defaultClick;
const decoration = props.decoration || 'underline dashed';
</script>

<template>
  <a class="button-text"
     target="_blank"
     rel="noopener noreferrer"
     @click.prevent="click">
    <Text :text="props.text" />
  </a>
</template>

<style scoped>
.button-text {
  cursor: pointer;
  text-decoration: v-bind(decoration);
  color: inherit;
}

.button-text:hover {
  color: var(--primary-600);
}
</style>
