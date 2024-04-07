<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <div class="--dated-block-group">
    <DatedBlock v-for="proj of cvData?.projects" :date="proj.header[2]">
      <CVText bold deepColor>{{ proj.header[0] }}</CVText>
      <CVText light>{{ proj.header[1] }}</CVText>
      <br>
      <CVText v-for="t of proj.body" withDot>{{ t }}</CVText>
    </DatedBlock>
  </div>
</template>

<style scoped></style>
