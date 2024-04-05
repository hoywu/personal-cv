<script setup lang="ts">
import Text from '@/components/pdf/elem/Text.vue';
import Paragraph from '@/components/pdf/elem/Paragraph.vue';

export interface PointTextProps {
  bold?: string;
  breakAfterBold?: boolean;
  texts: string[];
};

const props = defineProps<{
  data: PointTextProps | string;
}>();

const bold = computed(() => {
  if (typeof props.data === 'string') {
    return '';
  }
  return props.data.bold;
});
const breakAfterBold = computed(() => {
  if (typeof props.data === 'string') {
    return false;
  }
  return props.data.breakAfterBold;
});
const texts = computed(() => {
  if (typeof props.data === 'string') {
    return [props.data];
  }
  return props.data.texts;
});
</script>

<template>
  <Paragraph>
    <img src="@/assets/icon/dot.svg" class="dot">
    <Text class="bold-text" v-if="bold" :text="bold" />

    <Paragraph v-if="breakAfterBold" v-for="text in texts" :text="text" />
    <Text v-else v-for="text in texts" :text="text" />
  </Paragraph>
</template>

<style scoped>
.dot {
  width: calc(var(--font-size) - calc(var(--font-size) / 2));
  height: calc(var(--font-size) - calc(var(--font-size) / 2));
  padding: calc(var(--font-size) * 0.35) calc(var(--font-size) / 2) calc(var(--font-size) * 0.4) 0;
  vertical-align: bottom;
}

.bold-text {
  font-weight: bold;
}
</style>
