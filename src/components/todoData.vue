<template>
  <div class="todoWrapper">
    <div v-for="todo in todos" :key="todo.id" class="todoWrap">
      <div class="todoCol">
        <div class="line" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
        <h1 class="todoHead" @click="showDescription(todo.id)">
          {{ todo.name }}
        </h1>
        <div class="icon" @click="deleteTask(todo.id)">
          <i class="fa-solid fa-trash"></i>
        </div>
        <div class="icon">
          <i class="fa-sharp fa-solid fa-pen"></i>
        </div>
        <div
          class="icon"
          :class="todo.isComplete ? 'iconComp' : 'iconIncomp'"
          @click="taskCheck(todos.indexOf(todo))"
        >
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
      <div class="todoCol" :class="{ hidden: !todo.showDes }">
        <div class="line1" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
        <p class="todoInfo">{{ todo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoData",
  data() {
    return {
      todos: [
        {
          name: "Create a home Page",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 0,
          isComplete: true,
          showDes: false,
        },
        {
          name: "Make a form on vue",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 1,
          isComplete: false,
          showDes: false,
        },
        {
          name: "Make User signin/login page",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 2,
          isComplete: false,
          showDes: false,
        },
        {
          name: "Create the footer for all pages ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 3,
          isComplete: true,
          showDes: false,
        },
      ],
    };
  },
  methods: {
    taskCheck(key) {
      this.todos[key].isComplete = !this.todos[key].isComplete;
    },
    deleteTask(key) {
      this.todos = this.todos.filter((todo) => todo.id != key);
    },
    showDescription(key) {
      this.todos[key].showDes = !this.todos[key].showDes;
    },
  },
};
</script>

<style>
</style>