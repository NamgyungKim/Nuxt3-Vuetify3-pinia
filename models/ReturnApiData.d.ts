import { Ref } from '@vue/reactivity';
import { FetchError } from 'ohmyfetch';

export interface ReturnApiData {
	responseError?: Ref<true | FetchError<any> | null>;
	responseData?: unknown | undefined | null;
}