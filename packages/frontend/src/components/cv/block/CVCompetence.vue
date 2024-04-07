<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <DatedBlock>
    <CVText v-for="c of cvData?.competence" withDot>{{ c }}</CVText>
  </DatedBlock>
</template>

<style scoped></style>
