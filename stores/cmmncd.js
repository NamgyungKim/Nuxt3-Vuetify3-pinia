import { defineStore } from 'pinia';
import useApiReq from '~/composables/useApiReq';

const cmmncdApiUrl = '/GET_ContestList';

export const useCmmncdStore = defineStore('cmmncd', {
  state: () => ({
    itemList: [],
    totalPages: 1,
    isLoading: false,
  }),
  getters: {
    getItemList: (state) => state.itemList,
    getItemTotalPages: (state) => state.totalPages,
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    async fetchCmmncdInfo(payload) {
      this.isLoading = true;
      const { data, pending, error, refresh } = await useApiReq(cmmncdApiUrl, {
        method: 'post',
        body: payload,
      }).finally(() => {
        this.isLoading = false;
      });
      this.itemList = data._rawValue.resultList.content;
      this.totalPages = data._rawValue.resultList.totalPages;
    },
  },
});
