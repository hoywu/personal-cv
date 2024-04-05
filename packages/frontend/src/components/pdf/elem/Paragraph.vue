<script setup lang="ts">
import Text from '@/components/pdf/elem/Text.vue';

const props = defineProps<{
  text?: string;
  hanging?: boolean;
}>();
</script>

<template>
  <div :class="['paragraph', hanging ? 'hanging' : '']">
    <slot>
      <Text :text="props.text" />
    </slot>
  </div>
</template>

<style scoped>
.paragraph {
  margin: 1mm 0 0 0;
  padding: 0;
}

.hanging {
  text-indent: calc(var(--font-size) * -1);
  padding-left: calc(var(--font-size));
}
</style>
