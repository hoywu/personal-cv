<script setup lang="ts">
import cvData from '@/data/CVData';

const awards = cvData.value!.awards;
</script>

<template>
  <ContentBlock>
    <template #body>
      <PointText v-for="award in awards" :data="award" />
    </template>
  </ContentBlock>
</template>

<style scoped></style>
