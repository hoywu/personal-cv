<script setup lang="ts">
</script>

<template>
  <div id="cv-page">

    <CVHeader />

    <CVSep>教育背景</CVSep>
    <CVEdu />

    <CVSep>竞赛获奖</CVSep>
    <CVAward />

    <CVSep>项目经历</CVSep>
    <CVProject />

    <CVSep>专业技能</CVSep>
    <CVCompetence />

    <CVSep>资格证书</CVSep>
    <CVCert />

  </div>
</template>

<style scoped>
#cv-page {
  font-family: "sarasa", "monospace";
  background-color: var(--cv-page-color);
  padding: 20px;
  border-radius: 10px;
}
</style>
