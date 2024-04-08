<script setup lang="ts">
import { loadCVData } from './data/CVData';

const route = useRoute();

const loading = ref(true);
const authorized = ref(false);

(function auth() {
  if (!route.params.token) return;
  
  // 加载简历数据
  loadCVData(route.params.token.toString())
    .then(() => {
      authorized.value = true;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
      ElNotification({
        title: '错误',
        message: '数据加载失败，请检查 URL 是否正确',
        type: 'error',
        duration: 0,
      });
    });
})();
</script>

<template>
  <SiteHeader />

  <main v-if="loading">
    <div id="loading">
      <el-skeleton :rows="20" animated />
    </div>
  </main>

  <main v-else-if="authorized">
    <RouterView />
  </main>

  <main v-else>
    <el-empty description="未授权访问，请检查 URL 是否正确" />
  </main>

  <SiteFooter />
</template>

<style scoped>
/*** Main ***/
main {
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 0 20px;
}

#loading {
  margin: 30px;
}
</style>
