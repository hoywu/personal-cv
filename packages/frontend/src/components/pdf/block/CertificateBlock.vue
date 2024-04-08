<script setup lang="ts">
import cvData from '@/data/CVData';

interface Certificate {
  name: string;
  items: string[];
}

const certificates: Certificate[] = cvData.value!.certificates;
</script>

<template>
  <ContentBlock>
    <template #body>
      <div v-for="cert of certificates">
        <PointText :data="cert.name" />
        <Paragraph v-for="item of cert.items" :text="item"
                   class="p-margin" />
      </div>
    </template>
  </ContentBlock>
</template>

<style scoped>
.p-margin {
  margin-left: calc(var(--font-size));
}
</style>
