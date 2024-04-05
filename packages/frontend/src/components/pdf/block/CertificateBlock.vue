<script setup lang="ts">
import cvData from '@/data/CVData';
import Paragraph from '@/components/pdf/elem/Paragraph.vue';
import ContentBlock from '@/components/pdf/elem/ContentBlock.vue';
import PointText from '@/components/pdf/elem/PointText.vue';

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
