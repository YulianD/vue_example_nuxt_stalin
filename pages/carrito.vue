<template>
  <div>
    <b-button @click="eliminar()" variant="primary" type="button">Eliminar todo</b-button>

    <ul class="column">
      <li class="col-sm-3" v-for="(producto,index) in productos" :key="producto.id">
        <div class="row">
          <p>{{producto.nombre}}</p>
=
          <b>{{producto.precio}}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../services/firebase";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  middleware: "authenticated",

  created() {
    this.productos = this.$store.state.compras;
    console.log("CARRITO::", this.$store.state.compras);
  },

  data() {
    return {
      productos: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    eliminar() {
      Cookie.remove("compras");
      this.$store.commit("fillCompras", null);
    }
  }
};
</script>
