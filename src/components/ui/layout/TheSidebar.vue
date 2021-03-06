<template>
  <aside
    class="sidebar"
    :class="{
      open: $store.state.sidebarOpen,
    }"
  >
    <div class="sidebar__close-btn" @click="$store.commit('TOGGLE_SIDEBAR')">
      &times;
    </div>
    <ul class="sidebar__list">
      <li class="sidebar__item" v-for="link in links" :key="link.label">
        <router-link
          class="sidebar__link"
          @click.native="handleClick"
          :to="{ name: link.name }"
          >{{ link.label }}</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import store from "@/store";

export default {
  name: "TheSidebar",
  setup() {
    const links = [
      {
        label: "Home",
        name: "Home",
      },
      {
        label: "Create blog",
        name: "Home",
      },
      {
        label: "Create account",
        name: "Signup",
      },
      {
        label: "Log in",
        name: "Home",
      },
      {
        label: "All blogs",
        name: "Home",
      },
    ];

    const handleClick = () => {
      if (store.state.sidebarOpen) {
        store.commit("TOGGLE_SIDEBAR");
      }
    };

    return {
      links,
      handleClick,
    };
  },
};
</script>
