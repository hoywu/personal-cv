<script setup lang="ts">
import * as data from '@/data/data';

const emit = defineEmits<{
  edit: [row: any];
}>();
const selected = defineModel('selected');

const pagin = ref({
  page: 1,
  pageSize: 20,
});
const search = ref('');
const searchInputActive = ref(false);
const filterFn = function (data: any, index: number): boolean {
  if (search.value !== '') {
    return data.name.toLowerCase().includes(search.value.toLowerCase()) ||
      data.token.toLowerCase().includes(search.value.toLowerCase()) ||
      data.note.toLowerCase().includes(search.value.toLowerCase());
  }
  return index >= (pagin.value.page - 1) * pagin.value.pageSize
    && index < pagin.value.page * pagin.value.pageSize;
};

data.refreshTokenList();
const tableData = computed(() => data.tokenList.value!.filter(filterFn));

const rowRightClick = (row: any, _column: any, e: any) => {
  // TODO: 表格右键菜单
  // e.preventDefault();
  // console.log(row);
}

const handleEdit = (_index: number, row: any) => {
  emit('edit', row);
}
const handleDelete = (_index: number, row: any) => {
  data.deleteToken(row.ID);
}
</script>

<template>
  <div class="table-wrapper">
    <el-table :data="tableData"
              @row-contextmenu="rowRightClick"
              @selection-change="selected = $event">
      <el-table-column type="selection" width="30" />

      <el-table-column prop="isEnable" label="启用" width="65">
        <template #default="{ row }">
          <el-switch v-model="row.isEnable"
                     @change="data.switchToken(row, $event as boolean)" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="token" label="Token" />
      <el-table-column prop="note" label="备注" />

      <el-table-column align="right" :width="150">
        <template #header>
          <el-input v-model="search" placeholder="搜索..." clearable
                    :class="searchInputActive ? 'search-input-active' : ''"
                    @focus="searchInputActive = true"
                    @blur="searchInputActive = false" />
        </template>

        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

          <el-popconfirm title="确认删除？" @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <Pagination :total="data.tokenList.value.length" v-model="pagin" />
  </div>
</template>

<style scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* .search-input-active {
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0;
  width: 300px;
} */
</style>
