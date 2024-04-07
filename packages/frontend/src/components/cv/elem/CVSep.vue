<script setup lang="ts">

</script>

<template>
  <div class="cv-sep">
    <div class="cv-sep-decoration"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.cv-sep {
  display: flex;
  align-items: center;

  font-size: var(--cv-sep-font-size);
  color: var(--neutral-900);
  margin: 20px 0 15px 0;
}

.cv-sep-decoration {
  display: inline-block;
  width: 8px;
  height: calc(var(--cv-sep-font-size) / 1.2);
  margin-right: 10px;
  background-color: var(--primary-500);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .cv-sep-decoration {
    display: inline-block;
  }
}
</style>
