import Vue from "vue";
import App from "./App.vue";

// import router
import VueRouter from "vue-router";

// call component
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import NotFound from "./components/NotFound.vue";

Vue.config.productionTip = false;

//call Vue Route
Vue.use(VueRouter);

// instance VueRouter
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound },
  ],
  mode: "history",
});

// vue instance
new Vue({
  // call router
  router,

  render: (h) => h(App),
}).$mount("#app");

// Array routes berisi object yang akan menentukan path/rute
// mode: ‘history’ untuk menghilangkan karakter hash (#) pada URL.
