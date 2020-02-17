<template>
  <section class="section" @click="asyncTestMut">
    <form action="submit" method="post">
      <h1>{{ testTitle }}</h1>
      <b-field label="Email">
        <b-input type="email" placeholder="Enter your Email" maxlength="30">
        </b-input>
      </b-field>

      <b-field label="Пароль">
        <b-input type="password" password-reveal> </b-input>
      </b-field>
      <b-button type="is-primary">Войти</b-button>
    </form>
  </section>
</template>

<script>
export default {
  name: "auth-form",
  data() {
    return {
      name: "John Silver"
    };
  },
  computed: {
    testTitle() {
      return this.$store.state.test;
    }
  },
  methods: {
    testMut() {
      this.$store.commit("testMut");
      console.log(this.$store.state);
    },
    asyncTestMut() {
      this.$store.dispatch("asyncTestMut");
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
