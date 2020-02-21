<template>
  <div class="editBox">
    <form action="#" method="post" @submit.prevent="setChanges">
      <b-field class="title">
        <b-input type="text" v-model="title"></b-input>
      </b-field>
      <b-field class="description">
        <b-input maxlength="500" type="textarea" v-model="description"></b-input>
      </b-field>
      <b-button native-type="submit">Confirm changes</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  data() {
    const title = this.$store.state.editPost.title;
    const description = this.$store.state.editPost.description;
    const id = this.$store.state.editPost.id;
    return {
      title: title,
      description: description,
      id: id
    };
  },
  computed: {},
  methods: {
    setChanges() {
      const data = {
        id: this.id,
        title: this.title,
        description: this.description,
        updateAt: new Date()
      };
      this.$store.dispatch("SET_CHANGES", data);
      this.$router.push("/posts");
    }
  }
};
</script>
<style lang="scss">
.editBox {
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