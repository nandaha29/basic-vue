// child component
Vue.component("show-form", {
  template: "#show-form",
  data() {
    return {
      data: { nama: "", email: "" },
    };
  },
  methods: {
    simpan: function () {
      // memanggil custom event ‘send-data’, sekaligus mengirimkan object data (this.data) dari child component (showform) ke parent component (app).
      this.$emit("send-data", this.data);
      // untuk mengosongkan kolom isian nama dan email setelah tombol Simpan ditekan
      this.data.nama = "";
      this.data.email = "";
    },
  },
});
Vue.component("show-data", {
  template: "#show-data",
  // mengirimkan data dari parent ke child cukup menggunakan props.
  props: ["data"],
});

// parent component
var app = new Vue({
  el: "#app",
  data: {
    biodata: {},
  },
  methods: {
    getData: function (value) {
      this.biodata = {
        nama: value.nama,
        email: value.email,
      };
    },
  },
});

// Target adalah component parent #app
// Property data memiliki object kosong bernama biodata. Object biodata nantinya berfungsi menampung sementara data dari child component showform, untuk kemudian dikirimkan pada child component lain, yaitu showdata
// function data mengembalikan object bernama data dengan property nama dan email, dimana value keduanya merupakan string kosong.
// Parameter value bertugas menampung object data
