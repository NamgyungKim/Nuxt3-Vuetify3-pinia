<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="container flex justify-center mx-auto">
      <div class="flex flex-col">
        <div class="w-full">
          <div class="border-b border-gray-200 shadow">
            <table class="divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-2 text-xs text-gray-500">코드ID</th>
                  <th class="px-6 py-2 text-xs text-gray-500">코드명</th>
                  <th class="px-6 py-2 text-xs text-gray-500">설명</th>
                  <th class="px-6 py-2 text-xs text-gray-500">사용여부</th>
                  <th class="px-6 py-2 text-xs text-gray-500">순서</th>
                  <th class="px-6 py-2 text-xs text-gray-500">등록일</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Edit</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-300">
                <tr v-for="item in cmmncd.cmmncdInfo?.cmmncdList?.content" :key="item.cmmncd_id" class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ item.cmmncd_id }}
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      {{ item.cmmncd_nm }}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-500">{{ item.note }}</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ item.use_yn }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ item.sort_order }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ item.reg_dt }}
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div class="flex items-center">
                <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100" @click="changePage(1)">
                  <svg width="9" fill="currentColor" height="6" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>

                <button
                  v-for="page in totalPage"
                  :key="`btn_page_${page}`"
                  type="button"
                  :class="{
                    'border-t border-b': page % 2 === 1,
                    'text-indigo-500': page === currentPage,
                    border: page % 2 === 0,
                    'text-gray-600': page !== currentPage,
                  }"
                  class="w-full px-4 py-2 text-base bg-white hover:bg-gray-100"
                  @click="changePage(page)"
                >
                  {{ page }}
                </button>

                <button type="button" class="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100" @click="changePage(totalPage)">
                  <svg width="9" fill="currentColor" height="6" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app';
import { onMounted, ref } from '#imports';
import { useCmmncdStore } from '~/stores/cmmncd';

const cmmncd = useCmmncdStore();

let helloExample = JSON.parse('{"strval":"helloman", "idx":2}');

let currentPage = ref<number>(1);
let size = ref<number>(5);
let totalPage = ref<number | undefined>(1);

function getStoreCmmncdInfo() {
  cmmncd.fetchCmmncdInfo(currentPage.value, size.value);

  totalPage.value = cmmncd.cmmncdInfo?.totalPages;
}

function changePage(pages) {
  currentPage.value = page;
  getStoreCmmncdInfo();
}

getStoreCmmncdInfo();

function nextPage() {
  currentPage.value++;
  getStoreCmmncdInfo();
}

function prevPage() {
  currentPage.value--;
  getStoreCmmncdInfo();
}

/* const cmmncdApiUrl = '/Get_CmmncdList';
let cmmncdData = ref<CmmncdInfo>();
let cmmncdDataSecond:CmmncdInfo | undefined;

const { retDataObj, pending, error, refresh, data } = await useApiReq<CmmncdInfo>(cmmncdApiUrl, {
	method: 'post',
	params: {
		page: 1,
		size: 20
	}
});

cmmncdDataSecond = retDataObj.value?.responseData as CmmncdInfo; */

function setupTest() {
  alert('그냥 정의한 함수도 타나?');
}

const envVars = useRuntimeConfig();
console.log(envVars.currentEnv);
console.log(envVars.apiBaseUrl);

onMounted(() => {});
</script>

<style scoped></style>
