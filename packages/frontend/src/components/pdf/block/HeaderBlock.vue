<script setup lang="ts">
import cvData from '@/data/CVData';

const myInfo = cvData.value!.base;
const watermark = cvData.value!.watermark;

// 注入的数据
const showPhoto = inject('showPhoto', ref(true));
const showWatermark = inject('showWatermark', ref(true));
</script>

<template>
  <div class="header">

    <div class="photo" v-if="showPhoto">
      <img :src="'data:image/png;base64,' + cvData!.photo">
    </div>

    <div class="header-text">
      <div class="header-name-row">
        <Text class="name">{{ myInfo.name }}</Text>
        <!-- <Text class="intention" v-if="myInfo.intention">
          求职意向: {{ myInfo.intention }}
        </Text> -->
      </div>

      <div class="header-icon-group">

        <div class="header-icon-group-column">
          <div class="icon-group">
            <icon-material-symbols:person-rounded />
            <Text>{{ myInfo.sex }}/{{ myInfo.age }}岁</Text>
          </div>
          <div class="icon-group">
            <icon-material-symbols:call />
            <ButtonText :text="myInfo.phone" />
          </div>
        </div>

        <div class="header-icon-group-column">
          <div class="icon-group">
            <icon-material-symbols:location-on-rounded />
            <Text>{{ myInfo.address }}</Text>
          </div>
          <div class="icon-group">
            <icon-material-symbols:mail-outline-rounded />
            <ButtonText :text="myInfo.email" />
          </div>
        </div>

        <div class="header-icon-group-column">
          <div class="icon-group">
            <icon-ic:baseline-wordpress />
            <LinkText :text="myInfo.blog.text"
                      :link="myInfo.blog.link" />
          </div>
          <div class="icon-group">
            <icon-mdi:github />
            <LinkText :text="myInfo.github.text"
                      :link="myInfo.github.link" />
          </div>
        </div>

      </div>
    </div>

    <div v-if="showWatermark" id="watermark-link">
      <Watermark v-for="text of watermark" :text="text" />
    </div>

  </div>
</template>

<style scoped>
/********** 页面头部信息 **********/
.header {
  display: flex;
  gap: 5mm;
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
  display: flex;
  flex-direction: column;
  gap: 4mm;
  margin-top: 5mm;
  margin-left: 5mm;
  width: 100%;
}

.header-name-row {
  display: flex;
  align-items: center;
  gap: 50px;
}

.name {
  display: block;
  font-size: var(--name-font-size);
}

.intention {
  color: var(--neutral-500);
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

.icon-group img,
.icon-group svg {
  width: 20px;
  height: 20px;
}

#watermark-link {
  position: absolute;
  top: 0;
  right: 0;
  /* text-align: right; */
}
</style>
