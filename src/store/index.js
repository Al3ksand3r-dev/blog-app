import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarOpen: false,
    isLoading: false,
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    SET_LOADER(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {},
});
