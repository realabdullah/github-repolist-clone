<script lang="ts" setup>
const typeFilter = ["All", "Sources", "Forks", "Archived", "Mirrors", "Templates"];
const languageFilter = ["All", "Vue", "JavaScript", "SCSS", "HTML", "CSS", "Python", "Jupyter Notebook"];
const sortFilter = ["Last Updated", "Name", "Stars"];
</script>

<template>
	<div class="actions__tab">
		<div class="__actions">
			<label for="search">
				<input ref="details" class="repo__search" type="text" placeholder="Find a repository..." />
			</label>
			<div class="__filters">
				<client-only>
					<details class="details">
						<summary>
							<div class="__select">
								Type
								<span class="dropdown__arrow"></span>
							</div>
						</summary>
						<div class="select__modal">
							<div class="__options">
								<div class="options__header">
									<span class="options__header__text">Select Type</span>
									<span class="__close">
										<Close />
									</span>
								</div>
								<div v-for="(type, i) in typeFilter" :key="i" class="__option">
									<input :id="type" type="radio" :value="type" />
									<label :for="type">{{ type }}</label>
								</div>
							</div>
						</div>
					</details>

					<details class="details">
						<summary>
							<div class="__select">
								Language
								<span class="dropdown__arrow"></span>
							</div>
						</summary>
						<div class="select__modal">
							<div class="__options">
								<div class="options__header">
									<span class="options__header__text">Select Language</span>
									<span class="__close">
										<Close />
									</span>
								</div>
								<div v-for="(language, i) in languageFilter" :key="i" class="__option">
									<input :id="language" type="radio" :value="language" />
									<label :for="language">{{ language }}</label>
								</div>
							</div>
						</div>
					</details>

					<details class="details">
						<summary>
							<div class="__select">
								Sort
								<span class="dropdown__arrow"></span>
							</div>
						</summary>
						<div class="select__modal">
							<div class="__options">
								<div class="options__header">
									<span class="options__header__text">Select Order</span>
									<span class="__close">
										<Close />
									</span>
								</div>
								<div v-for="(sort, i) in sortFilter" :key="i" class="__option">
									<input :id="sort" type="radio" :value="sort" />
									<label :for="sort">{{ sort }}</label>
								</div>
							</div>
						</div>
					</details>
				</client-only>
			</div>
		</div>
	</div>
</template>
