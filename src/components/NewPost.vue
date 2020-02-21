<template>
  <div class="newPostBox">
    <form action="#" method="post" @submit.prevent="setNewPost">
      <b-field label="Title" class="title">
        <b-input v-model="title" type="text"></b-input>
      </b-field>
      <b-field label="Message" class="description">
        <b-input maxlength="500" type="textarea" v-model="description"></b-input>
      </b-field>
      <b-button type="is-primary" native-type="submit">New Post</b-button>
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
  computed: {},
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
<style lang="scss">
.newPostBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  width: 550px;
  padding: 20px;
  height: auto;
  background-color: rgba(240, 240, 240, 0.322);
  box-shadow: 5px 5px 5px rgba(121, 119, 119, 0.233);
  border: 1px solid rgba(121, 119, 119, 0.233);
  border-radius: 10px;
  .title {
    color: rgb(45, 13, 58);
    text-transform: uppercase;
  }
  .description {
    width: 500px;
  }
}
</style>
