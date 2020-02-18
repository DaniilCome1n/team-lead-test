<template>
  <div>
    <b-button size="is-medium" @click="goToNewPost">New Post</b-button>
    <post
      v-for="post in postsArr"
      :key="post.id"
      :title="post.title"
      :description="post.description"
      :claps="post.claps"
      :id="post.id"
      :userId="post.userId"
      :createdAt="post.createdAt"
      :updateAt="post.updateAt"
    ></post>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "posts",
  components: { Post },
  data() {
    return {};
  },
  computed: {
    postsArr() {
      return this.$store.state.posts;
    }
  },
  methods: {
    goToNewPost() {
      this.$router.push("/posts/newpost");
    }
  },
  mounted() {
    this.$store.dispatch("GET_POSTS");
    console.log("mounted");
  }
};
</script>