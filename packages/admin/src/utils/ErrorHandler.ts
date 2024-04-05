export function ErrNotify(err: any) {
  ElNotification({
    title: '错误',
    message: getErrMsg(err),
    type: 'error',
  })
}

export function ErrMsg(err: any) {
  ElMessage.error(getErrMsg(err));
}

function getErrMsg(err: any): string {
  let errMsg;
  if (err.response.data) {
    console.log(err.response.data);
    errMsg = err.response.data.msg;
  } else if (err.message) {
    errMsg = err.message;
  } else {
    errMsg = err;
  }

  return errMsg;
}
