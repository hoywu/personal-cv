<script setup lang="ts">
import * as log from '@/data/log';

const props = defineProps<{
  href?: string;
}>();

const logFrom = inject('logFrom');
function logger() {
  log.logClick(
    'page:' + logFrom,
    'Link:' + props.href,
  )
}
</script>

<template>
  <div class="icon-link" v-if="href">
    <el-icon>
      <slot></slot>
    </el-icon>
    <a :href="href"
       target="_blank"
       rel="noopener noreferrer"
       @click="logger">
      {{ href }}
    </a>
  </div>
</template>

<style scoped>
.icon-link {
  font-size: var(--cv-icon-text-size);
  color: var(--neutral-700);
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon-link>a {
  color: var(--neutral-700);
  text-decoration: underline;
}

.icon-link>a:hover {
  color: var(--primary-400);
}
</style>
