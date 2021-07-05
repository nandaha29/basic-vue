<template>
  <div id="app">
    

    <!-- navbar -->
    <ul class="nav" style="background-color:#e3f2fd">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
    </ul>

    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
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

// <router-link> di-render sebagai link layaknya tag HTML <a> menuju component sesuai path yang ditentukan dalam atribut to. 
// <router-view>  adalah container untuk menampilkan component sesuai path yang dipilih
