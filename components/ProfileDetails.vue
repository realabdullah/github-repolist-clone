<script lang="ts" setup>
const { user } = useStore();
</script>

<template>
	<section class="profile__details">
		<div class="__profile">
			<div class="user__profile">
				<div class="__avatar">
					<img :src="user?.avatarUrl" alt="avatar" />
					<div class="desktop__status">
						<span class="status__emoji" v-html="user?.status.emojiHTML"></span>
						<p class="status__text">{{ user?.status.message }}</p>
					</div>
				</div>
				<div class="user__details">
					<p class="user__name">{{ user?.name }}</p>
					<p class="__username">{{ user?.login }}</p>
				</div>
			</div>
			<div class="__status">
				<span class="status__emoji" v-html="user?.status.emojiHTML"></span>
				<p class="status__text">{{ user?.status.message }}</p>
			</div>
			<button class="follow__btn btn" aria-label="Follow Button">Follow</button>
			<p class="about__info">{{ user?.bio }}</p>
			<div class="__others">
				<div class="url__link">
					<UrlIcon />
					<NuxtLink :to="user?.websiteUrl" external>{{ user?.websiteUrl }}</NuxtLink>
				</div>
				<div class="__follow">
					<NuxtLink to="/" class="profile__link">
						<FollowIcon />
						<span class="follow__count">{{ user?.followers.totalCount }}</span>
						followers
					</NuxtLink>
					<NuxtLink to="/" class="profile__link">
						.
						<span class="follow__count">{{ user?.following.totalCount }}</span>
						following
					</NuxtLink>
				</div>
			</div>
			<button class="m__btn btn" aria-label="Follow Button">Follow</button>
			<NuxtLink to="/" class="profile__link">Block or Report</NuxtLink>
		</div>
	</section>
</template>
