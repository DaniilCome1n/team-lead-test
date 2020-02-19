import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    posts: [],
    role: "",
    userId: "",
    editPost: {}
  },
  getters: {},

  mutations: {
    GET_USER(state, user) {
      state.user = user;
    },
    LOG_OUT_USER(state) {
      state.user = {};
      state.role = "";
      state.userId = "";
    },
    GET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_ROLE(state, role) {
      state.role = role;
    },
    GET_USER_ID(state, userId) {
      state.userId = userId;
    },
    SET_NEW_POST(state, newPost) {
      state.posts.push(newPost);
    },
    SET_EDIT_POST(state, editPost) {
      state.editPost = editPost;
    },
    CHANGE_EDITED_POST(state) {
      state.posts.map((item, editedPost) => {
        if (item.id == editedPost.id) {
          item = editedPost;
        }
      });
    }
  },
  actions: {
    GET_USER: (context, payload) => {
      let login = payload.email;
      let password = payload.password;
      Axios.get(
        `http://localhost:3000/users?login=${login}&password=${password}`
      )
        .then(response => {
          const user = response.data[0];
          const role = response.data[0].role;
          const userId = response.data[0].id;
          context.commit("GET_USER", user);
          context.commit("GET_ROLE", role);
          context.commit("GET_USER_ID", userId);
        })
        .catch(error => {
          console.log(error);
        });
    },
    GET_POSTS: context => {
      Axios.get("http://localhost:3000/posts")
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
    SET_NEW_POST: (context, payload) => {
      Axios.post("http://localhost:3000/posts", payload)
        .then(response => {
          const newpost = response.data;
          context.commit("SET_NEW_POST", newpost);
        })
        .catch(error => {
          console.log(error);
        });
    },
    SET_EDIT_POST(context, payload) {
      context.commit("SET_EDIT_POST", payload);
    },
    SET_CHANGES(context, payload) {
      let id = payload.id;
      Axios.patch(`http://localhost:3000/posts/${id}`, payload).then(() => {
        Axios.get("http://localhost:3000/posts").then(response => {
          // console.log(response);
          console.log(response.status);
          const posts = response.data;
          context.commit("GET_POSTS", posts);
        });
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
