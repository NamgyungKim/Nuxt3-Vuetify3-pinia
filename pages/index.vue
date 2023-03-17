<template>
  <v-card class="ma-4">
    <div class="d-flex">
      <v-menu v-model="menu" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-text-field :value="dateFormat(pickDate.start) + ' ~ ' + dateFormat(pickDate.end)" type="text" prepend-icon="mdi-calendar" variant="outlined" readonly v-bind="props" />
        </template>
        <div>
          <DatePicker v-model.range="pickDate" locale="ko" />
        </div>
      </v-menu>
      <v-btn @click="getStoreCmmncdInfo">검색</v-btn>
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
import { Calendar, DatePicker } from 'v-calendar';

const cmmncd = useCmmncdStore();
const page = ref(1);
const menu = ref(false);
let preDate = new Date();
preDate.setDate(preDate.getDate() - 7);

const pickDate = ref({
  start: preDate,
  end: new Date(),
});

const dateFormat = (data) => {
  const objDate = new Date(data);
  const year = objDate.getFullYear();
  const month = objDate.getMonth() + 1 < 10 ? '0' + (objDate.getMonth() + 1) : objDate.getMonth() + 1;
  const date = objDate.getDate() < 10 ? '0' + objDate.getDate() : objDate.getDate();
  return `${year}-${month}-${date}`;
};

console.log(page.value);
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

<style scoped></style>
