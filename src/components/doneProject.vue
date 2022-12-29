<template>
  <div>
    <todoData />
  </div>
</template>

<script>
import todoData from './todoData.vue'
export default {
  name: "doneProject",
  props:['completed'],
  components: {
    todoData
  },
};
</script>

<style scoped>
</style>