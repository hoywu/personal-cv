import * as api from './api';
import * as h from '@/utils/ErrorHandler';

export interface Token {
  ID?: number;
  name: string;
  token: string;
  note: string;
}
export interface Log {
  ID: number;
  type: number;
  token: string;
  ip: string;
  from: string;
  to: string;
  userAgent: string;
  time: string;
}
export const tokenList = ref<Token[]>([]);
export const logList = ref<Log[]>([]);

export function refreshTokenList() {
  api.getTokenList().then((res) => {
    tokenList.value = res;
  }).catch(h.ErrNotify);
}
export function refreshLogList() {
  api.getLogList().then((res) => {
    logList.value = res;
  }).catch(h.ErrNotify);
}

export function newToken(token: Token) {
  api.newToken(token).then(() => {
    ElMessage.success('创建成功');
    refreshTokenList();
  }).catch(h.ErrMsg);
}

export function updateToken(token: Token) {
  api.updateToken(token).then(() => {
    ElMessage.success('更新成功');
    refreshTokenList();
  }).catch(h.ErrMsg);
}

export function deleteToken(id: number) {
  api.deleteToken(id).then(() => {
    ElMessage.success('删除成功');
    refreshTokenList();
  }).catch(h.ErrMsg);
}

export function deleteTokens(ids: number[]) {
  const ps: Promise<any>[] = [];

  ids.forEach((id) => {
    ps.push(api.deleteToken(id));
  });

  Promise.all(ps).then(() => {
    ElMessage.success('已删除 ' + ids.length + ' 个项目');
    refreshTokenList();
  }).catch(h.ErrMsg);
}

export function deleteLogs(ids: number[]) {
  const ps: Promise<any>[] = [];

  ids.forEach((id) => {
    ps.push(api.deleteLog(id));
  });

  Promise.all(ps).then(() => {
    ElMessage.success('已删除 ' + ids.length + ' 个项目');
    refreshLogList();
  }).catch(h.ErrMsg);
}
