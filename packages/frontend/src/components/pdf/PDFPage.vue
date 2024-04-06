<script setup lang="ts">
</script>

<template>
  <div id="pdf-page">

    <HeaderBlock />

    <Separator>教育背景</Separator>
    <EduBlock />

    <Separator>竞赛获奖</Separator>
    <AwardBlock />

    <Separator>项目经历</Separator>
    <ProjectBlock />

    <Separator>技术能力</Separator>
    <CompetenceBlock />

    <Separator>资格证书</Separator>
    <CertificateBlock />

  </div>
</template>

<style scoped>
#pdf-page {
  font-family: "sarasa", "monospace";
  font-size: var(--font-size);
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;

  width: 210mm;
  height: 297mm;
  max-width: 210mm;
  max-height: 297mm;
  min-width: 210mm;
  min-height: 297mm;

  /* border: 1px #D3D3D3 solid; */

  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
