<script setup lang="ts">
const props = defineProps({
  withDot: {
    type: Boolean,
    default: false,
  },
  lineHeight: {
    type: Number,
    default: 1.5,
  },
  deepColor: {
    type: Boolean,
    default: false,
  },
  lightColor: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="cv-text-wrapper">
    <div class="cv-text" :class="{
      'cv-text--deep-color': deepColor,
      'cv-text--light-color': lightColor,
      'cv-text--bold': bold,
      'cv-text--light': light,
      'dotted-text': withDot
    }">
      <CVDot v-if="withDot" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dotted-text {
  text-indent: calc(var(--cv-font-size) * -1);
  padding-left: calc(var(--cv-font-size));
}

.cv-text {
  font-size: var(--cv-font-size);
  color: var(--neutral-900);
  line-height: v-bind(lineHeight);
}

.cv-text--deep-color {
  color: var(--neutral-950);
}

.cv-text--light-color {
  color: var(--neutral-700);
}

.cv-text--bold {
  font-weight: 600;
}

.cv-text--light {
  font-weight: 300;
}
</style>
