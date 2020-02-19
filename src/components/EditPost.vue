<template>
  <div>
    <form action="#" method="post" @submit.prevent="setChanges">
      <b-field>
        <b-input type="text" v-model="title"></b-input>
        <p>{{this.title}}</p>
      </b-field>
      <b-field>
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
      console.log(data);
      this.$store.dispatch("SET_CHANGES", data);
      this.$router.push("/posts");
    }
  }
};
</script>