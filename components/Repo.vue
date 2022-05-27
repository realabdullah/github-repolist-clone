<template>
  <section class="repo__details">
    <RepoAction />
    <div class="repo__list">
      <RepoList
        v-for="(repo, i) in repoData.repositories.edges"
        :key="i"
        :repo="repo"
      />
    </div>
    <PaginateButtons />
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Repo",
  computed: {
    ...mapState(["repoData"]),
  },
};
</script>