<template>
  <div>
    <b-navbar type="is-primary">
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/posts' }">Posts</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item v-if="isUserLoggedIn" tag="router-link" :to="{ path: '/login' }">Login</b-navbar-item>
        <b-navbar-item v-else @click="logOut">Logout</b-navbar-item>
      </template>
    </b-navbar>
    <router-view class="main-box"></router-view>
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
<style lang="scss" >
.main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>