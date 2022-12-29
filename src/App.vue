<template>
  <nav>
    <router-link to="/">Projects</router-link> 
    <router-link to="/addProject">Add a new Project</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #959da1;
  margin-right: 20px;
  font-size: 25px;
  text-decoration: none;
  font-weight: 400;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid #19d4be ;
}
</style>
