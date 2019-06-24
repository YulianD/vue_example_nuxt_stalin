<template>
  <b-card
    :comentarios="comentarios"
    :index="index"
    :precio="precio"
    :id="id"
    :title="nombre"
    :img-src="imagen"
    img-alt="Image"
    img-top
    tag="Article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>{{nombre}}</b-card-text>

    <b-button variant="primary" @click="carrito(index)">Comprar</b-button>
    <!-- <ul> -->
    <div>
      <p>COMENTARIOS</p>
      <div v-for="(comentario) in comentarios" :key="comentario">
        <p style="margin:0;">
          <b>- {{comentario}}</b>
        </p>
      </div>
    </div>
    <!-- </ul> -->
  </b-card>
</template>

<script>
export default {
  props: ["id", "precio", "nombre", "imagen", "index", "comentarios"],
  methods: {
    carrito(index) {
      this.$parent.carrito(index);
    }
  }
};
</script>
