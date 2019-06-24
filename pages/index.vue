<template>
  <div class="row mt-4">
    <div class="col-sm-3" v-for="(producto,index) in productos" :key="producto.id">
      <cardProducto :comentarios="producto.comentarios" :index="index" :id="producto.id " :precio="producto.precio" :nombre="producto.nombre" :imagen="producto.imagen"/>
    </div>
  </div>
</template>

<script>
import { db } from "../services/firebase";
import cardProducto from "../components/cardProducto";
//import navbar from '../components/navbar'
//import contacto from './contacto'
//import contacto from './contacto'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: { cardProducto },

  middleware: "authenticated",

  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];

        productosSnap.forEach(value => {
          productos.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          productos
        };
      });
  },

  data() {
    return {
      /*slide: 0,
        sliding: null*/
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    carrito(producto){
      console.log(this.productos[producto])
      this.$store.commit('setCompras', this.productos[producto])
      Cookie.set('compras', this.$store.state.compras)

      console.log(this.$store.state.compras)
    }
  }
};
</script>
