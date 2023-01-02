<template>
  <div class="wrapper">
    <form class="form">
      <label> Title</label>
      <input type="text" v-model="newTodo.name" />
      <label>Description</label>
      <textarea rows="10" v-model="newTodo.description"></textarea>
      <button @click="handleSubmit">Add project</button>
    </form>
  </div>
</template>

<script>
import { todoMixin } from "../components/todoMixin";
export default {
  name: "addProject",
  mixins: [todoMixin],
  data() {
    return {
      a: [],
    };
  },
  props: ["todos"],
  methods: {
    handleSubmit() {
      this.a = JSON.parse(localStorage.getItem("todoLists"));
      this.newTodo.id = this.a.length;
      this.a.push(this.newTodo);
      localStorage.setItem("todoLists", JSON.stringify(this.a));
    },
  },
};
</script>

<style  scoped>
.wrapper {
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
  align-items: left;
  text-align: left;
  display: flex;
  border-radius: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  margin-bottom: 30px;
  margin-left: 40px;
}
label {
  color: #959da1;
  font-size: 30px;
  margin-bottom: 10px;
}
input {
  display: block;
  width: 90%;
  margin-top: 15px;
  height: 30px;
  font-size: 18px;
  color: gray;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #bec2c4;
  padding-left: 10px;
  margin-bottom: 30px;
}
textarea {
  width: 90%;
  border-color: #bec2c4;
  margin-top: 10px;
  font-size: 20px;
  color: gray;
}
button {
  width: 200px;
  height: 50px;
  align-items: center;
  margin-left: 37%;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: rgb(72, 155, 130);
  color: white;
  font-size: 20px;
}
</style>