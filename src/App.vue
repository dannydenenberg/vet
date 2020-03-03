<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Doses v-if="currentRoute == '/'" />
    <About v-else-if="currentRoute == '/about'" />
    <NotFound v-else />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Doses from "./components/Doses";
import About from "./components/About";

const NotFound = { template: "<h1>Page not found</h1>" };

export default {
  name: "App",
  components: {
    // HelloWorld,
    Doses,
    About,
    NotFound
  },
  data() {
    return {
      currentRoute: window.location.pathname
    };
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
