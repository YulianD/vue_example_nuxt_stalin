<template>
  <form name="from producto" @submit.prevent="guardarProducto">
    <h1>Desde productos- Crear</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="6">
          <div class="form-group">
            <b-form-group label="imagen:" label-for="imagen">
              <b-form-file placeholder="cargar imagen" accept="image/*" v-model="imageProduct"/>
            </b-form-group>

            <label for="nombre">Nombre del producto</label>
            <input
              type="text"
              class="form-control"
              name="Nombre del producto"
              placeholder="ingresar nombre"
              v-model="form.nombre"
              required
            >
            <label for="precio">Precio</label>
            <input
              type="number"
              class="form-control"
              name="precio"
              placeholder="ingresar precio"
              v-model="form.precio"
              required
            >
            <label for="cantidad">cantidad</label>
            <input
              type="number"
              class="form-control"
              name="cantidad"
              placeholder="ingresar cantidad"
              v-model="form.cantidad"
              required
            >
            <b-form-group id="categoria" v-model="form.categoria" :options="categorias"></b-form-group>
            <b-form-select v-model="form.categoria" :options="categorias" size="sm" class="mt-3"></b-form-select>
          </div>
          <div class="row" id="galeria"></div>
        </b-col>

        <b-col md="6">
          <b-row>
            <b>Comentario</b>
            <b-button variant="success" @click="addComentario()">añadir</b-button>
          </b-row>
          <div class="form-group">
            <textarea
              class="form-control"
              name="comentarios"
              placeholder="Ingresar comentarios"
              v-model="comentario"
            ></textarea>
          </div>

          <div
            v-for="(producto) in form.productos"
            :key="producto.id"
            class="alert alert-primary"
            role="alert"
          >A simple primary alert—check it out!</div>
        </b-col>
      </b-row>

      <b-row class="text-center">
        <b-col lg="6" md="6" offset-md="3">
          <b-button variant="primary" href="/productos">volver</b-button>
          <b-button variant="success" type="submit" :disabled="guardando">
            <b-spinner small v-if="guardando"></b-spinner>
            <span class="sr-only">Loading...</span>
            guardar
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </form>
</template>

<script>
import { db, storage } from "../../services/firebase";
import { async } from "q";

export default {
  asyncData() {
    return db
      .collection("categorias")
      .get()
      .then(categoriasSnap => {
        let categorias = [];
        categoriasSnap.forEach(value => {
          categorias.push(value.data().nombre);
        });
        return { categorias };
      });
  },
  data() {
    return {
      //   fields: ["Imagen", "nombre", "precio", "cantidad", "acciones"],
      form: {
        nombre: "",
        cantidad: "",
        precio: "",
        comentarios: []
      },
      comentario: "",
      guardando: false,
      imageProduct: ""
    };
  },
  methods: {
    addComentario() {
      this.form.comentarios.push(this.comentario);
      this.comentario = null;
      console.log(this.form);
    },
    guardarProducto() {
      this.guardando = true;

      let imageRef = storage.child(this.imageProduct.name);

      imageRef.put(this.imageProduct).then(async imageRes => {
        this.form.imagen = await imageRes.ref.getDownloadURL();

        db.collection("productos")
          .add(this.form)
          .then(res => {
            this.$router.push({
              path: "/productos"
            });
          });
      });
    }
  }
};
</script>
