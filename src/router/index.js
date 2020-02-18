import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import LoginView from "../views/LoginView.vue";
import PostsView from "../views/PostsView.vue";
import NewPostView from "../views/NewPostView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView
  },
  {
    path: "/posts",
    name: "PostView",
    component: PostsView
  },
  {
    path: "/posts/newpost",
    name: "NewPostView",
    component: NewPostView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
