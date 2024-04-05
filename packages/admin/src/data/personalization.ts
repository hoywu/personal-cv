import type { Ref } from 'vue';

const localStorageKey = 'cvAdmin';

export interface Personalization {
  autoReloadDashboard: boolean;
  autoReloadLog: boolean;
  defaultExpandLog: boolean;
}

let personalization: Ref<Personalization>;
let localData = localStorage.getItem(localStorageKey);
if (localData) {
  personalization = ref(JSON.parse(localData));
} else {
  personalization = ref({
    autoReloadDashboard: false,
    autoReloadLog: false,
    defaultExpandLog: false,
  });
}

export function save(value: Personalization) {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
}

export default personalization;
