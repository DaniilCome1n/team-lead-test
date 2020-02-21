import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PostsView from "../views/PostsView.vue";
import NewPostView from "../views/NewPostView.vue";
import EditPostView from "../views/EditPostView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView
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
  },
  {
    path: "/posts/editpost",
    name: "EditPostView",
    component: EditPostView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
