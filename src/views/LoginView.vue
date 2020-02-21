<template>
  <div class="mainBox">
    <login></login>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "LoginView",
  components: { Login }
};
</script>
<style lang="scss">
.mainBox {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>