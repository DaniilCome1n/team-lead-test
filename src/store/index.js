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
    GET_USER: (context, payload) => {
      //Получаем от сервера объект с данными о пользователебчьи логин и пароль совпали
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
      //Получаем от сервера массив постов
      Axios.get("http://localhost:3000/posts")
        .then(response => {
          const posts = response.data;
          context.commit("GET_POSTS", posts);
        })
        .catch(error => {
          console.log(error);
        });
    },

    SET_NEW_POST: (context, payload) => {
      //Отправляем на сервер новый пост
      Axios.post("http://localhost:3000/posts", payload)
        .then(() => {
          Axios.get("http://localhost:3000/posts").then(response => {
            const posts = response.data;
            context.commit("GET_POSTS", posts);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    SET_EDIT_POST(context, payload) {
      context.commit("SET_EDIT_POST", payload);
    },

    SET_CHANGES(context, payload) {
      //Отправляем на сервер изменения редактированного поста
      let id = payload.id;
      Axios.patch(`http://localhost:3000/posts/${id}`, payload)
        .then(() => {
          Axios.get("http://localhost:3000/posts").then(response => {
            const posts = response.data;
            context.commit("GET_POSTS", posts);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    DELETE_POST(context, payload) {
      //Удаляем пост с сервера
      let id = payload.id;
      Axios.delete(`http://localhost:3000/posts/${id}`, payload)
        .then(() => {
          Axios.get("http://localhost:3000/posts").then(response => {
            const posts = response.data;
            context.commit("GET_POSTS", posts);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  modules: {}
});
