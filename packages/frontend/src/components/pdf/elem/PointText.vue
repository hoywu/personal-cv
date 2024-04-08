<script setup lang="ts">
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
    <span class="--pdf-list-item">
      <PDFDot />
      <Text class="bold-text" v-if="bold" :text="bold" />
      <Paragraph v-if="breakAfterBold" v-for="text in texts" :text="text" />
      <Text v-else v-for="text in texts" :text="text" />
    </span>
  </Paragraph>
</template>

<style scoped>
.bold-text {
  font-weight: 700;
}
</style>
