<template>
  <div class=".mainBox">
    <new-post></new-post>
  </div>
</template>

<script>
import NewPost from "../components/NewPost.vue";
export default {
  name: "NewPostView",
  components: {
    NewPost
  }
};
</script>
<style lang="scss">
.mainBox {
  display: flex;
  align-items: center;
}
</style>