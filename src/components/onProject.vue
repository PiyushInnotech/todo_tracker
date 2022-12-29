<template>
  <div>
    <todoData />
  </div>
</template>

<script>
import todoData from './todoData.vue'
export default {
  name: "onProject",
  props: ['ongoing'],
  components: {
    todoData
  },
};
</script>

<style scoped>
</style>