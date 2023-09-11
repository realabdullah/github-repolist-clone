<script lang="ts" setup>
defineProps<{
	repository: Repository;
}>();
</script>

<template>
	<div class="__repo">
		<div class="repo__detail">
			<div class="repo__name">
				<NuxtLink :to="repository.url" class="repo__title" external>{{ repository.name }}</NuxtLink>
				<span class="__visibility">{{ repository.visibility }}</span>
			</div>
			<p class="__description">{{ repository.description }}</p>
			<div class="__labels">
				<NuxtLink v-for="topic in repository.repositoryTopics.nodes" :key="topic.topic.id" :to="topic.url" class="__label" external>{{ topic.topic.name }}</NuxtLink>
			</div>
			<div class="repo__info">
				<div class="__technology">
					<div v-if="repository.primaryLanguage.color === 'color'" class="tech__color" :style="{ background: repository.primaryLanguage.color }" style="margin-right: -30px"></div>
					<p v-if="repository.primaryLanguage.name === 'name'" class="__lang">{{ repository.primaryLanguage.name }}</p>
				</div>
				<p class="repo__timeline">Updated on {{ repository.updatedAt }}</p>
			</div>
		</div>
	</div>
</template>
