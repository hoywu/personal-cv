<script setup lang="ts">
import Text from '@/components/pdf/elem/Text.vue';

</script>

<template>
  <div class="sep">
    <div class="sep-decoration"></div>
    <Text class="text">
      <slot></slot>
    </Text>
  </div>
</template>

<style scoped>
/********** 分隔线 **********/
.sep {
  display: grid;
  grid-template-columns: 3fr 200fr;
  margin: 0 var(--page-margin) 0 var(--page-margin);
  height: var(--sep-height);
}

/* 分隔线装饰 */
.sep-decoration {
  background-color: var(--primary-color);
}

/* 分隔线文字 */
.sep>.text {
  display: flex;
  align-items: center;
  padding: 0 0 0 var(--sep-left-padding);
  font-size: var(--sep-font-size);
  background-color: var(--secondary-color);
}
</style>
