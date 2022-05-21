<template>
  <header>
    <div class="left__header">
      <div class="__logo">
        <HeaderLogo />
      </div>
      <nav>
        <ul class="left__nav">
          <li>
            <a class="nav__links" href="#">Product</a>
          </li>
          <li>
            <a class="nav__links" href="#">Team</a>
          </li>
          <li>
            <a class="nav__links" href="#">Enterprise</a>
          </li>
          <li>
            <a class="nav__links" href="#">Explore</a>
          </li>
          <li>
            <a class="nav__links" href="#">Marketplace</a>
          </li>
          <li>
            <a class="nav__links" href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right__header">
      <form class="__search">
        <label for="search">
          <input type="search" placeholder="Search" />
          <svg
            class="search__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </label>
      </form>
      <nav class="account__actions">
        <button class="btn sign__in" aria-label="Sign In">
          <a class="nav__links" href="#">Sign In</a>
        </button>
        <button class="btn sign__up" aria-label="Sign Up">
          <a class="nav__links" href="#">Sign Up</a>
        </button>
      </nav>
      <button class="btn menu__btn" aria-label="Menu">
        <MobileMenu />
      </button>
    </div>
  </header>
</template>