<template>
  <div class="actions__tab">
    <div class="__actions">
      <label for="search">
        <input
          class="repo__search"
          type="search"
          placeholder="Find a repository..."
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
                    <Close />
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
                    <Close />
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
        </client-only>
      </div>
    </div>
  </div>
</template>