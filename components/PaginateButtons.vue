<template>
  <div class="__pagination">
    <button
      class="btn paginate__"
      :class="
        repoData.repositories.pageInfo.hasPreviousPage ? '' : 'disabled'
      "
      :disabled="repoData.repositories.pageInfo.hasPreviousPage"
      aria-label="Previous"
    >
      Previous
    </button>
    <button
      class="btn paginate__"
      :class="!repoData.repositories.pageInfo.hasNextPage ? 'disabled' : ''"
      :disabled="!repoData.repositories.pageInfo.hasNextPage"
      aria-label="Next"
      @click="this.getMore"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    getMore() {
      this.$store.dispatch("getMoreRepoDetails");
    },
  },

  computed: {
    ...mapState(["repoData"]),
  },
};
</script>