// komponen baru
Vue.component("book-detail", {
  template: "#bookDetail",
  props: ["title", "author", "year"],
});

var app = new Vue({
  el: "#app",
});
