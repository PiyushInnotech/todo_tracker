<template>
  <div class="todoWrapper">
    <div v-for="todo in todos" :key="todo.id" class="wrap">
      <div class="todoCol" v-show="!showForm">
        <div class="line" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
        <h1 class="todoHead" @click="showDescription(todos.indexOf(todo))">
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
      <div class="todoCol" v-if="todo.showDes">
        <div class="line1" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
        <p class="todoInfo">{{ todo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {todoMixin} from './todoMixin'
export default {
  name: "allProject",
  mixins: [todoMixin],
  data() {
    return {
      showForm: false,
      todos: '',
    };
  },
  props: ["view"],
  methods: {
    taskCheck(key) {
      this.todos[key].isComplete = !this.todos[key].isComplete;
    },
    deleteTask(key) {
      this.todoList = this.todoList.filter((todo) => todo.id != key);
      this.todos = this.todos.filter((todo) => todo.id != key);
    },
    showDescription(key) {
      this.todos[key].showDes = !this.todos[key].showDes;
    },
    showArray(){
        if(this.$route.params.view === 'complete'){
        this.todos = this.todoList.filter( (todo) => todo.isComplete)
      }
      if(this.$route.params.view === 'view'){
        this.todos = this.todoList
      }
      if(this.$route.params.view === 'ongoing'){
        this.todos = this.todoList.filter((todo) => !todo.isComplete)
      }
    },
  },
  mounted(){
    this.showArray()
  },
  watch: {
    $route(){
      this.showArray()
      console.log(this.todoList);
    },
  }
};
</script>

<style scoped>
</style>