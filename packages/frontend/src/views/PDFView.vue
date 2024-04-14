<script setup lang="ts">
// Vite: 禁用 CSS 注入页面
import pdfStyle from '@/styles/pdf.css?inline';
import PDFControl from '@/components/pdf/PDFControl.vue';
import PDFPage from '@/components/pdf/PDFPage.vue';

const router = useRouter();
const route = useRoute();

// 为子组件提供日志来源
provide('logFrom', route.name?.toString() || route.fullPath);

// 控制栏与页面共享的数据
const showPhoto = ref(true);
provide('showPhoto', showPhoto);

// 动态加载CSS
const style = document.createElement('style');
style.textContent = pdfStyle;

// 屏幕宽度过窄警告
const checkWidth = () => { return window.innerWidth < 795 ? true : false };
const warning = ref(checkWidth());

// 计算缩放系数
const screenWidth = ref(window.innerWidth);
const scale = computed(() => {
  return Math.min(screenWidth.value / 793.7, 1);
});

// 缩放时减小容器高度
const cvBox: Ref<HTMLElement | null> = ref(null);
const cvBoxOriginHeight = ref(0);
const cvBoxHeight = computed(() => cvBoxOriginHeight.value * scale.value);

onMounted(() => {
  // 载入CSS
  document.head.appendChild(style);

  // 获取容器原始高度，然后设置为乘缩放系数后的高度
  cvBoxOriginHeight.value = cvBox.value!.clientHeight;
  cvBox.value!.style.height = cvBoxHeight.value + 'px';

  // 实时计算缩放系数、更改容器高度
  window.addEventListener('resize', () => {
    warning.value = checkWidth();
    screenWidth.value = window.innerWidth;
    cvBox.value!.style.height = cvBoxHeight.value + 'px';
  });
});
onUnmounted(() => {
  //卸载CSS
  document.head.removeChild(style);
});

function print() {
  window.print();
}
</script>

<template>

  <div class="wrapper no-print" id="warning-box" v-if="warning"
       style="margin-bottom: 20px">
    <el-alert type="info"
              title="屏幕过窄，页面显示可能不正确"
              :closable="false"
              show-icon>
      <div id="alert-content">
        <span>请返回</span>
        <el-link type="primary" @click="router.push({ name: 'cv' })" link>首页</el-link>
        <span>，或点击“下载”按钮下载 A4 PDF 文件</span>
      </div>
    </el-alert>
  </div>

  <div class="wrapper">
    <PDFControl @print="print()" />

    <div id="cv-box" ref="cvBox">
      <PDFPage />
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

#alert-content :deep(.el-link) {
  vertical-align: unset;
}

/*** 简历页面 ***/
#cv-box {
  --scale: v-bind(scale);
  --original-width: 210mm;
  --original-height: v-bind(cvBoxOriginHeight);

  width: calc(var(--original-width) * var(--scale));
  /* height: v-bind(cvBoxHeight); 改为在JS中设置 */

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--cv-background-color);
}

#cv-box>* {
  --scale: v-bind(scale);

  transform: scale(var(--scale));
  --webkit-transform: scale(var(--scale));
  -moz-transform: scale(var(--scale));
  -o-transform: scale(var(--scale));

  transform-origin: center;
  --webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
}
</style>
