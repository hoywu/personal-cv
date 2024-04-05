<script setup lang="ts">
import cvData from '@/data/CVData';
import Text from '@/components/pdf/elem/Text.vue';
import LinkText from '@/components/pdf/elem/LinkText.vue';
import ButtonText from '@/components/pdf/elem/ButtonText.vue';

const myInfo = cvData.value!.base;
const watermark = cvData.value!.watermark;
</script>

<template>
  <div class="header">

    <div class="photo">
      <img :src="'data:image/png;base64,' + cvData!.photo">
    </div>

    <div class="header-text">
      <Text class="name">{{ myInfo.name }}</Text>

      <div class="header-icon-group">

        <div class="header-icon-group-column">
          <div class="icon-group">
            <img src="@/assets/icon/person.svg">
            <Text>{{ myInfo.age }}岁</Text>
          </div>
          <div class="icon-group">
            <img src="@/assets/icon/phone.svg">
            <ButtonText :text="myInfo.phone" />
          </div>
        </div>

        <div class="header-icon-group-column">
          <div class="icon-group">
            <img src="@/assets/icon/home.svg">
            <Text>{{ myInfo.address }}</Text>
          </div>
          <div class="icon-group">
            <img src="@/assets/icon/mail.svg">
            <ButtonText :text="myInfo.email" />
          </div>
        </div>

        <div class="header-icon-group-column">
          <div class="icon-group">
            <img src="@/assets/icon/wordpress.svg">
            <LinkText :text="myInfo.blog.text"
                      :link="myInfo.blog.link" />
          </div>
          <div class="icon-group">
            <img src="@/assets/icon/github.svg">
            <LinkText :text="myInfo.github.text"
                      :link="myInfo.github.link" />
          </div>
        </div>

      </div>
    </div>

    <div id="watermark-link">
      <div v-for="text of watermark">{{ text }}</div>
    </div>

  </div>
</template>

<style scoped>
/********** 页面头部信息 **********/
.header {
  display: flex;
  position: relative;
  margin: 5mm var(--page-margin) 5mm var(--page-margin);
}

.header :deep(*) {
  font-size: var(--header-font-size);
}

.photo {
  width: 25mm;
  height: 35mm;
  max-width: 25mm;
  max-height: 35mm;
  min-width: 25mm;
  min-height: 35mm;
  /* border: 1px #D3D3D3 solid; */
  box-sizing: border-box;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
}

.header-text {
  margin: 5mm 0 0 10mm;
  width: 100%;
}

.name {
  display: block;
  font-size: var(--name-font-size);
  margin: 0 0 4mm 0;
  padding: 0;
}

.header-icon-group {
  display: flex;
  gap: 80px;
}

.header-icon-group-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 1mm;
}

.icon-group img {
  width: 20px;
  height: 20px;
}

#watermark-link {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13px;
  color: var(--neutral-500);
  /* text-align: right; */
}
</style>
