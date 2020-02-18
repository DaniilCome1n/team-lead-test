<template>
  <div class="post">
    <h3 class="title">{{title}}</h3>
    <p class="description">{{description}}</p>
    <div v-if="!isGuest" class="btnGroup">
      <button v-if="isReader">{{claps}}</button>
      <button v-if="isWriter">Change</button>
      <button v-if="isWriter">Delete</button>
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