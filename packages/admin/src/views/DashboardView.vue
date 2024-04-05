<script setup lang="ts">
import * as $ from '@/data/service';
import p from '@/data/personalization';
import s, { reload } from '@/data/statistic';

const timer = setInterval(() => {
  if (p.value.autoReloadDashboard) reload();
}, 2000);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <ControlBar>
    <div>
      <Switch v-model="p.autoReloadDashboard" />
    </div>

    <div>
      <el-button type="primary" @click="$.reloadConfig">刷新配置</el-button>
      <el-button type="primary" @click="$.reloadCV">刷新简历</el-button>
    </div>
  </ControlBar>

  <div id="dashboard">
    <el-row>
      <el-col :span="6">
        <el-statistic title="今日访客数" :value="s.todayVisitor" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="今日 IP/PV" :value="s.todayIP">
          <template #suffix>/ {{ s.todayPV }}</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="今日链接点击数" :value="s.todayClick" />
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <el-statistic title="总 Token 访客数" :value="s.totalVisitor" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="总 IP/PV" :value="s.totalIP">
          <template #suffix>/ {{ s.totalPV }}</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="总链接点击数" :value="s.totalClick" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="平均浏览时间" :value="s.avgStayTime">
          <template #suffix>秒</template>
        </el-statistic>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
#dashboard {
  margin-top: 10px;
}

#dashboard>* {
  margin-bottom: 10px;
}
</style>
