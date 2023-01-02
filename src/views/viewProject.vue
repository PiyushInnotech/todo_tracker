<template>
  <div class="viewLinks">
    <router-link :to="{ name: 'view', params: { view: view } }"
      >view all</router-link
    >
    <router-link :to="{ name: 'ongoing', params: { view: ongoing } }"
      >ongoing</router-link
    >
    <router-link :to="{ name: 'completed', params: { view: complete } }"
      >completed</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "viewProject",
    data() {
    return {
      view: "view",
      ongoing: "ongoing",
      complete: "complete",
    };
  },
};
</script>

<style scoped>
.viewLinks {
  text-align: left;
  margin-top: 10px;
  margin-left: 40px;
}
.viewLinks a {
  text-decoration: none;
  color: #959da1;
  margin-right: 30px;
  font-size: 15px;
  text-transform: uppercase;
}
.viewLinks a.router-link-exact-active {
  border-bottom: 2px solid #4a4d4f;
  color: #4a4d4f;
  font-weight: bold;
}
</style>