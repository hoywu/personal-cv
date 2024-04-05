import * as data from '@/data/data';
import { LogType } from '@/data/logMap';

data.refreshLogList();
export const reload = () => {
  data.refreshLogList();
};

export interface StatisticData {
  totalVisitor: number;
  totalIP: number;
  totalPV: number;
  totalClick: number;
  avgStayTime: number;

  todayVisitor: number;
  todayIP: number;
  todayPV: number;
  todayClick: number;
}

const statistic = computed<StatisticData>(() => {
  const visitor = new Set<string>();
  const ip = new Set<string>();
  let pv = 0;
  let click = 0;
  let leaveCount = 0;
  let stayTimeSum = 0;
  let avgStayTime = 0;
  const todayVisitor = new Set<string>();
  const todayIP = new Set<string>();
  let todayPV = 0;
  let todayClick = 0;

  const today = new Date();

  data.logList.value.forEach((log) => {
    visitor.add(log.token);
    ip.add(log.ip);
    if (log.type === LogType.Enter) pv++;
    if (log.type === LogType.Click) click++;
    if (log.type === LogType.Leave) {
      const second = log.to.match(/([0-9]+\.?[0-9]+)s$/)
      if (second) {
        leaveCount++;
        stayTimeSum += Number.parseFloat(second[1])
      }
    }

    const time = new Date(log.time);
    if (time.getFullYear() === today.getFullYear() &&
      time.getMonth() === today.getMonth() &&
      time.getDate() === today.getDate()) {
      todayVisitor.add(log.token);
      todayIP.add(log.ip);
      if (log.type === LogType.Enter) todayPV++;
      if (log.type === LogType.Click) todayClick++;
    }
  });

  if (leaveCount === 0) {
    avgStayTime = 0;
  } else {
    avgStayTime = Math.round(stayTimeSum / leaveCount);
  }

  return {
    totalVisitor: visitor.size,
    totalIP: ip.size,
    totalPV: pv,
    totalClick: click,
    avgStayTime: avgStayTime,

    todayVisitor: todayVisitor.size,
    todayIP: todayIP.size,
    todayPV: todayPV,
    todayClick: todayClick,
  };
});

export default statistic;
