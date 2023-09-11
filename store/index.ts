import { GET_USER } from "@/graphql/queries/user";

export const useStore = defineStore("store", () => {
	const user = ref<User>();
	const repositories = ref<Repositories>();

	const getUserInfo = async (login: string) => {
		try {
			const { data, error } = await useAsyncQuery<ApiResponse>(GET_USER, { login });

			if (error.value) throw new Error(error.value.message);

			user.value = data.value.user;
			repositories.value = data.value.user.repositories;
		} catch (error) {
			throw createError({ statusCode: 500 });
		}
	};

	return { getUserInfo, user, repositories };
});
