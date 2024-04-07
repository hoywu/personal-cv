<script setup lang="ts">
import cvData from '@/data/CVData';
</script>

<template>
  <div id="header-block">
    <div id="content-box">

      <div id="name">{{ cvData?.base.name }}</div>
      <div id="city-row">
        <div id="my-title">{{ cvData?.base.title }}</div>
        <IconText :text="cvData?.base.city">
          <icon-material-symbols-location-on-rounded />
        </IconText>
      </div>

      <div id="my-info-box">
        <el-row>
          <InfoButton :text="cvData!.base.email">
            <template #icon>
              <icon-material-symbols-mail-rounded />
            </template>
          </InfoButton>

          <InfoButton :text="cvData!.base.phone">
            <template #icon>
              <icon-material-symbols-perm-phone-msg-rounded />
            </template>
          </InfoButton>
        </el-row>

        <el-row>
          <InfoButton text="GitHub" :link="cvData!.base.github.link">
            <template #icon>
              <icon-mdi-github />
            </template>
          </InfoButton>

          <!-- <InfoButton text="个人网站" :link="cvData!.base.website.link">
            <template #icon>
              <icon-mdi-web />
            </template>
          </InfoButton> -->

          <InfoButton text="博客" :link="cvData!.base.blog.link">
            <template #icon>
              <icon-ic-round-wordpress />
            </template>
          </InfoButton>
        </el-row>
      </div>

    </div>

    <!-- <div id="photo-box">
      <img :src="'data:image/png;base64,' + cvData!.photoRounded">
    </div> -->
  </div>
</template>

<style scoped>
#header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#content-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#name {
  font-size: var(--cv-name-font-size);
}

#city-row {
  display: flex;
  gap: 20px;
  align-items: center;
}

#my-title {
  font-size: var(--cv-my-title-font-size);
  color: var(--neutral-700);
}

#my-info-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#my-info-box>* {
  gap: 10px;
}

#photo-box>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
