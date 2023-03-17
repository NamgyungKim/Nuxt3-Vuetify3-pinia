// 스크립트를 통해 --dotenv .env.prd 파일을 지정해주도록 한다.
// 위의 기능을 위해, 아래와 같이 한번 config 함수를 호출시켜줘야 한다.
// require('dotenv').config();
// 위 기능 작동 안됨. 아래로 변경.
// console.log(process.env.PHASE);
// require('dotenv').config({filename: `.env.${process.env.PHASE}`});

// https://v3.nuxtjs.org/api/configuration/nuxt.config\

export default defineNuxtConfig({
	// Global Head
	app: {
		head: {
			charset: 'utf-8',
			// viewport: 'width=500, initial-scale=1',
			title: 'Nuxt3 프레임워크',
			meta: [
				{ name: 'Nuxt3, Pinia, TypeScript 로 구성된 프레임워크', content: '개발을 위한 기본 프레임워크'}
			]
		}
	},
	// modules
	modules: [
		'@pinia/nuxt',
	],
	build: {
		transpile: ['vuetify'],
	},
	css: [
		'vuetify/lib/styles/main.sass',
		'mdi/css/materialdesignicons.min.css',
		'~/assets/css/style.css',
	],
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		// plugins: [eslintPlugin()],
	},

	// plugins
	plugins: [

	],

	runtimeConfig: {
		public: {
			currentEnv: process.env.NUXT_CURRENT_ENV,
			apiBaseUrl: process.env.NUXT_PUBLIC_BASE_URL,
		},
	},
	// ssr: true,
});
