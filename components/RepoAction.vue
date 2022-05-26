<template>
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
</template>