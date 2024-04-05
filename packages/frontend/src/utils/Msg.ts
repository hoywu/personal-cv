export function success(msg: string) {
  ElMessage.success({
    message: msg,
    type: 'success',
    customClass: 'no-print',
  });
}

export function error(msg: string) {
  ElMessage.error({
    message: msg,
    type: 'error',
    customClass: 'no-print',
  });
}