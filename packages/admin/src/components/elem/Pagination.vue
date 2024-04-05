<script setup lang="ts">
const props = defineProps<{
  total: number;
}>();

const model = defineModel<{
  page: number;
  pageSize: number;
}>({ required: true });
</script>

<template>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next"
                   :total="props.total"
                   :page-size="model.pageSize"
                   :current-page="model.page"
                   @current-change="model.page = $event" />
    <el-select v-model="model.pageSize" placeholder="页数" style="width: 80px">
      <el-option v-for="item in [10, 20, 50, 100, 500]"
                 :key="item" :label="item" :value="item" />
    </el-select>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
