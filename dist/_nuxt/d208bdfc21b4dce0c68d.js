(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{388:function(r,e,t){"use strict";t.r(e);t(77);var o=t(113),l={data:function(){return{form:{}}},methods:{registro:function(){var r=this;o.a.createUserWithEmailAndPassword(this.form.email,this.form.password).then(function(e){e.user.updateProfile({displayName:r.form.name}).then(function(e){r.$router.push({path:"/"})})}).catch(function(r){alert("Ha ocurrido un error")})}}},n=t(27),component=Object(n.a)(l,function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-form",{on:{submit:function(e){return e.preventDefault(),r.registro(e)}}},[t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-xs-6 col-sm-5 col-md-6"},[t("h4",[r._v("Registro de Usuario")])])]),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-12"},[t("b-form-group",{attrs:{label:"nombre","label-for":"nombre"}},[t("b-form-input",{attrs:{type:"text",required:"",placeholder:"Ingrese nombre de usuario"},model:{value:r.form.name,callback:function(e){r.$set(r.form,"name",e)},expression:"form.name"}})],1),r._v(" "),t("b-form-group",{attrs:{label:"Email","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"Ingresar el email del usuario"},model:{value:r.form.email,callback:function(e){r.$set(r.form,"email",e)},expression:"form.email"}})],1),r._v(" "),t("b-form-group",{attrs:{label:"contraseña","label-for":"nombre"}},[t("b-form-input",{attrs:{id:"nombre",type:"password",required:"",placeholder:"Ingresar la contraseña"},model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}})],1)],1)]),r._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-12 offset-sm-5"},[t("b-button-toolbar",[t("b-button-group",{attrs:{"right-class":"mx-2"}},[t("b-button",{attrs:{variant:"primary",type:"submit",disabled:r.guardando}},[r._v("guardar")])],1)],1)],1)])])},[],!1,null,null,null);e.default=component.exports}}]);