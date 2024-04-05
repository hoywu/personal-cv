<script setup lang="ts">
import * as data from '@/data/data';
import p from '@/data/personalization';
import { logType, logTypeTag } from '@/data/logMap';
import { formatDate } from '@/utils/DateUtil';

const selected = defineModel('selected');
const search = defineModel<string>('search');

const pagin = ref({
  page: 1,
  pageSize: 20,
});
const filterFn = function (data: any, index: number): boolean {
  if (search.value) {
    return data.time.toLowerCase().includes(search.value.toLowerCase()) ||
      data.token.toLowerCase().includes(search.value.toLowerCase()) ||
      data.name.toLowerCase().includes(search.value.toLowerCase()) ||
      data.typeName.toLowerCase().includes(search.value.toLowerCase()) ||
      data.from.toLowerCase().includes(search.value.toLowerCase()) ||
      data.to.toLowerCase().includes(search.value.toLowerCase()) ||
      data.ip.toLowerCase().includes(search.value.toLowerCase()) ||
      data.userAgent.toLowerCase().includes(search.value.toLowerCase());
  }
  return index >= (pagin.value.page - 1) * pagin.value.pageSize
    && index < pagin.value.page * pagin.value.pageSize;
};

data.refreshLogList();
data.refreshTokenList();
const tableData = computed(() => data.logList.value!.map((item: data.Log) => {
  return {
    id: item.ID,
    time: formatDate(item.time),
    token: item.token,
    name: data.tokenList.value.find((token) => token.token === item.token)?.name || item.token,
    type: item.type,
    typeName: logType[item.type] || item.type,
    from: item.from,
    to: item.to,
    ip: item.ip,
    userAgent: item.userAgent,
  };
}).filter(filterFn));

const isToday = (time: string): boolean => {
  const today = new Date();
  const date = new Date(time);
  return today.getFullYear() === date.getFullYear()
    && today.getMonth() === date.getMonth()
    && today.getDate() === date.getDate();
};
const getTimeTag = (str: string): string => {
  const match = str.match(/([0-9]+\.?[0-9]+)s$/);
  if (!match) return 'Err';
  const num = Number.parseFloat(match[1]).toFixed(1);
  return num + 's';
};
const getDevice = (userAgent: string): string => {
  if (userAgent.match(/iPhone/)) return 'iPhone';
  if (userAgent.match(/Android/)) return 'Android';
  if (userAgent.match(/Windows/)) return 'Windows';
  if (userAgent.match(/Linux/)) return 'Linux';
  return 'Unknown';
};
</script>

<template>
  <div class="table-wrapper">
    <el-table :data="tableData"
              @selection-change="selected = $event"
              :default-expand-all="p.defaultExpandLog">
      <el-table-column type="selection" width="30" />

      <el-table-column type="expand">
        <template #default="scope">
          <div class="expand-content">

            <el-descriptions border>
              <el-descriptions-item>
                <template #label>
                  <div class="desc-cell-item">
                    <el-icon>
                      <icon-carbon-tcp-ip-service />
                    </el-icon>
                    IP
                  </div>
                </template>
                {{ scope.row.ip }}
              </el-descriptions-item>

              <el-descriptions-item>
                <template #label>
                  <div class="desc-cell-item">
                    <el-icon>
                      <icon-material-symbols-frame-person-rounded />
                    </el-icon>
                    UserAgent
                  </div>
                </template>
                {{ scope.row.userAgent }}
              </el-descriptions-item>
            </el-descriptions>

          </div>
        </template>
      </el-table-column>

      <el-table-column prop="time" label="时间" show-overflow-tooltip width="150">
        <template #default="{ row }">
          <el-text size="small"
                   :tag="isToday(row.time) ? 'b' : 'span'">
            {{ row.time }}
          </el-text>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" show-overflow-tooltip width="70">
        <template #default="{ row }">
          <el-tag :type="logTypeTag[row.type]">
            {{ row.typeName }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="访客" show-overflow-tooltip width="100">
        <template #default="{ row }">
          <div class="visitor-cell-item">
            <el-icon v-if="getDevice(row.userAgent) === 'iPhone'">
              <icon-skill-icons-apple-light />
            </el-icon>
            <el-icon v-else-if="getDevice(row.userAgent) === 'Android'">
              <icon-skill-icons-androidstudio-light />
            </el-icon>
            <el-icon v-else-if="getDevice(row.userAgent) === 'Linux'">
              <icon-logos-archlinux />
            </el-icon>
            <el-icon v-else-if="getDevice(row.userAgent) === 'Windows'">
              <icon-skill-icons-windows-light />
            </el-icon>
            <el-text>{{ row.name }}</el-text>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="from" label="源" show-overflow-tooltip width="120" />
      <el-table-column prop="to" label="目标" show-overflow-tooltip>
        <template #default="{ row }">
          <div class="to-cell-box" v-if="row.to.match(/([0-9]+\.?[0-9]+)s$/)">
            <el-tag type="danger">{{ getTimeTag(row.to) }}</el-tag>
            <el-tag type="info">{{ row.to.split(':')[0] }}</el-tag>
          </div>
          <div v-else>{{ row.to }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="ip" label="IP" show-overflow-tooltip />
    </el-table>

    <Pagination :total="data.logList.value.length" v-model="pagin" />
  </div>
</template>

<style scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.expand-content {
  margin: 0 10px;
}

.desc-cell-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.visitor-cell-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.to-cell-box {
  display: flex;
  gap: 5px;
}
</style>
