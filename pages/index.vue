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
};
</script>


import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import re
import string
