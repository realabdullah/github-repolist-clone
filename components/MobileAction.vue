<script lang="ts" setup>
const { repositories, user } = useStore();
</script>

<template>
	<ul class="mobile__action actions__tab__one">
		<li>
			<a class="tab__link" href="#">
				<OverviewIcon />
				<span class="action__title">Overview</span>
			</a>
		</li>
		<li>
			<a class="tab__link active" href="#">
				<RepoIcon />
				<span class="action__title">Repositories</span>
				<span class="__count">
					{{ repositories?.totalCount }}
				</span>
			</a>
		</li>
		<li>
			<a class="tab__link" href="#">
				<ProjectIcon />
				<span class="action__title">Projects</span>
			</a>
		</li>
		<li>
			<a class="tab__link" href="#">
				<PackageIcon />
				<span class="action__title">Packages</span>
			</a>
		</li>
		<li>
			<a class="tab__link" href="#">
				<StarsIcon />
				<span class="action__title">Stars</span>
				<span class="__count">
					{{ user?.starredRepositories.totalCount }}
				</span>
			</a>
		</li>
	</ul>
</template>
