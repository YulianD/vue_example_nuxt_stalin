(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{394:function(t,e,r){"use strict";r.r(e);var o=r(25),n=r(113),c={asyncData:function(){return n.b.collection("productos").get().then(function(t){var e=[];return t.forEach(function(t){e.push(Object(o.a)({id:t.id},t.data()))}),{productos:e,currentPage:1,perPage:5}})},data:function(){return{fields:["Imagen","nombre","precio","cantidad","acciones"],dialog:!1}},computed:{rows:function(){return this.productos.length}},middleware:"authenticated",methods:{editar:function(t,e){this.$store.commit("setProducto",t),this.dialog=!0,this.$router.push({path:"/productos/editar"})},eliminarProducto:function(t,e){var r=this;n.b.collection("productos").doc(t).delete().then(function(){var e;r.productos.map(function(r,o){r.id==t&&(e=o)}),r.productos.splice(e,1)})}}},d=r(27),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mt-3"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("b-button",{attrs:{variant:"primary",href:"/productos/crear"}},[t._v("Nuevo")])],1),t._v(" "),r("div",{staticClass:"row mt-2"},[r("div",{staticClass:"col-ms-12"},[r("b-table",{attrs:{responsive:"",striped:"",hover:"",fields:t.fields,items:t.productos,id:"productos","current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"acciones",fn:function(data){return[r("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.editar(data.item.id)}}},[t._v("\n                        Editar\n                    ")]),t._v(" "),r("b-button",{attrs:{variant:"danger",type:"button"},on:{click:function(e){return t.eliminarProducto(data.item.id)}}},[t._v("\n                        Eliminar\n                    ")])]}}])}),t._v(" "),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"productos"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("h2",[this._v("Listado de Productos")])])}],!1,null,null,null);e.default=component.exports}}]);