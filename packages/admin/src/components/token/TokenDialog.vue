<script setup lang="ts">
import * as data from '@/data/data';

interface TokenDialogModel {
  visible: boolean;
  isEdit: boolean;
  form: data.Token;
}
const model = defineModel<TokenDialogModel>({ required: true });

const title = computed(() => (model.value.isEdit ? '编辑 Token' : '新增 Token'));
watch(() => model.value.visible, () => {
  if (!model.value.isEdit) {
    clearForm();
  }
});

function clearForm() {
  model.value.form = {
    ID: undefined,
    isEnable: true,
    name: '',
    token: '',
    note: '',
  };
}
function confirm() {
  model.value.visible = false;

  if (model.value.isEdit) {
    data.updateToken(model.value.form);
  } else {
    data.newToken(model.value.form);
  }

  clearForm();
}
</script>

<template>
  <el-dialog v-model="model.visible" :title="title" width="350px">

    <el-form :model="model.form"
             label-position="left"
             label-width="auto">

      <el-form-item label="启用">
        <el-switch v-model="model.form.isEnable" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.form.name" />
      </el-form-item>
      <el-form-item label="Token">
        <el-input v-model="model.form.token" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="model.form.note" />
      </el-form-item>

    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="model.visible = false">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </div>
    </template>

  </el-dialog>
</template>

<style scoped></style>
