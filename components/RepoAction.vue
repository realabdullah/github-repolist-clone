<template>
  <div class="actions__tab">
    <div class="__actions">
      <label for="search">
        <input
          class="repo__search"
          type="text"
          placeholder="Find a repository..."
          ref="details"
        />
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
                <div class="__option" v-for="(type, i) in typeFilter" :key="i">
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
                  <span class="options__header__text"
                    >Select Language</span
                  >
                  <span class="__close">
                    <Close />
                  </span>
                </div>
                <div
                  class="__option"
                  v-for="(language, i) in languageFilter"
                  :key="i"
                >
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
                <div class="__option" v-for="(sort, i) in sortFilter" :key="i">
                  <input :id="sort" type="radio" :value="sort" />
                  <label :for="sort">{{ sort }}</label>
                </div>
              </div>
            </div>
          </details>
        </client-only>


        <!-- <label for="type">
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
       -->
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