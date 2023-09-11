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
			<SearchForm />
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
