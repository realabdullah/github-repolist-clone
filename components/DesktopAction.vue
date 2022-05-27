<template>
  <ul class="desktop__action actions__tab__one">
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
        <span class="__count">{{ repoData.repositories.totalCoun }}</span>
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
        <span class="__count">{{
          repoData.starredRepositories.totalCoun
        }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DesktopAction",
  computed: {
    ...mapState(["repoData"]),
  },
};
</script>