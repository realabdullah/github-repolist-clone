<template>
  <section class="repo__details">
    <div class="actions__tab">
      <div class="__actions">
        <label for="search">
          <input class="repo__search" placeholder="Find a repository..." />
        </label>
        <div class="__filters">
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
                    <svg
                      aria-label="Close menu"
                      aria-hidden="false"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="__option">
                  <input id="all" type="radio" value="all" checked />
                  <label for="all">All</label>
                </div>
                <div class="__option">
                  <input id="Sources" type="radio" value="Sources" />
                  <label for="Sources">Sources</label>
                </div>
                <div class="__option">
                  <input id="Forks" type="radio" value="Forks" />
                  <label for="Forks">Forks</label>
                </div>
                <div class="__option">
                  <input id="Archived" type="radio" value="Archived" />
                  <label for="Archived">Archived</label>
                </div>
                <div class="__option">
                  <input id="Mirrors" type="radio" value="Mirrors" />
                  <label for="Mirrors">Mirrors</label>
                </div>
                <div class="__option">
                  <input id="Templates" type="radio" value="Templates" />
                  <label for="Templates">Templates</label>
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
                    <svg
                      aria-label="Close menu"
                      aria-hidden="false"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="__option">
                  <input id="all language" type="radio" value="all" checked />
                  <label for="all language">All</label>
                </div>
                <div class="__option">
                  <input id="Vue" type="radio" value="Vue" />
                  <label for="Vue">Vue</label>
                </div>
                <div class="__option">
                  <input id="JavaScript" type="radio" value="JavaScript" />
                  <label for="JavaScript">JavaScript</label>
                </div>
                <div class="__option">
                  <input id="SCSS" type="radio" value="SCSS" />
                  <label for="SCSS">SCSS</label>
                </div>
                <div class="__option">
                  <input id="HTML" type="radio" value="HTML" />
                  <label for="HTML">HTML</label>
                </div>
                <div class="__option">
                  <input id="CSS" type="radio" value="CSS" />
                  <label for="CSS">CSS</label>
                </div>
                <div class="__option">
                  <input id="Python" type="radio" value="Python" />
                  <label for="Python">Python</label>
                </div>
                <div class="__option">
                  <input
                    id="Jupyter Notebook"
                    type="radio"
                    value="Jupyter Notebook"
                  />
                  <label for="Jupyter Notebook">Jupyter Notebook</label>
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
                    <svg
                      aria-label="Close menu"
                      aria-hidden="false"
                      role="img"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="__option">
                  <input
                    id="Last Updated"
                    type="radio"
                    value="Last Updated"
                    checked
                  />
                  <label for="Last Updated">Last Updated</label>
                </div>
                <div class="__option">
                  <input id="Name" type="radio" value="Name" />
                  <label for="Name">Name</label>
                </div>
                <div class="__option">
                  <input id="Stars" type="radio" value="Stars" />
                  <label for="Stars">Stars</label>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>

    <div class="repo__list">
      <div
        class="__repo"
        v-for="(repo, i) in repoData.repositories.edges"
        :key="i"
      >
        <div class="repo__detail">
          <div class="repo__name">
            <a :href="repo.node.url" class="repo__title">{{
              repo.node.name
            }}</a>
            <span class="__visibility">{{ repo.node.visibility }}</span>
          </div>
          <div class="repo__info">
            <div
              class="__technology"
              v-for="(value, key) in repo.node.primaryLanguage"
              :key="key"
            >
              <div
                class="tech__color"
                v-if="key === 'color'"
                :style="{ background: value }"
                style="margin-right: -30px"
              ></div>
              <p class="__lang" v-if="key === 'name'">{{ value }}</p>
            </div>
            <p class="repo__timeline">
              Updated on {{ $moment(repo.node.updatedAt).format("LL") }}
            </p>
          </div>
        </div>
        <!-- <div class="repo__graph">
          <svg width="155" height="30">
            <defs>
              <linearGradient
                id="gradient-475935328"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stop-color="var(--color-calendar-graph-day-L1-bg)"
                ></stop>
                <stop
                  offset="10%"
                  stop-color="var(--color-calendar-graph-day-L2-bg)"
                ></stop>
                <stop
                  offset="25%"
                  stop-color="var(--color-calendar-graph-day-L3-bg)"
                ></stop>
                <stop
                  offset="50%"
                  stop-color="var(--color-calendar-graph-day-L4-bg)"
                ></stop>
              </linearGradient>
              <mask
                id="sparkline-475935328"
                x="0"
                y="0"
                width="155"
                height="28"
              >
                <polyline
                  transform="translate(0, 28) scale(1,-1)"
                  points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,1 129,1 132,13 135,1 138,1 141,1 144,1 147,1 150,1 153,1 "
                  fill="transparent"
                  stroke="#8cc665"
                  stroke-width="2"
                ></polyline>
              </mask>
            </defs>

            <g transform="translate(0, -6)">
              <rect
                x="0"
                y="-2"
                width="155"
                height="30"
                style="
                  stroke: none;
                  fill: url(#gradient-475935328);
                  mask: url(#sparkline-475935328);
                "
              ></rect>
            </g>
          </svg>
        </div> -->
      </div>
    </div>

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
  </section>
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