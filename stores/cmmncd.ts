import { defineStore } from 'pinia';
import { useFetch, useRuntimeConfig } from '#app';
import { CmmncdInfo } from '~/models/cmmncd/CmmncdInfo';
import { useApiReq } from '#imports';
import { AsyncDataExecuteOptions } from '#app/composables/asyncData';
import { Ref } from 'vue';

const cmmncdApiUrl = '/Get_CmmncdList';

interface ICmmncdState {
	loadingStatus: boolean | undefined;
	cmmncdInfo: CmmncdInfo | undefined | null;
}

export const useCmmncdStore = defineStore('cmmncd', {
	state: (): ICmmncdState => ({
		loadingStatus: false,
		cmmncdInfo: null,
	}),
	getters: {
		getCmmncdInfo: (state) => state.cmmncdInfo,
	},
	actions: {
		async fetchCmmncdInfo(page: number, size: number) {
			const { data, pending, error, refresh } = await useApiReq<CmmncdInfo>(cmmncdApiUrl, {
				method: 'post',
				params: {
					page: page,
					size: size,
				},
			});

			this.loadingStatus = pending.value;
			if (typeof data.value === 'string') {
				this.cmmncdInfo = JSON.parse(data.value) as CmmncdInfo;
			} else {
				this.cmmncdInfo = data.value as CmmncdInfo;
			}

			console.log(typeof data.value);
			console.log(typeof this.cmmncdInfo);

		},
	},
});