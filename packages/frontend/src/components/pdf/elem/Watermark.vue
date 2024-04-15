<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const isLink = props.text.startsWith('http');
</script>

<template>
  <a v-if="isLink" class="pdf-watermark"
     :href="text"
     target="_blank"
     rel="noopener noreferrer">
    <Text :text="text" />
  </a>

  <div v-else class="pdf-watermark">
    <Text :text="text" />
  </div>
</template>

<style scoped>
.pdf-watermark * {
  font-size: 13px;
  color: var(--neutral-500);
}
</style>
