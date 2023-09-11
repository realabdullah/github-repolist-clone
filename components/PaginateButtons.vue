<script lang="ts" setup>
const { repositories } = useStore();
</script>

<template>
	<div class="__pagination">
		<button class="btn paginate__ paginate__left" :class="{ disabled: repositories?.pageInfo.hasPreviousPage }" :disabled="!repositories?.pageInfo.hasPreviousPage" aria-label="Previous">
			Previous
		</button>
		<button class="btn paginate__ paginate__right" :class="{ disabled: !repositories?.pageInfo.hasNextPage }" :disabled="!repositories?.pageInfo.hasNextPage" aria-label="Next">Next</button>
	</div>
</template>
