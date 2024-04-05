<script setup lang="ts">
const props = defineProps<{
  text?: string;
}>();
</script>

<template>
  <span class="text">
    <slot>
      {{ props.text }}
    </slot>
  </span>
</template>

<style scoped>
.text {
  /* font-family: "等距更纱黑体 SC"; */
  font-size: var(--font-size);
}
</style>
