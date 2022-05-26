<template>
  <div :class="userTheme ? 'dark-mode' : 'light-mode'">
    <NavBar />
    <main>
      <DesktopAction />
      <div class="container">
        <ProfileDetails />
        <MobileAction />
        <RepoDetails />
      </div>
    </main>
    <footer>
      <FooterContent />
    </footer>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      mode: '',
      userTheme: ''
    }
  },
  
  methods: {
    getMediaPreference () {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (hasDarkPreference) {
        this.mode = 'Dark Mode'
        console.log(this.mode)
        return "dark-theme"
      } else {
        this.mode = 'Light Mode'
        console.log(this.mode)
        return "light-theme"
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },

    toggleTheme () {
      const activeTheme = localStorage.getItem("user-theme")
      if (activeTheme === "light-mode") {
        setTheme("dark-mode")
        this.mode = "Dark Mode"
      } else {
        setTheme("light-mode")
        this.mode = "Light Mode"
      }
    }
  },

  mounted() {
    const initUserTheme = this.getMediaPreference()
    this.setTheme(initUserTheme)
  }
};
</script>
