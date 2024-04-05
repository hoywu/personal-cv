import * as api from './api';
import * as h from '@/utils/ErrorHandler';

export function reloadConfig() {
  api.reloadConfig().then(() => {
    ElMessage.success('刷新成功');
  }).catch(h.ErrMsg);
}

export function reloadCV() {
  api.reloadCV().then(() => {
    ElMessage.success('刷新成功');
  }).catch(h.ErrMsg);
}
