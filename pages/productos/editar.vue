<template>
    <form name="from producto" @submit.prevent="guardarProducto">
        <h1>Desde productos- Crear</h1>
        <b-container class="bv-example-row">
            <b-row>
                <b-col col="12" md="4" offset-md="4">
                    <div class="form-group">
                        <b-form-group label="imagen:" label-for="imagen">
                            <b-form-file placeholder="cargar imagen" accept="image/*" v-model="imageProduct"/>
                        </b-form-group>

                        <label for="nombre">Nombre del producto</label>
                        <input
                                value="adsfdasf"
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
                        <b-form-group id="categoria" v-model="form.categoria" :options="categorias">
                        </b-form-group>
                        <b-form-select v-model="form.categoria" :options="categorias" size="sm"
                                       class="mt-3"></b-form-select>
                    </div>
                    <div class="row" id="galeria"></div>
                </b-col>
            </b-row>

            <b-row class="text-center">
                <b-col lg="6" md="6" offset-md="3">
                    <b-button variant="primary" href="/productos">cancelar</b-button>
                    <b-button variant="primary" type="submit" :disabled="guardando">
                        <b-spinner small v-if="guardando"></b-spinner>
                        <span class="sr-only">Loading...</span>
                        actualizar
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
    </form>
</template>

<script>

    import {db, storage} from '../../services/firebase'
    import {async} from 'q';

    export default {
        async asyncData({app, params, store}) {

            let categorias = await db.collection('categorias').get().then(categoriasSnap => {
                let ca = [];
                categoriasSnap.forEach(value => {
                    ca.push(value.data().nombre);
                });
                // console.log(ca)
                return {ca}
            });



            // let id = store.state.producto
            // let producto = await db.collection('productos').doc(id).get().then(doc => {
            //
            //     this.producto = doc.data();
            //     return doc.data()
            //
            // });

            categorias = categorias.ca;
            return {categorias};

        },
        created(){

            let id = this.$store.state.producto
            this.id =id
            db.collection('productos').doc(id).get().then(doc => {

                this.producto = doc.data();
                console.log(this.producto);

            });
        },
        watch:{
            producto:{
                handler(val){
                    this.form={
                        nombre: val.nombre,
                        cantidad: val.cantidad,
                        precio: val.precio
                    }
                }
            }
        },
        data() {
            return {
                form: {
                    nombre: '',
                    cantidad: '',
                    precio: '',
                },
                id:null,
                producto:null,
                guardando: false,
                imageProduct: '',

            }
        },
        methods: {
            guardarProducto() {
                this.guardando = true


                let imageRef = storage.child(this.imageProduct.name)

                imageRef.put(this.imageProduct).then(async imageRes => {

                    this.form.imagen = await imageRes.ref.getDownloadURL()

                    db.collection("productos").doc(this.id).update(this.form).then(res=>{
                        this.guardando=false
                        alert("registro actualizado!")
                        this.$router.push({path: "/productos"});
                    })


                })


            }
        }
    }
</script>
