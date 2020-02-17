import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test"
  },
  mutations: {
    testMut(state) {
      state.test = "Bingo";
    }
  },
  actions: {
    asyncTestMut(context) {
      setTimeout(() => {
        context.commit("testMut");
      }, 3000);
    }
  },
  modules: {}
});
