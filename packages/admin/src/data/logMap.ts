export enum LogType {
  Enter,
  Leave,
  Click,
  API,
  Firewall,
}

export const logType = [
  "访问",
  "离开",
  "点击",
  "接口",
  "防火墙",
];

type tagType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export const logTypeTag: tagType[] = [
  "primary",
  "danger",
  "success",
  "info",
  "warning",
];
