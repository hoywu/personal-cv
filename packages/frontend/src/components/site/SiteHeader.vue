<script setup lang="ts">
import SiteNav from '@/components/site/SiteNav.vue';

</script>

<template>
  <div id="header-wrapper" class="no-print">
    <header>
      <img class="logo" src="@/assets/logo.svg" />
      <SiteNav />
    </header>
  </div>
</template>

<style scoped>
/*** Header ***/
#header-wrapper {
  background-color: var(--neutral-100);
  /* box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1); */
}

header {
  max-width: var(--page-width);
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
}

.logo {
  width: 30px;
  height: 30px;
}
</style>
