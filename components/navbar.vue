<template>
  <!--div>
        <a href="/">inicio</a>
        <a href="/contacto">contacto</a>
  </div-->
  <b-navbar variant="dark" type="dark" toggleable="lg">
    <b-navbar-brand href="/">Bootstrapvue</b-navbar-brand>

    <b-navbar-toggle target="menu"></b-navbar-toggle>

    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item href="/contacto">contacto</b-nav-item>
        <b-nav-item href="/productos">Productos</b-nav-item>
        <b-nav-item href="/categorias">Categorias</b-nav-item>
        <b-nav-item href="/registro" v-if="!user">Registrarse</b-nav-item>
        <b-nav-item href="/carrito">Carrito</b-nav-item>
        <!--div v-if="user">{{user.displayName}}</div-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/login" v-if="!user">Iniciar Sesion</b-nav-item>
        <b-dropdown v-if="user" :text="user.displayName">
          <b-dropdown-item @click="cerrarSesion">Cerrar sesion</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <input class="form-control mr-sm2" type="search" placeholder="Buscar" aria-label="Search">
        <b-button>Buscar</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { auth } from "../services/firebase";
import { mapGetters } from "vuex";
const Cookie = process.client ? require('js-cookie') : undefined

export default {

  created() {

  },
  computed:{
    user(){
      return this.$store.state.auth
    }
  },
  // middleware: "authenticated",
  methods: {
    cerrarSesion() {
      auth.signOut();
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
