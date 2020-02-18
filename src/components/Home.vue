<template>
  <div>
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/posts' }">Posts</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item v-if="isUserLoggedIn" tag="router-link" :to="{ path: '/login' }">Login</b-navbar-item>
        <b-navbar-item v-else @click="logOut">Выйти</b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>
  

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$store.commit("LOG_OUT_USER");
    }
  },
  computed: {
    isUserLoggedIn() {
      let obj = this.$store.state.user;
      return Object.keys(obj).length === 0;
    }
  }
};
</script>