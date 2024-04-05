<script setup lang="ts">
defineEmits(['logoClick']);
</script>

<template>
  <div id="header-wrapper">
    <header>
      <img class="logo" src="@/assets/logo.svg"
           @click="$emit('logoClick')" />

      <el-text size="large">访问控制</el-text>
    </header>
  </div>
</template>

<style scoped>
/*** Header ***/
/* #header-wrapper {
  border-bottom: 1px solid var(--neutral-300);
} */

header {
  /* max-width: var(--page-width); */
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  margin: 0;

  height: var(--header-height);
  box-sizing: border-box;
}

.logo {
  width: 30px;
  height: 30px;

  cursor: pointer;
}

.logo:hover {
  filter: drop-shadow(0 0 10px var(--primary-500));
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
</style>
