<template>
  <section class="section">
    <form action="#" @submit.prevent="login">
      <b-field label="Email">
        <b-input type="email" placeholder="Enter your Email" maxlength="30" v-model="email"></b-input>
      </b-field>

      <b-field label="Пароль">
        <b-input type="password" password-reveal v-model="password"></b-input>
      </b-field>
      <b-button type="is-primary" native-type="submit">Войти</b-button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      this.$store.dispatch("GET_USER", {
        email: this.email,
        password: this.password
      });
      this.$router.push("/posts");
    },
    test() {
      console.log(this.$store.state.user.role);
    }
  }
};
</script>

<style lang="scss">
.section {
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
