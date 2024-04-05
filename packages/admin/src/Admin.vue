<script setup lang="ts">
import Header from '@/components/admin/Header.vue';
import Sidebar from '@/components/admin/Sidebar.vue';

const collapseSidebar = ref(window.innerWidth < 960);
</script>

<template>
  <Header @logo-click="collapseSidebar = !collapseSidebar" />

  <Sidebar :collapsed="collapseSidebar" />
  <div class="content" :class="{ 'no-sidebar-content': collapseSidebar }">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  margin-left: var(--sidebar-width);
  padding: 20px;
  box-sizing: border-box;

  transition: all 0.2s ease-in-out;
}

.no-sidebar-content {
  margin-left: 0;
}
</style>
