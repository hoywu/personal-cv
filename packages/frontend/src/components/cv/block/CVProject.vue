<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <div class="--dated-block-group">
    <DatedBlock v-for="proj of cvData?.projects" :date="proj.header[2]">
      <CVText bold deepColor>{{ proj.header[0] }}</CVText>
      <div class="cv-proj-subtitle-box">
        <CVText light>{{ proj.header[1] }}</CVText>
        <IconLink :href="proj.link">
          <icon-mdi-github />
        </IconLink>
      </div>
      <br>
      <CVText v-for="t of proj.body" withDot>{{ t }}</CVText>
    </DatedBlock>
  </div>
</template>

<style scoped>
.cv-proj-subtitle-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .cv-proj-subtitle-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>
