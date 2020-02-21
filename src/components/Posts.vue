<template>
  <div class="mainPosts">
    <b-button
      v-if="isWriter"
      size="is-medium"
      class="newPostBtn"
      type="is-success"
      @click="goToNewPost"
    >New Post</b-button>
    <div class="postBox">
      <post
        v-for="post in paginatedItems"
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
    <div>
      <b-pagination
        :total="postsLength"
        :current.sync="current"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        v-if="this.$store.state.posts.length > 10"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "posts",
  components: { Post },
  data() {
    return {
      current: 1,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "is-centered",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  },
  computed: {
    postsArr() {
      return this.$store.state.posts;
    },
    isWriter() {
      return this.$store.state.role === "writer";
    },
    postsLength() {
      return this.$store.state.posts.length;
    },
    paginatedItems() {
      let page_number = this.current - 1;

      return this.postsArr.slice(
        page_number * this.perPage,
        (page_number + 1) * this.perPage
      );
    }
  },
  methods: {
    goToNewPost() {
      this.$router.push("/posts/newpost");
    }
  },
  mounted() {
    if (this.$store.state.posts.length == 0) {
      this.$store.dispatch("GET_POSTS");
      console.log("mounted");
    }
  }
};
</script>

<style lang="scss">
.mainPosts {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .postBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
}
</style>
