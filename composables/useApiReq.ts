import { SearchParams } from 'ohmyfetch';
import { useFetch, useRuntimeConfig } from '#app';

export const runtimeConfig = () => {
  return useRuntimeConfig();
};

/* export default async <T>(apiUrl: string, opts?: {
	method: string, params?: SearchParams | undefined, body?: BodyInit | Record<string, any> | null | undefined
}) => {
	return useAsyncData(() => $fetch(apiUrl, {
		baseURL: runtimeConfig().apiBaseUrl,
		method: opts?.method,
		params: opts?.params,
		body: opts?.body,
		onRequest({ request, options }) {
			// options.headers = options.headers || {};
			console.log(`[useApiReq] : API 요청`);
			console.log(`[useApiReq] : ${request}`);
		},
		onRequestError({ request, options, error }) {
			console.log(`[useApiReq] : 요청중 오류 발생`);
			console.log(error);
		},
		onResponse({ request, response, options }) {
			console.log(`[useApiReq] : 응답 완료`);
			console.log(`[useApiReq] : ${response.status}`);
		},
		onResponseError({ request, response, options }) {
			console.log(`[useApiReq] : 응답중 오류 발생`);
			console.log(`[useApiReq] : ${response.status}`);
		},
	}));
} */

export default async <T>(
  apiUrl: string,
  opts?: {
    method: string;
    params?: SearchParams | undefined;
    body?: BodyInit | Record<string, any> | null | undefined;
  },
) => {
  return useFetch(apiUrl, {
    baseURL: await runtimeConfig().apiBaseUrl,
    method: opts?.method,
    params: opts?.params,
    body: opts?.body,
    initialCache: false,
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      // console.log(`[useApiReq] : API 요청`);
      // console.log(`[useApiReq] : ${request}`);
    },
    onRequestError({ request, options, error }) {
      // console.log(`[useApiReq] : 요청중 오류 발생`);
      // console.log(error);
    },
    onResponse({ request, response, options }) {
      // console.log(`[useApiReq] : 응답 완료`);
      // console.log(`[useApiReq] : ${response.status}`);
      // return response._data;
    },
    onResponseError({ request, response, options }) {
      console.log(`[useApiReq] : 응답중 오류 발생`);
      console.log(`[useApiReq] : ${response.status}`);
    },
  });
};

/* export default async <T>(apiUrl: string, opts?: {
	method: string, params?: SearchParams | undefined, body?: BodyInit | Record<string, any> | null | undefined
}) => {
	let retDataObj = ref<ReturnApiData>();

	console.log(`[useApiReq - params] : `);
	console.log(opts?.params);

	const { data, pending, error, refresh } = await useLazyFetch(apiUrl, {
		baseURL: runtimeConfig().apiBaseUrl,
		method: opts?.method,
		params: opts?.params,
		body: opts?.body,
		server: false,
		onRequest({ request, options }) {
			// options.headers = options.headers || {};
			console.log(`[useApiReq] : API 요청`);
			console.log(`[useApiReq] : ${request}`);
		},
		onRequestError({ request, options, error }) {
			console.log(`[useApiReq] : 요청중 오류 발생`);
			console.log(error);
		},
		onResponse({ request, response, options }) {
			console.log(`[useApiReq] : 응답 완료`);
			console.log(`[useApiReq] : ${response.status}`);
		},
		onResponseError({ request, response, options }) {
			console.log(`[useApiReq] : 응답중 오류 발생`);
			console.log(`[useApiReq] : ${response.status}`);
		},

	});

	console.log('error =============== ');
	console.log(error);
	console.log('error =============== ');
	if (typeof data.value === 'string') {
		retDataObj.value = {
			responseError: error,
			responseData: JSON.parse(data.value) as T | undefined
		}
	} else {
		retDataObj.value = {
			responseError: error,
			responseData: data.value as T | undefined
		}
	}

	console.log('===========================디버깅');
	console.log(data);
	console.log(retDataObj);
	console.log(typeof data.value);

	return { retDataObj, data, pending, error, refresh };
} */
