<template>
  <div>
    <todoData />
  </div>
</template>

<script>
import todoData from "./todoData.vue";
export default {
  name: "allProject",
  data() {
    return {};
  },
  props: ["viewall"],
  components: {
    todoData,
  },
};
</script>

<style scoped>
</style>