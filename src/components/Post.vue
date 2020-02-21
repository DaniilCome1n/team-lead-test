<template>
  <div class="post">
    <h3 class="title">{{title}}</h3>
    <p class="description">{{description}}</p>
    <p class="updated" @click="updatedTime">{{updatedTime}}</p>
    <div v-if="!isGuest" class="btnGroup">
      <b-button
        v-if="isReader"
        @click="addClap"
        type="is-primary"
        class="btn"
      >Claps {{currentClaps}}</b-button>
      <b-button
        v-if="isWriter && isAuthor"
        @click="goToEditPost"
        type="is-success"
        class="btn"
      >Change</b-button>
      <b-button v-if="isWriter && isAuthor" @click="deletePost" type="is-danger" class="btn">Delete</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {
      currentClaps: this.claps,
      updatedDate: this.updateAt
    };
  },
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
    },
    updatedTime() {
      let upTime = Date.parse(this.updatedDate);
      let nowTime = Date.now();
      let diffTime = nowTime - upTime;
      let leftDays = diffTime / 86400000;
      let leftDaysStr = `${Math.floor(leftDays)} days ago`;
      return leftDaysStr;
    }
  },
  methods: {
    goToEditPost() {
      const data = {
        id: this.id,
        title: this.title,
        description: this.description,
        claps: this.claps,
        createdAt: new Date(),
        updateAt: new Date(),
        userId: this.$store.state.userId
      };
      this.$store.dispatch("SET_EDIT_POST", data);
      this.$router.push("/posts/editpost");
    },
    deletePost() {
      const data = {
        id: this.id
      };
      this.$store.dispatch("DELETE_POST", data);
    },
    addClap() {
      const data = {
        id: this.id,
        claps: ++this.currentClaps
      };
      this.$store.dispatch("SET_CHANGES", data);
    }
  }
};
</script>

<style lang="scss">
.post {
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
    text-indent: -5px;
    font-size: 18px;
  }
  .btnGroup {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    .btn {
      margin-left: 5px;
    }
  }
  .updated {
    margin-top: 10px;
    color: rgba(165, 159, 159, 0.534);
  }
}
</style>