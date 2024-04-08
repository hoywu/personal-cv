<script setup lang="ts">
import * as log from '@/data/log';

const props = defineProps<{
  link: string;
  text?: string;
}>();
const text = props.text || props.link;

const logFrom = inject('logFrom');
function logger() {
  log.logClick(
    'page:' + logFrom,
    'Link:' + props.text,
  )
}
</script>

<template>
  <a :href="props.link" target="_blank"
     rel="noopener noreferrer"
     @click="logger">
    <Text :text="text" />
  </a>
</template>

<style scoped>
a {
  text-decoration: underline;
  color: inherit;
}

a:hover {
  color: var(--primary-600);
}
</style>
