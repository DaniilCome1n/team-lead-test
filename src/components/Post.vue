<template>
  <div class="post">
    <h3 class="title">{{title}}</h3>
    <p class="description">{{description}}</p>
    <div v-if="!isGuest" class="btnGroup">
      <button v-if="isReader">{{claps}}</button>
      <button v-if="isWriter && isAuthor" @click="goToEditPost">Change</button>
      <button v-if="isWriter && isAuthor">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: [
    "title",
    "description",
    "claps",
    "id",
    "userId",
    "createdAt",
    "updateAt"
  ],
  computed: {
    isWriter() {
      return this.$store.state.role === "writer";
    },
    isReader() {
      return this.$store.state.role === "reader";
    },
    isGuest() {
      return this.$store.state.role === "";
    },
    isAuthor() {
      return this.$store.state.userId === this.userId;
    }
  },
  methods: {
    goToEditPost() {
      const data = {
        id: this.id,
        title: this.title,
        description: this.description,
        claps: 0,
        createdAt: new Date(),
        updateAt: new Date(),
        userId: this.$store.state.userId
      };
      this.$store.dispatch("SET_EDIT_POST", data);
      this.$router.push("/posts/editpost");
    }
  }
};
</script>

<style lang="scss">
.post {
  width: 500px;
  height: auto;
  .title {
    color: rgb(45, 13, 58);
  }
}
</style>