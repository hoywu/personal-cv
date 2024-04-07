<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <div id="cv-edu-block">
    <DatedBlock :date="cvData?.edu_base.date">
      <CVText bold deepColor>{{ cvData?.edu_base.degree }}</CVText>
      <div class="text-icon-box">
        <CVText light>{{ cvData?.edu_base.school }}</CVText>
        <IconText :text="cvData?.edu_base.major">
          <icon-material-symbols-school-rounded />
        </IconText>
      </div>
      <br>
      <CVText withDot>GPA: {{ cvData?.edu.gpa }}</CVText>
      <CVText withDot>主修课程: {{ cvData?.edu.course }}</CVText>
      <CVText>{{ cvData?.edu.course_para }}</CVText>
      <br>
      <CVText withDot>校内经历:</CVText>
      <CVText v-for="t in cvData?.edu.history">{{ t }}</CVText>
    </DatedBlock>
  </div>
</template>

<style scoped>
#cv-edu-block {
  display: flex;
  flex-direction: column;
}

.text-icon-box {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
