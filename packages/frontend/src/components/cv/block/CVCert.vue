<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <div class="--dated-block-group">
    <DatedBlock v-for="group of cvData?.certificates">
      <CVText deepColor>{{ group.name }}</CVText>
      <CVText v-for="c of group.items" withDot light>{{ c }}</CVText>
    </DatedBlock>
  </div>
</template>

<style scoped></style>
