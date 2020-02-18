import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    posts: [],
    role: ""
  },
  getters: {},

  mutations: {
    GET_USER(state, user) {
      state.user = user;
    },
    LOG_OUT_USER(state) {
      state.user = {};
      state.role = "";
    },
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_ROLE(state, role) {
      state.role = role;
    }
  },
  actions: {
    GET_USER: async (context, payload) => {
      let login = payload.email;
      let password = payload.password;
      await Axios.get(
        `http://localhost:3000/users?login=${login}&password=${password}`
      )
        .then(response => {
          const user = response.data[0];
          const role = response.data[0].role;
          context.commit("GET_USER", user);
          context.commit("GET_ROLE", role);
        })
        .catch(error => {
          console.log(error);
        });
    },
    GET_POSTS: async context => {
      await Axios.get("http://localhost:3000/posts")
        .then(response => {
          // console.log(response);
          console.log(response.status);
          const posts = response.data;
          context.commit("GET_POSTS", posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    SET_NEW_POST: async (context, payload) => {
      await Axios.post("http://localhost:3000/posts", payload)
        .then(response => {
          // console.log(response);
          console.log(response.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
    // GET_USER: async context => {
    //   let { data } = await Axios.get("http://localhost:3000/users");
    //   console.log(data);
    //   context.commit("SET_USERS", data);
    // },
  },

  modules: {}
});
