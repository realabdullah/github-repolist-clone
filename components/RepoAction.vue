<template>
  <div class="actions__tab">
    <div class="__actions">
      <label for="search">
        <input
          class="repo__search"
          type="search"
          placeholder="Find a repository..."
          ref="details"
        />
      </label>
      <div class="__filters">
        <label for="type">
          <select class="__select" name="type">
            <option>Type</option>
            <option 
              v-for="(type, i) in typeFilter" 
              :key="i" 
              :value="type"
            >
              {{ type }}
            </option>
          </select>
        </label>

        <label for="language">
          <select class="__select" name="language">
            <option>Language</option>
            <option
              v-for="(language, i) in languageFilter"
              :key="i"
              :value="language"
            >
              {{ language }}
            </option>
          </select>
        </label>

        <label for="sort">
          <select class="__select" name="sort">
            <option>Sort</option>
            <option 
              v-for="(sort, i) in sortFilter" 
              :key="i" 
              :value="sort"
            >
              {{ sort }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "RepoAction",

  computed: {
    ...mapState(["typeFilter", "languageFilter", "sortFilter"]),
  },
};
</script>