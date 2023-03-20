<template>
  <v-card class="ma-4 pa-4">
    <div class="search-wrap mb-4">
      <v-menu v-model="menu" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-text-field :value="dateFormat(pickDate.start) + ' ~ ' + dateFormat(pickDate.end)" prepend-icon="mdi-calendar" variant="underlined" readonly v-bind="props" hide-details />
        </template>
        <div>
          <DatePicker v-model.range="pickDate" :disabled-dates="disabledDates" locale="ko" />
        </div>
      </v-menu>
      <v-btn color="black" width="100" @click="getStoreCmmncdInfo">검색</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="i" class="text-left">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="cmmncd.getIsLoading">
          <td colspan="3" class="text-center">로딩중...</td>
        </tr>
        <tr v-for="item in cmmncd.getItemList" v-else :key="item.name">
          <td>{{ item.league_ko_nm }}</td>
          <td>{{ item.fixture_status }}</td>
          <td>{{ item.liveIn }}</td>
        </tr>
        <tr v-if="!cmmncd.getIsLoading && cmmncd.getItemList.length === 0">
          <td colspan="3" class="text-center">데이터가 없습니다.</td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination v-model="page" :length="4" @update:modelValue="getStoreCmmncdInfo"></v-pagination>
  </v-card>
</template>

<script setup>
import { onMounted } from '#imports';
import { useCmmncdStore } from '~/stores/cmmncd';
import { DatePicker } from 'v-calendar';

let disabledDate = new Date();
disabledDate.setDate(disabledDate.getDate() + 1);

const disabledDates = ref([{ start: disabledDate, end: null }]);

const cmmncd = useCmmncdStore();
const page = ref(1);
const menu = ref(false);

let preDate = new Date();
preDate.setDate(preDate.getDate() - 7);

const pickDate = ref({
  start: preDate,
  end: new Date(),
});

const headers = [
  {
    title: '경기명',
    align: 'start',
    sortable: false,
    key: 'league_ko_nm',
  },
  { title: '상태', key: 'fixture_status' },
  { title: '날짜', key: 'liveIn' },
];

const dateFormat = (data) => {
  const objDate = new Date(data);
  const year = objDate.getFullYear();
  const month = objDate.getMonth() + 1 < 10 ? '0' + (objDate.getMonth() + 1) : objDate.getMonth() + 1;
  const date = objDate.getDate() < 10 ? '0' + objDate.getDate() : objDate.getDate();
  return `${year}-${month}-${date}`;
};

async function getStoreCmmncdInfo() {
  const formData = new FormData();
  formData.set('st_dt', dateFormat(pickDate.value.start));
  formData.set('et_dt', dateFormat(pickDate.value.end));
  formData.set('page', page.value);
  formData.set('size', 10);
  cmmncd.fetchCmmncdInfo(formData);
}

getStoreCmmncdInfo();

onMounted(() => {});
</script>

<style lang="scss" scoped>
.search-wrap {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 600px;
  input {
    border-style: none;
    border: transparent;
  }
}
</style>
