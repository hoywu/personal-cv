<script setup lang="ts">
import Text from '@/components/pdf/elem/Text.vue';

const props = defineProps<{
  headerContent?: string[];
  headerClass?: string;
  bodyClass?: string;
}>();

const hideHeader = ref(false);
onMounted(() => {
  if (!props.headerContent && !useSlots().header) {
    hideHeader.value = true;
  }
});
</script>

<template>
  <div class="content-block">
    <div :class="['content-header', props.headerClass, hideHeader ? 'hide' : '']">
      <slot name="header">
        <Text v-for="text in props.headerContent" :text="text" />
      </slot>
    </div>
    <div :class="['content-body', props.bodyClass]">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped>
/********** 内容块 **********/
.content-block {
  margin: var(--t-block-ud-margin) var(--t-block-lr-margin) var(--t-block-ud-margin) var(--t-block-lr-margin);
  padding: 0;
}

.content-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.hide {
  display: none;
}

.content-header :slotted(*) {
  font-size: var(--content-header-font-size);
}

.content-header>:first-child {
  font-weight: 700;
}

.content-header>:nth-child(3) {
  text-align: right;
}

.content-body {
  margin-top: var(--t-block-ud-margin);
}
</style>
