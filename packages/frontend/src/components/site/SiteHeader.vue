<script setup lang="ts">
import Logo from '@/assets/Logo.vue';
</script>

<template>
  <div id="header-wrapper" class="no-print">
    <header>
      <div class="header-left">
        <Logo class="logo" />
        <SiteNav />
      </div>
      <div class="header-right">
        <ThemeToggle />
      </div>
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
  display: flex;
  max-width: var(--page-width);
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 0 auto;
}

.header-left,
.header-right {
  display: flex;
  gap: 20px;
  align-items: center;
}

.logo {
  width: 30px;
  height: 30px;
}
</style>
