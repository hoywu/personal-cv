<script setup lang="ts">
const props = defineProps<{
  collapsed?: boolean;
}>();

const navList = [
  { name: "dash", title: 'Dashboard' },
  { name: "log", title: 'Log' },
  { name: "token", title: 'Token' },
];
</script>

<template>
  <div :class="{ 'sitebar': true, 'collapsed-sitebar': props.collapsed }">
    <el-scrollbar>
      <nav>
        <RouterLink v-for="nav in navList" :key="nav.name" :to="{ name: nav.name }">
          <div class="navButton" :class="{ 'active': $route.name === nav.name }">
            <span>{{ nav.title }}</span>
          </div>
        </RouterLink>
      </nav>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.sitebar {
  width: var(--sidebar-width);
  box-sizing: border-box;

  padding: 20px;

  z-index: 100;
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  /* left: 0; */

  transition: all 0.2s ease-in-out;
}

.collapsed-sitebar {
  width: 0;
  padding: 0;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.navButton {
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;

  color: var(--neutral-800);
  font-size: 14px;

  transition: all 0.2s ease-in-out;
}

.navButton:hover {
  color: var(--primary-400);
}

nav .active {
  background-color: #e6eeff;
  color: var(--primary-400);
  font-weight: 600;
}
</style>
