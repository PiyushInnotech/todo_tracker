<template>
  <div class="todoWrapper" v-show="!showForm">
    <div v-for="todo in todos" :key="todo.id" class="wrap">
      <div class="todoCol" v-show="!showForm">
        <div class="line" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
        <h1 class="todoHead" @click="showDescription(todos.indexOf(todo))">
          {{ todo.name }}
        </h1>
        <div class="icon" @click="deleteTask(todo.id)">
          <i class="fa-solid fa-trash"></i>
        </div>
        <div class="icon" @click="updateTask(todos.indexOf(todo))">
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
  <div class="wrapper marg" v-show="showForm">
    <form class="form">
      <label> Title</label>
      <input type="text" v-model="newTodo.name" />
      <label>Description</label>
      <textarea rows="10" v-model="newTodo.description"></textarea>
      <button @click.prevent="updateTodo">update project</button>
    </form>
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
    updateTask(key){
      this.newTodo.name = this.todoList[key].name
      this.newTodo.description = this.todoList[key].description
      this.showForm= true
      this.newTodo.id = key
      this.newTodo.isComplete = this.todoList[key].isComplete
    },
    updateTodo(key){
      key = this.newTodo.id
      this.showForm = false
      this.todoList[key].name = this.newTodo.name
      this.todoList[key].description = this.newTodo.description
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
    },
  }
};
</script>

<style scoped>
</style>