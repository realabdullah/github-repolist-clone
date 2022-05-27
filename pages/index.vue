<template>
  <div>
    <NavBar />
    <main>
      <DesktopAction />
      <div class="container">
        <ProfileDetails />
        <MobileAction />
        <Repo />
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
};
</script>
