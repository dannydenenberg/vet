<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Doses />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Doses from "./components/Doses";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Doses
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  text-align: left;
}
</style>
