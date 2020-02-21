<template>
  <div class="mainBox">
    <EditPost></EditPost>
  </div>
</template>

<script>
import EditPost from "../components/EditPost.vue";
export default {
  name: "EditPostView",
  components: { EditPost }
};
</script>
<style lang="scss">
.mainBox {
  display: flex;
  align-items: center;
}
</style>