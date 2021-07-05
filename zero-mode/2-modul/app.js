var app = new Vue({
  el: "#app",
  // data yg dipanggil
  data: {
    todos: [],
    todo: "",
  },
  // setting localStorage
  create() {
    this.loadLocalStorage();
  },
  watch: {
    todos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  // setting method
  methods: {
    loadLocalStorage() {
      const ls = JSON(localStorage.getItem("todos")); // mengambil nilai di dalam todos ke localStorage
      console.log(ls);
      if (ls == null) {
        return;
      } // jika localStorage kosong kembalikan ?
      this.todos = ls; // ?
      console.log(this.todos);
    },
    addTodo: function () {
      this.todos.push(this.todo);
      this.todo = "";
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
// todos adalah array kosong yang nantinya menampung semua isian user di dalam form
// todo adalah string kosong yang akan menampung tiap isian user di dalam form.
// push() digunakan untuk menambah item ke dalam array
// splice() digunakan untuk menghapus item array tertentu.
//  -> (nilai index untuk menentukan item mana yang akan dihapus, nilai 1 untuk menentukan banyak item yang dihapus)
