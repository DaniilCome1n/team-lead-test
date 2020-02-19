<template>
  <div>
    <form action="#" method="post" @submit.prevent="setNewPost">
      <b-field label="Title">
        <b-input v-model="title" type="text"></b-input>
      </b-field>
      <b-field label="Message">
        <b-input maxlength="200" type="textarea" v-model="description"></b-input>
        <b-button type="is-primary" native-type="submit">New Post</b-button>
      </b-field>
    </form>
  </div>
</template>
<script>
export default {
  name: "newpost",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    // createdTime() {
    //   return new Date();
    // },
    // userId() {
    //   return this.$store.state.user.id;
    // }
  },
  methods: {
    setNewPost() {
      const data = {
        title: this.title,
        description: this.description,
        claps: 0,
        createdAt: new Date(),
        updateAt: new Date(),
        userId: this.$store.state.userId
      };
      this.$store.dispatch("SET_NEW_POST", data);
      this.$router.push("/posts");
    }
  }
};
</script>
