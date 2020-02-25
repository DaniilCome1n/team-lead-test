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
      //Помещаем в стэйт объект с данными залогиненного пользователя
      state.user = user;
    },

    LOG_OUT_USER(state) {
      //Удаляем данные залогинненого пользователя из стэйта
      state.user = {};
      state.role = "";
      state.userId = "";
    },

    GET_POSTS(state, posts) {
      //помещаем в стэйт массив с постами
      state.posts = posts;
    },

    GET_ROLE(state, role) {
      //Помещаем в стэйт роль текущего пользователя
      state.role = role;
    },

    GET_USER_ID(state, userId) {
      //Помещаем в стэйт ID залогиненного пользователя
      state.userId = userId;
    },

    SET_EDIT_POST(state, editPost) {
      //помещаем в стэйт пост,который в дальнейшем будет редактироваться
      state.editPost = editPost;
    }
  },
  actions: {
    GET_USER: async (context, payload) => {
      //Получаем от сервера объект с данными о пользователебчьи логин и пароль совпали
      try {
        let login = payload.email;
        let password = payload.password;
        let response = await Axios.get(
          `http://localhost:3000/users?login=${login}&password=${password}`
        );
        const user = response.data[0];
        const role = response.data[0].role;
        const userId = response.data[0].id;
        context.commit("GET_USER", user);
        context.commit("GET_ROLE", role);
        context.commit("GET_USER_ID", userId);
      } catch (error) {
        // console.error(error);
      }
    },

    GET_POSTS: async context => {
      //Получаем от сервера массив постов
      try {
        let response = await Axios.get("http://localhost:3000/posts");
        const posts = response.data;
        context.commit("GET_POSTS", posts);
      } catch (error) {
        // console.error(error);
      }
    },

    SET_NEW_POST: async (context, payload) => {
      //Отправляем на сервер новый пост
      try {
        await Axios.post("http://localhost:3000/posts", payload);
      } catch (error) {
        // console.error(error);
      }
      try {
        await context.dispatch("GET_POSTS");
      } catch (error) {
        // console.error(error);
      }
    },

    SET_EDIT_POST(context, payload) {
      context.commit("SET_EDIT_POST", payload);
    },

    SET_CHANGES: async (context, payload) => {
      //Отправляем на сервер изменения редактированного поста
      try {
        let id = payload.id;
        await Axios.patch(`http://localhost:3000/posts/${id}`, payload);
      } catch (error) {
        // console.error(error);
      }
      try {
        await context.dispatch("GET_POSTS");
      } catch (error) {
        // console.error(error);
      }
    },

    DELETE_POST: async (context, payload) => {
      //Удаляем пост с сервера
      try {
        let id = payload.id;
        await Axios.delete(`http://localhost:3000/posts/${id}`, payload);
      } catch (error) {
        // console.error(error);
      }
      try {
        await context.dispatch("GET_POSTS");
      } catch (error) {
        // console.error(error);
      }
    }
  },

  modules: {}
});
