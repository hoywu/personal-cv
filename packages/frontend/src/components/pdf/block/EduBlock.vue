<script setup lang="ts">
import cvData from '@/data/CVData';
import Text from '@/components/pdf/elem/Text.vue';
import Paragraph from '@/components/pdf/elem/Paragraph.vue';
import ContentBlock from '@/components/pdf/elem/ContentBlock.vue';
import PointText, { type PointTextProps } from '@/components/pdf/elem/PointText.vue';

const edu = cvData.value!.edu_base;

const gpa: PointTextProps = {
  bold: 'GPA: ',
  texts: [cvData.value!.edu.gpa],
};
const course: PointTextProps = {
  bold: '主修课程: ',
  texts: [cvData.value!.edu.course],
};
const coursePara = cvData.value!.edu.course_para;
const history: PointTextProps = {
  bold: '校内经历: ',
  breakAfterBold: true,
  texts: cvData.value!.edu.history,
};
</script>

<template>
  <ContentBlock header-class="edu-header">
    <template #header>
      <Text :text="edu.school" />
      <Text :text="edu.degree" />
      <Text :text="edu.major" />
      <div class="stretch"></div>
      <Text :text="edu.date" />
    </template>

    <template #body>
      <PointText :data="gpa" />
      <PointText :data="course" />
      <Paragraph :text="coursePara" />
      <br>
      <PointText :data="history" />
    </template>
  </ContentBlock>
</template>

<style scoped>
:deep(.edu-header) {
  display: flex;
  gap: 20mm;

  .stretch {
    flex-grow: 1;
  }
}
</style>
