<script setup lang="ts">
import DynamicIcon from '@/components/elem/DynamicIcon.vue';

export interface navItem {
  name: string;
  title: string;
  icon: string;
}

const route = useRoute();
const navList: navItem[] = [
  { name: 'cv', title: '我的简历', icon: 'ph:read-cv-logo' },
  { name: 'pdf', title: 'A4 PDF', icon: 'ph:file-pdf' },
];
</script>

<template>
  <nav class="no-print">
    <RouterLink v-for="nav in navList" :key="nav.name" :to="{ name: nav.name }"
                :class="{ active: route.name === nav.name, navLink: true }">
      <DynamicIcon :icon="nav.icon" />
      <span>{{ nav.title }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
/*** Navigation ***/
nav {
  display: flex;
  gap: 10px;
}

nav>* {
  text-decoration: none;
  color: var(--neutral-700);
  padding: 5px 10px;
  border-bottom: 2px solid transparent;

  transition: all 0.2s ease-out;
}

nav>*:hover {
  color: var(--primary-500);
}

nav>.active {
  color: var(--primary-500);
  border-bottom: 2px solid var(--primary-500);
}

.navLink {
  display: flex;
  align-items: center;
  gap: 3px;
}
</style>
