<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="theme-toggle-button" @click="toggleDark()">
    <el-icon v-if="isDark">
      <icon-material-symbols:sunny-outline-rounded />
    </el-icon>
    <el-icon v-else>
      <icon-material-symbols:dark-mode-rounded />
    </el-icon>
  </div>
</template>

<style scoped>
.theme-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--neutral-200);
  color: var(--neutral-800);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.theme-toggle-button:hover {
  background-color: var(--neutral-300);
  color: var(--neutral-900);
}
</style>
