<script setup lang="ts">
import * as data from '@/data/data';

const dialog = ref({
  visible: false,
  isEdit: false,
  form: {
    ID: undefined,
    name: '',
    token: '',
    note: '',
  },
});
const selected: Ref<any[]> = ref([]);

function deleteRows() {
  data.deleteTokens(selected.value.map((row) => row.ID));
}
function add() {
  dialog.value.isEdit = false;
  dialog.value.visible = true
}
function edit(row: any) {
  dialog.value.isEdit = true;
  dialog.value.form = {
    ID: row.ID,
    name: row.name,
    token: row.token,
    note: row.note,
  };
  dialog.value.visible = true;
}
</script>

<template>
  <ControlBar>
    <AddButton @click="add" />
    <DeleteButton @click="deleteRows" :disabled="selected.length === 0" />
  </ControlBar>

  <TokenTable @edit="edit" v-model:selected="selected" />

  <TokenDialog v-model="dialog" />
</template>

<style scoped></style>
