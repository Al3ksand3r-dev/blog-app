<template>
  <div id="app">
    <the-navbar />
    <the-sidebar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/ui/layout/TheFooter.vue";
import TheNavbar from "./components/ui/layout/TheNavbar.vue";
import TheSidebar from "./components/ui/layout/TheSidebar.vue";
export default {
  components: { TheNavbar, TheSidebar, TheFooter },
  name: "App",
};
</script>
