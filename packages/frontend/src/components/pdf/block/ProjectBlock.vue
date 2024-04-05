<script setup lang="ts">
import cvData from '@/data/CVData';
import ContentBlock from '@/components/pdf/elem/ContentBlock.vue';
import PointText from '@/components/pdf/elem/PointText.vue';
import { removeWrap } from '@/utils/TextUtil';

interface Project {
  header: string[];
  body: string[];
};

const projects: Project[] = cvData.value!.projects;
</script>

<template>
  <ContentBlock v-for="p of projects" :header-content="p.header">
    <template #body>
      <PointText v-for="text of p.body" :data="removeWrap(text)" />
    </template>
  </ContentBlock>
</template>

<style scoped></style>
