<script lang="ts" setup>
const { repositories } = useStore();
</script>

<template>
	<section class="repo__details">
		<RepoAction />
		<div class="repo__list">
			<template v-if="repositories?.edges && repositories.edges.length > 0">
				<RepoList v-for="repo in repositories?.edges" :key="repo.node.id" :repository="repo.node" />
			</template>
		</div>
		<PaginateButtons />
	</section>
</template>
