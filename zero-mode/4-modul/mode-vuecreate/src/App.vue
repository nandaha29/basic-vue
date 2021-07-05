<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Bissmillah Vue.js"></HelloWorld>
  <First msg="First Vue.js"></First>
</template>

<script>
import First from "./components/First.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    First,
  },
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
</style>
