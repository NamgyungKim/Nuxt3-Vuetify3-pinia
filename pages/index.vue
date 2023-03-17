<template>
  <div>
    <v-data-table :headers="headers" :items="cmmncd.getItemList" :loading="cmmncd.getIsLoading" item-value="name" class="elevation-1" hide-default-footer disable-pagination>
      <template #item="{ item }">
        <tr>
          <td>{{ item.league_ko_nm }}</td>
          <td>{{ item.fixture_status }}</td>
          <td>{{ item.liveIn }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from '#app';
import { onMounted } from '#imports';
import { useCmmncdStore } from '~/stores/cmmncd';

const cmmncd = useCmmncdStore();
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
  formData.set('st_dt', '2023-01-30');
  formData.set('et_dt', '2023-01-30');
  formData.set('page', 1);
  formData.set('size', 10);
  cmmncd.fetchCmmncdInfo(formData).then(() => {
    console.log(cmmncd.getIsLoading);
    console.log(cmmncd.getItemList);
    console.log(cmmncd.getItemTotalPages);
  });
}

getStoreCmmncdInfo();

onMounted(() => {});
</script>

<style scoped></style>
