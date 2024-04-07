<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <DatedBlock>
    <CVText v-for="award of cvData?.awards" withDot>{{ award }}</CVText>
  </DatedBlock>
</template>

<style scoped></style>
