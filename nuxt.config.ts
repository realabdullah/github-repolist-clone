// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/css/main.css"],
	modules: ["@nuxtjs/apollo", "@pinia/nuxt"],
	apollo: {
		clients: {
			default: {
				httpEndpoint: process.env.API_URL!,
				authType: "Bearer",
				authHeader: "authorization",
				tokenName: "apollo:auth.token",
			},
		},
	},
	imports: {
		dirs: ["store"],
	},
	pinia: {
		autoImports: ["defineStore"],
	},
	devServer: {
		port: 4000,
	},
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			accessToken: process.env.ACCESS_TOKEN,
		},
	},
});
