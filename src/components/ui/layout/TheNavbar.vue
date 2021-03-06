<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__link">
      Blog
      <sub>App</sub>
    </router-link>
    <div class="navbar__hamburger" @click="$store.commit('TOGGLE_SIDEBAR')">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  setup() {},
};
</script>
