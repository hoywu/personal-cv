<script setup lang="ts">
import cvData from '@/data/CVData';
import ContentBlock from '@/components/pdf/elem/ContentBlock.vue';
import Paragraph from '@/components/pdf/elem/Paragraph.vue';
import { removeWrap } from '@/utils/TextUtil';

const data = cvData.value!.competence;
</script>

<template>
  <ContentBlock>
    <template #body>
      <Paragraph v-for="text in data" :text="'- ' + removeWrap(text)" :hanging="true" />
    </template>
  </ContentBlock>
</template>

<style scoped>
.p-hang {
  text-indent: calc(var(--font-size) * -1);
  padding-left: calc(var(--font-size));
}
</style>
