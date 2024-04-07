<script setup lang="ts">
import { moreSpace } from '@/utils/TextUtil';

const props = defineProps<{
  date?: string
}>();
const date = moreSpace(props.date, '-');
</script>

<template>
  <div class="dated-block">
    <div class="dated-block__date">
      <CVText lightColor>{{ date }}</CVText>
    </div>

    <div class="dated-block__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dated-block {
  display: flex;
  align-items: flex-start;
}

.dated-block__date {
  min-width: 200px;
  font-size: var(--cv-font-size);
  color: var(--neutral-700);
}

.dated-block__content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

@media (max-width: 992px) {
  .dated-block__date {
    min-width: 150px;
  }
}

@media (max-width: 768px) {
  .dated-block {
    flex-direction: column;
    gap: 10px;

    position: relative;
  }

  .dated-block__date {
    position: absolute;
    top: 0;
    right: 0;

    width: fit-content;
    min-width: fit-content;
  }
}
</style>
