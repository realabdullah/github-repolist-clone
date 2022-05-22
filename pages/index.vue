<template>
  <div>
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
  mounted () {
    this.$store.dispatch('getData')
  }
};
</script>
