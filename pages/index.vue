<script lang="ts" setup>
const route = useRoute();

const { getUserInfo } = useStore();

const username = Object.keys(route.query)[0] || "realabdullah";

await getUserInfo(username);
</script>

<template>
	<div class="page">
		<NavBar />
		<main>
			<DesktopAction />
			<div class="container">
				<ProfileDetails />
				<MobileAction />
				<Repo />
			</div>
		</main>
		<footer>
			<FooterContent />
		</footer>
	</div>
</template>

<style lang="scss" scoped>
main {
	width: 100%;
	max-width: 1500px;
	margin: 0 auto;
}
</style>
