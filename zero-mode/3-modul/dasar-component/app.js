// deklarasi komponen baru
Vue.component("counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: '<button @click="count++">{{count}}</button>',
});

var app = new Vue({
  el: "#app",
});

// ‘counter’ ditambahkan sebagai nama tag dari custom element yang dibuat
// Data memiliki value berupa function yang mengembalikan suatu object. Di dalam object tersebut, terdapat satu property counter dengan nilai 0
//  -> n.b: Perhatikan bahwa object tidak secara langsung dideklarasikan sebagai value dari property data seperti pada latihan sebelumnya.
// template, dideklarasikan kode HTML yang akan di-render oleh browser setiap kali custom element dipanggil
