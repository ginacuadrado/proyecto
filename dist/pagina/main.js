(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<!--<div class=\"container\"><h1 class=\"text-center\">\r\n    {{ title }}\r\n  </h1><app-productlist></app-productlist>\r\n</div>-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'STEAK';
        this.catch = 'Lo único imposible es aquello que no pruebas';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var item_service_1 = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
var global_1 = __webpack_require__(/*! ./global */ "./src/app/global.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
//Importado para el enrutamiento
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
//Importados desde FIREBASE
var angularfire2_1 = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts"); //Aquí se encuentra la conexión a Firebase
//Servicios de autenticación
var auth_service_1 = __webpack_require__(/*! ./services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var auth_guard_service_1 = __webpack_require__(/*! ./services/autenticacion/auth-guard.service */ "./src/app/services/autenticacion/auth-guard.service.ts");
var authadmin_service_1 = __webpack_require__(/*! ./services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var guard_service_1 = __webpack_require__(/*! ./services/autenticacion/guard.service */ "./src/app/services/autenticacion/guard.service.ts");
var ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
//Componentes del Proyecto
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var header_component_1 = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
var footer_component_1 = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var menu_component_1 = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
var contact_component_1 = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
var about_component_1 = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var login_component_1 = __webpack_require__(/*! ./components/ingreso/login/login.component */ "./src/app/components/ingreso/login/login.component.ts");
var register_component_1 = __webpack_require__(/*! ./components/ingreso/register/register.component */ "./src/app/components/ingreso/register/register.component.ts");
var carnes_component_1 = __webpack_require__(/*! ./components/menu/carnes/carnes.component */ "./src/app/components/menu/carnes/carnes.component.ts");
var postres_component_1 = __webpack_require__(/*! ./components/menu/postres/postres.component */ "./src/app/components/menu/postres/postres.component.ts");
var aperitivos_component_1 = __webpack_require__(/*! ./components/menu/aperitivos/aperitivos.component */ "./src/app/components/menu/aperitivos/aperitivos.component.ts");
var bebidas_component_1 = __webpack_require__(/*! ./components/menu/bebidas/bebidas.component */ "./src/app/components/menu/bebidas/bebidas.component.ts");
var menu_details_component_1 = __webpack_require__(/*! ./components/menu/menu-details/menu-details.component */ "./src/app/components/menu/menu-details/menu-details.component.ts");
var cart_component_1 = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
//Componentes de Administrador
var admin_component_1 = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts"); //Home
var registro_admin_component_1 = __webpack_require__(/*! ./components/admin/ingreso-admin/registro-admin/registro-admin.component */ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.ts"); //Registro
var login_admin_component_1 = __webpack_require__(/*! ./components/admin/ingreso-admin/login-admin/login-admin.component */ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.ts"); //Login
var agregar_item_component_1 = __webpack_require__(/*! ./components/admin/agregar-item/agregar-item.component */ "./src/app/components/admin/agregar-item/agregar-item.component.ts");
var changepassword_component_1 = __webpack_require__(/*! ./components/changepassword/changepassword.component */ "./src/app/components/changepassword/changepassword.component.ts");
var ventanapago_component_1 = __webpack_require__(/*! ./components/ventanapago/ventanapago.component */ "./src/app/components/ventanapago/ventanapago.component.ts");
var ordenes_component_1 = __webpack_require__(/*! ./components/ordenes/ordenes.component */ "./src/app/components/ordenes/ordenes.component.ts");
var validateadmin_component_1 = __webpack_require__(/*! ./validateadmin/validateadmin.component */ "./src/app/validateadmin/validateadmin.component.ts");
/*import { SearchComponent } from './components/search/search.component';*/
var img_storage_service_1 = __webpack_require__(/*! ./services/img-storage.service */ "./src/app/services/img-storage.service.ts");
var ngx_paypal_1 = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
//Router para la navegación entre las páginas
var router = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'menu',
        component: menu_component_1.MenuComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'menu/carnes',
        component: carnes_component_1.CarnesComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'menu/aperitivos',
        component: aperitivos_component_1.AperitivosComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'menu/postres',
        component: postres_component_1.PostresComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'menu/bebidas',
        component: bebidas_component_1.BebidasComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'menu-details',
        component: menu_details_component_1.MenuDetailsComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'cart',
        component: cart_component_1.CartComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'pago',
        component: ventanapago_component_1.VentanapagoComponent,
        canActivate: [auth_guard_service_1.AuthGuardService] //Solo acceden usuarios autenticados
    },
    {
        path: 'ordenes_pasadas',
        component: ordenes_component_1.OrdenesComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'adminhome',
        component: admin_component_1.AdminComponent,
        canActivate: [guard_service_1.GuardService],
    },
    {
        path: 'admin',
        component: validateadmin_component_1.ValidateadminComponent
    },
    {
        path: 'changepassword',
        component: changepassword_component_1.ChangepasswordComponent
    },
    {
        path: 'registroadmin',
        component: registro_admin_component_1.RegistroAdminComponent,
        canActivate: [guard_service_1.GuardService],
    },
    {
        path: 'loginadmin',
        component: login_admin_component_1.LoginAdminComponent,
        canActivate: [guard_service_1.GuardService],
    },
    /*{
      path: 'search',
      component: SearchComponent,
      //canActivate:[AuthGuardService],
    },*/
    {
        path: 'pago',
        component: ventanapago_component_1.VentanapagoComponent,
        canActivate: [auth_guard_service_1.AuthGuardService],
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                menu_component_1.MenuComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent,
                about_component_1.AboutComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                carnes_component_1.CarnesComponent,
                postres_component_1.PostresComponent,
                aperitivos_component_1.AperitivosComponent,
                bebidas_component_1.BebidasComponent,
                agregar_item_component_1.AgregarItemComponent,
                admin_component_1.AdminComponent,
                menu_details_component_1.MenuDetailsComponent,
                registro_admin_component_1.RegistroAdminComponent,
                login_admin_component_1.LoginAdminComponent,
                cart_component_1.CartComponent,
                changepassword_component_1.ChangepasswordComponent,
                ventanapago_component_1.VentanapagoComponent,
                ordenes_component_1.OrdenesComponent,
                validateadmin_component_1.ValidateadminComponent,
                registro_admin_component_1.RegistroAdminComponent,
                login_admin_component_1.LoginAdminComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(router),
                shared_module_1.SharedModule.forRoot(),
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_paypal_1.NgxPayPalModule
            ],
            providers: [auth_service_1.AuthService, item_service_1.ItemService, global_1.Globals, auth_guard_service_1.AuthGuardService, authadmin_service_1.AuthAdminService, img_storage_service_1.ImgStorageService, guard_service_1.GuardService],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n    \r\n<img height=\"30%\" width=\"100%\"  src=\"../assets/bannernosotros.png\">\r\n</div>\r\n<div style=\"text-align:center\">\r\n    \r\n    <div class=\"container\">\r\n            <div>\r\n            <br>\r\n            <h1 class=\"titulos\" ><strong>--  STEAK RESTAURANTES  --</strong></h1>\r\n            <h2 class=\"texto\"><i>\r\n                    Somos una franquicia reconocidad mundialmente por hacerte sentir el sabor y el olor de la parrilla. \r\n                Pensamos en invertir en Venezuela, ya que hay muchas personas talentosas e innovadoras en nuestro país, como también tenemos una excelente \r\n                calidad de carne, pollo, vegetales y otros alimento en Venezuela. \r\n                <br><br>    Por ello nuestros platos se diferencian de cualquiera que usted haya probado.\r\n                Nos posicionamos actualmente en el puesto #1 según el ranking de restaurantes de carnes de degusta.com y tripadvisor.com.   \r\n                Nuestra meta es hacerte agua la boca con nuestros suculentos platos.</i> </h2>\r\n\r\n          <br></div>\r\n          <div>\r\n            <h1 class=\"titulos\"><strong>--  HISTORIA  --</strong> </h1>\r\n            <h2 class=\"texto\">\r\n                <i>El restaurante Steak de Caracas, uno de los locales más prestigiosos de Venezuela. El potenciador de la comida a la leña y carbon es del señor Manuel \r\n                Barbosa Da Silva y ha sido reconocido 10 veces en los ultimos 2 años en los Premios de Gastronomía Nacional. \r\n                Barbosa inauguro el restaurante Steak hace 35 años.  </i>\r\n                <br>\r\n                <br>\r\n              \r\n            \r\n            </h2>\r\n            <br>\r\n            </div>\r\n\r\n            <h2><strong><i>\"No quisimos que Steak fuese un boom que solo levanta un restaurante ahora y lo hunde mañana, sino que se mantenga por generaciones y generaciones. \r\n                    Por eso, aunque es que restaurante nunca buscó el reconocimiento a través de la publicidad o la decoración, sino por el boca a boca de los que nos probaban.\"  -Barbosa Manuel</i></strong>\r\n       </h2> </div>\r\n       <br>\r\n       <br>\r\n    </div>\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display: flex;\n  flex-direction: row; }\n\n.flex-container > div {\n  width: 90%;\n  margin: 10px;\n  text-align: center;\n  line-height: 85px; }\n\n.titulos {\n  font-family: 'Anton', sans-serif;\n  font-size: 30pt;\n  text-align: center;\n  color: #500909; }\n\n.texto {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: justify;\n  color: black; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var footer_service_service_1 = __webpack_require__(/*! ../footer/footer-service.service */ "./src/app/components/footer/footer-service.service.ts");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(nav, footer) {
        this.nav = nav;
        this.footer = footer;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.footer.show();
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, footer_service_service_1.FooterServiceService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Barra de Navegación-->\r\n<div>\r\n\r\n    <nav>\r\n\r\n            <div style=\"text-align: center\">\r\n                  <a class=\"navbar-brand\" href='./admin'><img width=\"200\" alt=\"Steak Logo\" src=\"../assets/logofondo.png\" ></a>\r\n                  <br>\r\n                  <br>\r\n                </div>\r\n  \r\n              <div  class=\"navbar navbar-expand-lg\" style=\"text-align: center\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n              \r\n              <li class=\"nav-item\">\r\n                \r\n                <a class=\"nav-link\" class=\"titulos\" href=\"./admin\"><strong>Home</strong></a>\r\n            \r\n            </li>\r\n \r\n              <li class=\"nav-item\">\r\n        \r\n                  <a class=\"nav-link\" class=\"titulos\" href=\"./contact\"><strong>Sugerencias</strong></a>\r\n              \r\n                </li>\r\n        \r\n              <li class=\"nav-item dropdown\">\r\n    \r\n\r\n               <span> <a class=\"nav-link\" class=\"titulos\" ><strong>Modificar Menú</strong></a></span>\r\n               \r\n                <br>\r\n                    <a class=\"dropdown-content\" href=\"./aperitivos-admin\"><strong>Aperitivos</strong></a>\r\n                <br>\r\n                    <a class=\"dropdown-content\" href=\"./carnes-admin\"><strong>Carnes</strong></a>\r\n                <br>\r\n                <a class=\"dropdown-content\" href=\".bebidas-admin\"><strong>Bebidas</strong></a>\r\n                <br>\r\n                <a class=\"dropdown-content\" href=\"./postres-admin\"><strong>Postres</strong></a>\r\n              </li>  \r\n        \r\n        </ul>\r\n               </div>\r\n        </nav>\r\n         \r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzQAAAE4CAYAAACNL7YlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHtklEQVR4nO3cQUpjWQCG0ZtOBo404EARB4EgZiUu2AW4jogIDpUioAPNSFLjgoaCrrZff3LOAi7/5CV8cLmzMcZhAAAABP019QAAAIB/StAAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmCBgAAyBI0AABAlqABAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMgSNAAAQJagAQAAsgQNAACQJWgAAIAsQQMAAGQJGgAAIEvQAAAAWYIGAADIEjQAAECWoAEAALIEDQAAkCVoAACALEEDAABkCRoAACBrcXd39yUHHx0djdVqNbbb7ZecD3xfi8ViXF5ejqenp6mnAEHr9Xo8Pj5OPQP4jc1mM3a73fjx48cfnTM7HA6Hf2kTAADAf8qVMwAAIEvQAAAAWYIGAADIEjQAAECWoAEAALJmFxcXX/LK2Xw+H8vlcux2u684HvjGZrPZOD4+Hm9vb1NPAYKWy+V4fX2degbwG6enp2O/34+Pj48/Omc2xvBsMwAAkOTKGQAAkCVoAACALEEDAABkCRoAACBL0AAAAFmLm5ubqTf8YrVajf1+P15eXqaeAsRdXV2Nh4eHqWcA34DfE/h7Z2dn4/j4eNLvY3Y4HDzbDHxLn5+fYz6fTz0DAPhCrpwBAABZggYAAMgSNAAAQJagAQAAsgQNAACQtbi9vZ16wy/W6/V4f38fz8/PU08B4q6vr8f9/f3UM4BvYLPZjO12O/UM+N85Pz8fJycnk/7fzsYYnm0GAACSXDkDAACyBA0AAJAlaAAAgCxBAwAAZAkaAAAgS9AAAABZggYAAMj6CcyeUtVYDSboAAACEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEwLjEwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+R2luYSBDdWFkcmFkbzwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PnmQojwAAAAASUVORK5CYII=\");\n  -ms-grid-row-align: center;\n      align-self: center;\n  background-size: cover;\n  height: 170pt; }\n\nli {\n  margin-left: 180pt; }\n\nimg {\n  border-radius: 25px; }\n\n.titulos {\n  font-family: 'Lato', sans-serif;\n  color: white;\n  font-size: 20pt; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  z-index: 1;\n  background-color: rgba(53, 46, 46, 0.658);\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ "./src/app/components/admin/agregar-item/agregar-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/agregar-item/agregar-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"jumbotron\" style=\"text-align: center\"> \r\n  \r\n  <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\r\n\r\n        <label class=\"titulos\"><strong>---Añadir Producto---</strong></label>\r\n        \r\n        <div class=\"row\">\r\n                <label class=\"titulos2\">Nombre</label>\r\n      <input class=\"titulos3\" type=\"text\" placeholder=\"Agregar nombre\" [(ngModel)]=\"item.nombre\" name=\"nombre\">\r\n      <br>\r\n    <br>\r\n        </div>\r\n    <div class=\"row\">\r\n            <label class=\"titulos2\">Info</label>\r\n        <input  class=\"titulos3\" type=\"text\" placeholder=\"Agregar descripción\" [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\r\n        <br>\r\n        <br>\r\n    </div>\r\n        <div class=\"row\">\r\n                <label class=\"titulos2\">Precio</label>\r\n        <input type=\"number\"  class=\"titulos3\" placeholder=\"Agregar Precio\" [(ngModel)]=\"item.precio\" name=\"precio\">\r\n        </div>\r\n   \r\n    \r\n\r\n <!-- \r\n    \r\n        <div class=\"form-group\">\r\n           \r\n      <input type=\"file\" name=\"filename\" (change)=\"onFileSelected($event)\" [(ngModel)]=\"item.imagen\" accept=\"image/jpg, image/jpeg, image/png\">\r\n          <button type=\"button\" (click)=\"onUpload()\">Subir Archivo</button>\r\n        </div>\r\n\r\n\r\n-->\r\n\r\n<label class=\"titulos2\">Imagen</label>\r\n<input type=\"text\"  class=\"titulos3\" placeholder=\"Agregar Referencia a Imagen\" [(ngModel)]=\"item.imagen\" name=\"imagen\">\r\n\r\n\r\n\r\n    <label class=\"titulos2\">Agregue hasta un máximo de 3 opciones de extras para el plato:</label>\r\n    <div class=\"row\">\r\n            <label class=\"titulos2\">Extra 1</label>\r\n            <input type=\"text\"  class=\"titulos3\" placeholder=\"Extra 1\" [(ngModel)]=\"item.extra1\" name=\"extra1\">\r\n          \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n            <label class=\"titulos2\">Extra 2</label>\r\n            <input type=\"text\" class=\"titulos3\" placeholder=\"Extra 2\" [(ngModel)]=\"item.extra2\" name=\"extra2\">\r\n          \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n            <label class=\"titulos2\">Extra 3</label>\r\n            <input type=\"text\"  class=\"titulos3\" placeholder=\"Extra 3\" [(ngModel)]=\"item.extra3\" name=\"extra3\">\r\n          \r\n    </div>\r\n    <label class=\"titulos2\">*El producto estará disponible en el menú como opción predeterminada.</label>\r\n    \r\n\r\n    <button type=\"submit\" value=\"submit\" class=\"btn\"> <label class=\"titulos2\">AÑADIR</label> </button>\r\n\r\n  </form>\r\n </div>\r\n\r\n\r\n   "

/***/ }),

/***/ "./src/app/components/admin/agregar-item/agregar-item.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/agregar-item/agregar-item.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  border-collapse: collapse;\n  width: 100%; }\n\ninput.check {\n  margin: 1%; }\n\ntd, th {\n  border: 1px solid #000000;\n  text-align: left;\n  padding: 8px; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\n.content-box-red {\n  background-color: #f9dbdb;\n  border: 1px solid #e9b3b3; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #4d1b1b;\n  border-radius: 5%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  width: 80%;\n  height: 30px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px;\n  padding-left: 10px; }\n\nlabel {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: center;\n  color: black; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: black; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: black; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: black; }\n\nimg {\n  width: 100%;\n  height: 20%; }\n"

/***/ }),

/***/ "./src/app/components/admin/agregar-item/agregar-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/agregar-item/agregar-item.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var item_service_1 = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
var img_storage_service_1 = __webpack_require__(/*! ../../../services/img-storage.service */ "./src/app/services/img-storage.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var AgregarItemComponent = /** @class */ (function () {
    function AgregarItemComponent(http, toastr, itemService, imgStorageService) {
        this.http = http;
        this.toastr = toastr;
        this.itemService = itemService;
        this.imgStorageService = imgStorageService;
        this.item = {
            nombre: "",
            descripcion: "",
            precio: 0,
            disp: true,
            extra1: '',
            extra2: '',
            extra3: '',
            selected1: false,
            selected2: false,
            selected3: false,
            imagen: ''
        };
        this.selectedFile = null;
    }
    AgregarItemComponent.prototype.ngOnInit = function () {
    };
    AgregarItemComponent.prototype.onSubmit = function () {
        if (this.item.nombre != '' && this.item.descripcion != '' && this.item.precio > 0 && this.item.imagen != '') {
            this.itemService.addItem(this.item);
            this.item.nombre = '';
            this.item.descripcion = '';
            this.item.precio = 0;
            this.item.imagen = '';
            this.item.extra1 = '';
            this.item.extra2 = '';
            this.item.extra3 = '';
            this.item.selected1 = false;
            this.item.selected2 = false;
            this.item.selected3 = false;
        }
        this.toastr.success('Se ha añadido correctamente el producto', 'Operación Exitosa');
    };
    AgregarItemComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    AgregarItemComponent.prototype.onUpload = function () {
        this.http.post;
    };
    AgregarItemComponent = __decorate([
        core_1.Component({
            selector: 'app-agregar-item',
            template: __webpack_require__(/*! ./agregar-item.component.html */ "./src/app/components/admin/agregar-item/agregar-item.component.html"),
            styles: [__webpack_require__(/*! ./agregar-item.component.scss */ "./src/app/components/admin/agregar-item/agregar-item.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ngx_toastr_1.ToastrService, item_service_1.ItemService, img_storage_service_1.ImgStorageService])
    ], AgregarItemComponent);
    return AgregarItemComponent;
}());
exports.AgregarItemComponent = AgregarItemComponent;


/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align: center\">\r\n\r\n  <div class=\"jumbotron jumbotron-fluid\" style=\"text-align: center\">\r\n  \r\n    <div style=\"text-align:center\">\r\n     \r\n      <img width=\"250\" alt=\"SteakLogo\" src=\"../assets/logofondo.png\">\r\n  \r\n    </div>\r\n      \r\n      <div class=\"col-md-10 col-md-offset-3\">\r\n                \r\n      \r\n  <!-- Formulario de Inicio de Sesión-->      \r\n  <form [formGroup]=\"loginForm\" (submit)=\"onSubmitLogin()\">\r\n              \r\n    <div class=\"form-group\">\r\n                        \r\n      <h1 class=\"titulo\"><strong>Inicia Sesión con STEAK</strong></h1>\r\n                        \r\n    <!--Ingreso del correo electrónico en el formulario-->\r\n                    \r\n  <input type=\"email\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Ingresa tu correo electrónico\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" >\r\n                   \r\n                    <!--Validación de Errores-->\r\n                    <div class=\"titulo\" *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div class=\"titulo\" *ngIf=\"f.email.errors.required\">Es necesario que ingreses tu email</div>\r\n                    <div class=\"titulo\" *ngIf=\"f.email.errors.email\">El email ingresado es inválido</div>\r\n                    </div>\r\n    </div>\r\n  \r\n   <!--Ingreso de la contraseña en el formulario-->\r\n  <div class=\"form-group\">\r\n                        \r\n  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" name=\"password\" placeholder=\"Ingresa tu contraseña\">\r\n                  \r\n                   <!--Validación de Errores-->\r\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"titulo\"*ngIf=\"f.password.errors.required\">Es necesario que ingreses tu contraseña</div>\r\n                  <div class=\"titulo\" *ngIf=\"f.password.errors.minlength\">Tu contraseña debe tener mínimo 6 caracteres</div>\r\n                  </div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"boton3\"><strong>Ingresar</strong></button>\r\n  </div>\r\n  \r\n  \r\n  </form>\r\n          <button class=\"boton3\" (click)=\"forgotpassword()\"> <strong> Olvidé mi Contraseña </strong></button>\r\n  \r\n        </div>\r\n  \r\n    </div>\r\n          \r\n  \r\n          \r\n    \r\n            <div class=\"row\" >\r\n              \r\n                <br>\r\n                <p class=\"titulo\" style=\"text-align: center\"><strong>¿Aún no te has registrado?  <a href=\"/register\">Registrate en STEAK</a></strong></p>\r\n            </div>\r\n       \r\n        </div> "

/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('background.jpg');\n  background-position: center;\n  position: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #525252c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput[type=\"email\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKS6H55MjAAABYElEQVQ4y7XTz0uUQRzH8dc+PAmpPAhCYUIdZMmL4kloV0LoFuSly3MMxb8g6LKIByFSrx3Fv6IOHtWtLkIUXQpXaA+15g9CYo0UHw/uLi67K2uwnznMfL/zec8MM/Ol00qBLnfa8P7wDyKL9iRttD3L+kKznsn53MYOoxYcsC0nNK33SnNkRiinQCIWKNlyu6V9wCclgVgSgDMZkffSTe3DPrgp4wyCSnJH1r53xhvsD+TtytipJhJxZdTjrT8e19mnlL3RXYliyWWA0KoT07V41qkVYS1uAOClxDyYl3hVNxdLQvXqknZsziBmHMmIHNVbLu/Qbc1vWU+U/fXUiJIt/a2O1Cdv1xgYqfRp330x0Ay45aOi+w3Xetc32+5VgaCW3tRjwtcGoOihsnx1qSqw7tiEYtOXLpn004YbF0DBEFZM+qWVDj3yWsqQQspzL8y1/b2XrldAi6L/KNFO6xxTk4iUCPdxtAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0yMFQxNzo0MTo0NiswMjowMICV3pcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMjBUMTc6NDE6NDYrMDI6MDDxyGYrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\ninput[type=\"password\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKjK4y5yvAAAAzElEQVQ4y72SsQ2DMBREH2mpKTxIQIpgEM+Qnk2yBxUToEgkMyBRhBFSReinwCAbHAKKlLP0i/PdP3/bAXOEnDlxBO5cufBkFRkNYq2GbF3eO3JB6D9bQtO9Q6NQaDqTEvoNuZFHExMZS+43FAiCdjiNIBR+w9BNOZwyqRMCa1MWjIc9sBOjoTWdWFzryLbukWRD8+CnI/1oqEhIqNaM7qAxALFvfH9CaNVNCSUA5faE3UM/rLrJ8LLqDP976dtX5UyRUi/+qb1q0kH4Bmupdt1u7rNtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTIwVDE3OjQyOjUwKzAyOjAwxNhQMAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0yMFQxNzo0Mjo1MCswMjowMLWF6IwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\nbutton {\n  color: #a89e9e;\n  padding: 14px 20px;\n  margin: 8pt 8pt;\n  margin-left: 50pt;\n  border: none;\n  cursor: pointer;\n  width: 180pt;\n  height: 40pt;\n  border-radius: 10px;\n  float: left; }\n\n.boton3 {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\nimg {\n  border-radius: 20px; }\n\n.titulo {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: justify;\n  color: white;\n  margin-left: 120pt; }\n\n.titulo2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  color: white; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n"

/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//Métodos de autenticación
var authadmin_service_1 = __webpack_require__(/*! ../../../../services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(toastr, fb, authService, afs, router) {
        this.toastr = toastr;
        this.fb = fb;
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.resetPassword = false;
        this.errorMessage = '';
        this.submitted = false;
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    Object.defineProperty(LoginAdminComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Función que valida el ingreso del usuario en la página
    LoginAdminComponent.prototype.onSubmitLogin = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else if (this.loginForm.valid) {
            this.authService.loginEmail(this.email, this.password).then(function (res) {
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    LoginAdminComponent.prototype.forgotpassword = function () {
        var _this = this;
        this.authService.resetPassword(this.email)
            .then(function () { return _this.resetPassword = true; })
            .catch(function (_error) {
            console.log(_error);
        });
    };
    LoginAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-login-admin',
            template: __webpack_require__(/*! ./login-admin.component.html */ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.html"),
            styles: [__webpack_require__(/*! ./login-admin.component.scss */ "./src/app/components/admin/ingreso-admin/login-admin/login-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, forms_1.FormBuilder, authadmin_service_1.AuthAdminService, auth_1.AngularFireAuth, router_1.Router])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());
exports.LoginAdminComponent = LoginAdminComponent;


/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Inicio del container fluid-->\r\n<div class=\"container-fluid\" style=\"text-align: center\">\r\n\r\n  <div class=\"jumbotron\">\r\n  \r\n    <div style=\"text-align:center\">\r\n     \r\n      <img width=\"250\" alt=\"SteakLogo\" src=\"../assets/logofondo.png\">\r\n  \r\n    </div>\r\n    <br>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n    \r\n      <div>\r\n\r\n\r\n<!-- Formulario de Registo-->      \r\n<form [formGroup]=\"registerForm\" (submit)=\"tryRegister()\">\r\n          \r\n<div class=\"form-group\">\r\n                    \r\n  <h1 class=\"titulo\"><strong>Regístrate en STEAK (Nuevo ADMIN)</strong></h1>\r\n                    \r\n  <!--Ingreso del correo electrónico en el formulario-->\r\n                \r\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Ingresa tu correo electrónico\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" >\r\n               \r\n                <!--Validación de Errores-->\r\n                <div class=\"titulo\" *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                <div class=\"titulo\" *ngIf=\"f.email.errors.required\">Es necesario que ingreses tu email</div>\r\n                <div class=\"titulo\" *ngIf=\"f.email.errors.email\">El email ingresado es inválido</div>\r\n                </div>\r\n</div>\r\n\r\n<!--Ingreso de la contraseña en el formulario-->\r\n<div class=\"form-group\">\r\n                    \r\n<input type=\"password\" formControlName=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" name=\"password\" placeholder=\"Ingresa tu contraseña\">\r\n              \r\n               <!--Validación de Errores-->\r\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div class=\"titulo\"*ngIf=\"f.password.errors.required\">Es necesario que ingreses tu contraseña</div>\r\n              <div class=\"titulo\" *ngIf=\"f.password.errors.minlength\">Tu contraseña debe tener mínimo 6 caracteres</div>\r\n              </div>\r\n</div>\r\n\r\n\r\n<button type=\"submit\" class=\"boton3\"><strong>Registro</strong></button>\r\n\r\n\r\n\r\n</form>\r\n\r\n      </div>\r\n  \r\n    </div>\r\n        \r\n            <div>\r\n              \r\n            <br>\r\n                <p class=\"titulo2\"><strong>¿Ya tienes cuenta en STEAK?  <a href=\"/login\">Ingresa con tus datos</a></strong></p>\r\n            </div>\r\n          </div> \r\n  </div> \r\n  \r\n  </div> <!--Final del div container fluid-->\r\n"

/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('background.jpg');\n  background-position: center;\n  position: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #525252c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput[type=\"email\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKS6H55MjAAABYElEQVQ4y7XTz0uUQRzH8dc+PAmpPAhCYUIdZMmL4kloV0LoFuSly3MMxb8g6LKIByFSrx3Fv6IOHtWtLkIUXQpXaA+15g9CYo0UHw/uLi67K2uwnznMfL/zec8MM/Ol00qBLnfa8P7wDyKL9iRttD3L+kKznsn53MYOoxYcsC0nNK33SnNkRiinQCIWKNlyu6V9wCclgVgSgDMZkffSTe3DPrgp4wyCSnJH1r53xhvsD+TtytipJhJxZdTjrT8e19mnlL3RXYliyWWA0KoT07V41qkVYS1uAOClxDyYl3hVNxdLQvXqknZsziBmHMmIHNVbLu/Qbc1vWU+U/fXUiJIt/a2O1Cdv1xgYqfRp330x0Ay45aOi+w3Xetc32+5VgaCW3tRjwtcGoOihsnx1qSqw7tiEYtOXLpn004YbF0DBEFZM+qWVDj3yWsqQQspzL8y1/b2XrldAi6L/KNFO6xxTk4iUCPdxtAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0yMFQxNzo0MTo0NiswMjowMICV3pcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMjBUMTc6NDE6NDYrMDI6MDDxyGYrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\ninput[type=\"password\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKjK4y5yvAAAAzElEQVQ4y72SsQ2DMBREH2mpKTxIQIpgEM+Qnk2yBxUToEgkMyBRhBFSReinwCAbHAKKlLP0i/PdP3/bAXOEnDlxBO5cufBkFRkNYq2GbF3eO3JB6D9bQtO9Q6NQaDqTEvoNuZFHExMZS+43FAiCdjiNIBR+w9BNOZwyqRMCa1MWjIc9sBOjoTWdWFzryLbukWRD8+CnI/1oqEhIqNaM7qAxALFvfH9CaNVNCSUA5faE3UM/rLrJ8LLqDP976dtX5UyRUi/+qb1q0kH4Bmupdt1u7rNtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTIwVDE3OjQyOjUwKzAyOjAwxNhQMAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0yMFQxNzo0Mjo1MCswMjowMLWF6IwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\nbutton {\n  color: #a89e9e;\n  padding: 14px 20px;\n  margin: 8pt 8pt;\n  margin-left: 50pt;\n  border: none;\n  cursor: pointer;\n  width: 180pt;\n  height: 40pt;\n  border-radius: 10px;\n  float: left; }\n\n.boton3 {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\nimg {\n  border-radius: 20px; }\n\n.titulo {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: justify;\n  color: white;\n  margin-left: 120pt; }\n\n.titulo2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  color: white; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n"

/***/ }),

/***/ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//Métodos de autenticación
var authadmin_service_1 = __webpack_require__(/*! ../../../../services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var RegistroAdminComponent = /** @class */ (function () {
    function RegistroAdminComponent(authService, fb, afs, router) {
        this.authService = authService;
        this.fb = fb;
        this.afs = afs;
        this.router = router;
        this.isadmin = true;
        this.submitted = false;
    }
    RegistroAdminComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    Object.defineProperty(RegistroAdminComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegistroAdminComponent.prototype.tryRegister = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else if (this.registerForm.valid) {
            this.authService.registerUser(this.email, this.password).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    RegistroAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-registro-admin',
            template: __webpack_require__(/*! ./registro-admin.component.html */ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.html"),
            styles: [__webpack_require__(/*! ./registro-admin.component.scss */ "./src/app/components/admin/ingreso-admin/registro-admin/registro-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [authadmin_service_1.AuthAdminService, forms_1.FormBuilder, auth_1.AngularFireAuth, router_1.Router])
    ], RegistroAdminComponent);
    return RegistroAdminComponent;
}());
exports.RegistroAdminComponent = RegistroAdminComponent;


/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 5%\">\r\n    <h1>Carrito</h1>\r\n    <br>\r\n\r\n    <div *ngIf=\" carrito.length > 0 ; else emptyCart\">\r\n        <table class=\"center\">\r\n            <tr>\r\n                <th class=\"styled\">Imgen</th>\r\n                <th class=\"styled\">Plato</th>\r\n                <th class=\"styled\">Descripción</th>\r\n                <th class=\"styled\">Extras</th>\r\n                <th class=\"styled\">Precio</th>\r\n                <th class=\"styled\"></th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of carrito\">\r\n                <td class=\"styled\"><img src=\"{{item.imagen}}\" heigth=\"100px\" width=\"100px\"></td>\r\n                <td class=\"styled\">{{item.nombre}}</td>\r\n                <td class=\"styled\">{{item.descripcion}}</td>\r\n                <td class=\"styled\"><p *ngIf=\"item.selected1\">{{item.extra1}}</p>\r\n                    <p *ngIf=\"item.selected2\">{{item.extra2}}</p>\r\n                    <p *ngIf=\"item.selected3\">{{item.extra3}}</p></td>\r\n                <td class=\"styled\">{{item.precio | currency : 'Bs.S ' : 'code' : '1.2-2'}}</td>\r\n                <td class=\"styled\"><button (click)=\"removeItem($event, item)\"><strong>ELIMINAR</strong></button></td>\r\n            </tr>\r\n        </table>\r\n\r\n        <div style=\"text-align: center\">\r\n                <br>\r\n                <h4>Subtotal: {{ subtotal | currency : '$ ' : 'code' : '1.2-2' }}</h4>\r\n                <h4>IVA (16%): {{ iva | currency : '$ ' : 'code' : '1.2-2' }}</h4>\r\n                <h4>Envío (4%): {{ envio | currency : '$ ' : 'code' : '1.2-2' }}</h4>\r\n                <h4>Total: {{ total | currency : '$ ' : 'code' : '1.2-2' }}</h4>\r\n                <br>\r\n                <a href=\"/pago\"><button><strong>PROCEDER A PAGO</strong></button></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #emptyCart>\r\n    <br>\r\n    <h3>El carrito está vacío.</h3>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n  border: 1px solid black; }\n\ntd.styled {\n  border: 1px solid black;\n  text-align: center; }\n\nth.styled {\n  border: 1px solid black;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var orden_service_1 = __webpack_require__(/*! ../../services/orden.service */ "./src/app/services/orden.service.ts");
var CartComponent = /** @class */ (function () {
    function CartComponent(nav, order) {
        this.nav = nav;
        this.order = order;
        this.carrito = [];
        this.subtotal = 0;
        this.iva = 0;
        this.envio = 0;
        this.total = 0;
        this.i = 0;
        this.index = 0;
        this.address = "";
        this.email = sessionStorage.useremail;
        this.orden = {
            email: '',
            orden: [],
            monto: 0,
            direccion: '',
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.order.getData();
        //Validación para carrito vacío
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            //Suma de los precios
            for (this.i = 0; this.i < this.carrito.length; this.i++) {
                this.subtotal = this.subtotal + this.carrito[this.i].precio;
            }
            this.iva = this.subtotal * 0.16;
            this.envio = this.subtotal * 0.04;
            this.total = this.subtotal + this.iva + this.envio;
            this.orden.email = this.email;
            this.orden.orden = this.carrito;
            this.orden.monto = this.total;
        }
        else {
        }
    };
    CartComponent.prototype.removeItem = function (event, item) {
        this.index = this.carrito.indexOf(item);
        this.subtotal = 0;
        if (this.index > -1) {
            this.carrito.splice(this.index, 1);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
            for (this.i = 0; this.i < this.carrito.length; this.i++) {
                this.subtotal = this.subtotal + this.carrito[this.i].precio;
            }
            this.iva = this.subtotal * 0.16;
            this.envio = this.subtotal * 0.04;
            this.total = this.subtotal + this.iva + this.envio;
            this.orden.orden = this.carrito;
            this.orden.monto = this.total;
        }
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, orden_service_1.OrdenService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "./src/app/components/changepassword/changepassword.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/changepassword/changepassword.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form (submit)=\"updatepassword()\">\r\n            \r\n    <div class=\"form-group\">\r\n            \r\n      <h1 class=\"titulo\"><strong>Cambio de Contraseña</strong></h1>\r\n          \r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n            \r\n        <!--Ingreso de la contraseña en el formulario-->\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldpassword\" name=\"password\" placeholder=\"Ingresa tu contraseña actual\">\r\n    </div> \r\n\r\n    <div class=\"form-group\">\r\n            \r\n        <!--Ingreso de la contraseña en el formulario-->\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newpassword\" name=\"password\" placeholder=\"Ingresa tu contraseña actual\">\r\n    </div> \r\n    \r\n    <button type=\"submit\" class=\"boton3\"><strong>Guardar</strong></button>\r\n\r\n  </form>"

/***/ }),

/***/ "./src/app/components/changepassword/changepassword.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/changepassword/changepassword.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/changepassword/changepassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/changepassword/changepassword.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(afAuth, nav, authservice) {
        this.nav = nav;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    ChangepasswordComponent.prototype.updatepassword = function () {
    };
    ChangepasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/components/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/components/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, header_service_service_1.HeaderServiceService, auth_service_1.AuthService])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
exports.ChangepasswordComponent = ChangepasswordComponent;


/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n    \r\n    <img height=\"30%\" width=\"100%\"  src=\"../assets/bannercontacto.png\">\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<div style=\"text-align: center\">\r\n\r\n<div class=\"jumbotron\">\r\n  \r\n<form [formGroup]=\"myForm\" [hidden]=\"success\" (ngSubmit)=\"submitHandler()\">\r\n  \r\n  <label for=\"select\" class=\"titulos\"><strong>¿Por qué nos escribes hoy?</strong></label>\r\n  <br>\r\n  <label for=\"select\" class=\"titulos2\"><strong>Rellena el formulario y haznos saber tu opinión</strong></label>\r\n\r\n      <br>\r\n      <br>\r\n\r\n      <input id=\"mensaje\" type=\"text\" formControlName=\"nombre\" placeholder=\"Ingresa tu nombre y tu apellido\">\r\n      <br>\r\n      <br>\r\n\r\n      <input id=\"mensaje\" type=\"text\" formControlName=\"email\"  placeholder=\"Ingresa tu correo electrónico\" >\r\n      <br>\r\n      <br>\r\n      \r\n      <select formControlName=\"motivo\" >\r\n        <option value=\"\" disabled selected>Selecciona el motivo de contacto</option>\r\n        <option>Pregunta</option>\r\n        <option>Reclamos</option>\r\n        <option>Sugerencias</option>\r\n      </select>\r\n      <br>\r\n      <br>\r\n  \r\n      <input id=\"mensaje\" type=\"text\" maxlength=\"2000\" placeholder=\"Escribe tu mensaje para nosotros...\" formControlName=\"mensaje\">\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <button type=\"submit\" class=\"titulos2\" ><strong>Enviar</strong></button>\r\n  \r\n</form>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<br>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #330606c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\nselect {\n  width: 80%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2); }\n\ninput {\n  width: 80%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2); }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, route, toastr, afs, nav) {
        this.fb = fb;
        this.route = route;
        this.toastr = toastr;
        this.afs = afs;
        this.nav = nav;
        // Form state
        this.loading = false;
        this.success = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            nombre: ['', forms_2.Validators.required],
            email: ['', forms_2.Validators.required],
            motivo: [''],
            mensaje: ['', forms_2.Validators.required]
        });
        this.preloadData();
        this.nav.show();
    };
    ContactComponent.prototype.submitHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formValue, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        formValue = this.myForm.value;
                        if (!this.myForm.invalid) return [3 /*break*/, 1];
                        this.toastr.error('No podemos enviar un formulario inválido. Intente de nuevo', 'Error en el formulario');
                        return [3 /*break*/, 5];
                    case 1:
                        if (!this.myForm.valid) return [3 /*break*/, 5];
                        this.toastr.success('Su mensaje fue enviado exitosamente', 'Formulario Enviado');
                        this.route.navigate(['/contacto']);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.afs.collection('contacto').add(formValue)];
                    case 3:
                        _a.sent();
                        this.success = true;
                        console.log(this.success);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ContactComponent.prototype.preloadData = function () {
        var _this = this;
        this.afs.doc('/contacto/l7F25jNh1PXFNiNxbX65').valueChanges().pipe(operators_1.tap(function (data) {
            _this.myForm.patchValue(data);
        }))
            .subscribe();
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        core_2.NgModule({
            imports: [forms_1.FormsModule]
        }),
        __metadata("design:paramtypes", [forms_2.FormBuilder, router_1.Router, ngx_toastr_1.ToastrService, firestore_1.AngularFirestore, header_service_service_1.HeaderServiceService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/components/footer/footer-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/footer/footer-service.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FooterServiceService = /** @class */ (function () {
    function FooterServiceService() {
        this.visible = false;
    }
    FooterServiceService.prototype.hide = function () { this.visible = false; };
    FooterServiceService.prototype.show = function () { this.visible = true; };
    FooterServiceService.prototype.toggle = function () { this.visible = !this.visible; };
    FooterServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FooterServiceService);
    return FooterServiceService;
}());
exports.FooterServiceService = FooterServiceService;


/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\r\n<footer id=\"myFooter\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n               \r\n            <div class=\"col-sm-3 myCols\">\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <a href=\"#\" style=\"font-size: 16pt\"><strong>Home</strong></a>\r\n            </div>\r\n                <div class=\"col-sm-3 myCols\">\r\n                      <h5>Menu</h5>\r\n                      <ul>\r\n                          <li><a href=\"./menu/aperitivos\">Aperitivos</a></li>\r\n                          <li><a href=\"./menu/carnes\">Carnes</a></li>\r\n                          <li><a href=\"./menu/bebidas\">Bebidas</a></li>\r\n                          <li><a href=\"./menu/postres\">Postres</a></li>\r\n                      </ul>\r\n                  </div>\r\n                  <div class=\"col-sm-3 myCols\"><!-- *ngIf=\" user.authservice | async\"-->\r\n                      <h5>Steak</h5>\r\n                      <ul>\r\n                          <li><a href=\"./about\">Nosotros</a></li>\r\n                          <li><a href=\"./contact\">Contacto</a></li>\r\n                      </ul>\r\n                  </div>\r\n                  <div class=\"col-sm-3 myCols\">\r\n                      <h5>Perfil</h5>\r\n                      <ul>\r\n                          <li><a href=\"#\">Cambiar Contraseña</a></li>\r\n                          <li><a href=\"#\">Ver Carrito</a></li>\r\n                          <li><a href=\"#\">Ver Órdenes Pasadas</a></li>\r\n                          <li><a href=\"#\">Cerrar Sesión</a></li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n       \r\n          <div class=\"footer-copyright\">\r\n              <p> 2018 Copyright STEAK Restaurant </p>\r\n          </div>\r\n      </footer>\r\n      "

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter {\n  background-color: #330606;\n  color: white; }\n\n#myFooter .footer-copyright {\n  background-color: #0f0101;\n  padding-top: 3px;\n  padding-bottom: 2px;\n  text-align: center; }\n\n#myFooter .footer-copyright p {\n  margin: 10px;\n  color: #ccc; }\n\n#myFooter ul {\n  list-style-type: none;\n  padding-left: 0;\n  line-height: 1.7; }\n\n#myFooter h5 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  color: white;\n  font-weight: bold;\n  margin-top: 30px; }\n\n#myFooter a {\n  font-family: 'PT Serif', serif;\n  font-size: 11pt;\n  color: #fafafa;\n  text-decoration: none; }\n\n#myFooter a:hover, #myFooter a:focus {\n  text-decoration: none;\n  color: white; }\n\n#myFooter .myCols {\n  text-align: center; }\n\n#myFooter .social-networks {\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 38px; }\n\n#myFooter .social-networks a {\n  font-size: 32px;\n  margin-right: px;\n  margin-left: 5px;\n  color: #f9f9f9;\n  padding: 10px;\n  transition: 0.2s; }\n\n#myFooter .social-networks a:hover {\n  text-decoration: none; }\n\n#myFooter .facebook:hover {\n  color: #0077e2; }\n\n#myFooter .google:hover {\n  color: #ef1a1a; }\n\n#myFooter .twitter:hover {\n  color: #00aced; }\n\n@media screen and (max-width: 767px) {\n  #myFooter {\n    text-align: center; } }\n\n/* CSS used for positioning the footers at the bottom of the page. */\n\n/* You can remove this. */\n\nhtml {\n  height: 100% !important; }\n\nbody {\n  display: flex;\n  display: -webkit-flex;\n  flex-direction: column;\n  height: 100%; }\n\n.content {\n  flex: 1 0 auto;\n  -webkit-flex: 1 0 auto;\n  min-height: 200px; }\n\n#myFooter {\n  flex: 0 0 auto;\n  -webkit-flex: 0 0 auto; }\n\na {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: center;\n  color: white;\n  margin-left: 10pt; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var footer_service_service_1 = __webpack_require__(/*! ./footer-service.service */ "./src/app/components/footer/footer-service.service.ts");
var authadmin_service_1 = __webpack_require__(/*! ../../services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(footer, authadmin, authService) {
        this.footer = footer;
        this.authadmin = authadmin;
        this.authService = authService;
        this.footerOpen = false;
    }
    FooterComponent.prototype.toggleNavbar = function () {
        this.footerOpen = !this.footerOpen;
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [footer_service_service_1.FooterServiceService, authadmin_service_1.AuthAdminService, auth_service_1.AuthService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/header/header-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/header/header-service.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HeaderServiceService = /** @class */ (function () {
    function HeaderServiceService() {
        this.visible = false;
    }
    HeaderServiceService.prototype.hide = function () { this.visible = false; };
    HeaderServiceService.prototype.show = function () { this.visible = true; };
    HeaderServiceService.prototype.toggle = function () { this.visible = !this.visible; };
    HeaderServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeaderServiceService);
    return HeaderServiceService;
}());
exports.HeaderServiceService = HeaderServiceService;


/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Barra de Navegación-->\r\n<div>\r\n\r\n<nav class=\"navbar navbar-expand-lg \" *ngIf=\"nav.visible\">\r\n        <div style=\"text-align: center\">\r\n              <a class=\"navbar-brand\" href='./home'><img width=\"150\" alt=\"Steak Logo\" src=\"../assets/logofondo.png\" ></a>\r\n              <br>\r\n              <br>\r\n            </div>\r\n      \r\n       <!-- <button class=\" navbar-toggler\" type=\"button\" >(click)=\"toggleNavbar()\"-->\r\n          <!--<span class=\"navbar-toggler-icon\"></span>\r\n          </button>-->\r\n\r\n          \r\n<!--LINKS DEL HEADER-->\r\n\r\n          <!--<div class=\"collapse navbar-collapse \" style=\"text-align: center\" > [ngClass]=\"{ 'show': navbarOpen }\"-->\r\n          <div style=\"text-align: center\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n\r\n         <div *ngIf=\" authService.user | async\">\r\n                <p> ¡Bienvenido {{ (authService.user | async)?.email }}!</p>\r\n         </div>\r\n         <div *ngIf=\"authadmin.admin | async\">\r\n            <p> ¡Bienvenido {{ (authadmin.admin | async)?.email }}!</p>\r\n     </div>\r\n  \r\n                \r\n            <li class=\"nav-item\"  *ngIf=\" authService.user | async\">\r\n    \r\n                <a class=\"nav-link\" class=\"titulos\"  href=\"#\" (click)=\"onClickLogout()\"><strong>Cerrar Sesión</strong></a>\r\n               \r\n              </li>\r\n\r\n              <li class=\"nav-item\"  *ngIf=\" authadmin.admin | async\">\r\n    \r\n                  <a class=\"nav-link\" class=\"titulos\"  href=\"#\" (click)=\"onClickLogout2()\"><strong>Cerrar Sesión</strong></a>\r\n                 \r\n                </li>\r\n  \r\n         <li *ngIf=\"admin == 'false'\" class=\"nav-item\">\r\n    \r\n              <a class=\"nav-link\" class=\"titulos\" href=\"./ordenes_pasadas\"><strong>Órdenes Pasadas</strong></a>\r\n          \r\n            </li>\r\n\r\n\r\n\r\n          <li *ngIf=\"admin == 'false'\" class=\"nav-item\">\r\n    \r\n              <a class=\"nav-link\" class=\"titulos\" href=\"./cart\"><strong>Carrito</strong></a>\r\n          \r\n            </li>\r\n\r\n          <li *ngIf=\"admin == 'false'\" class=\"nav-item\">\r\n    \r\n              <a class=\"nav-link\" class=\"titulos\" href=\"./contact\"><strong>Contacto</strong></a>\r\n          \r\n            </li>\r\n         \r\n         \r\n         <li *ngIf=\"admin == 'false'\" class=\"nav-item \">\r\n    \r\n              <a class=\"nav-link\" href=\"./about\" class=\"titulos\"><strong>Nosotros</strong></a>\r\n         \r\n            </li>\r\n\r\n            <li class=\"nav-item \">\r\n    \r\n              <a class=\"nav-link\" (click)=\"changepassword()\" class=\"titulos\"><strong>Cambiar contraseña</strong></a>\r\n         \r\n            </li>\r\n         \r\n         \r\n         \r\n            <li class=\"nav-item\">\r\n          \r\n            <a class=\"nav-link\" class=\"titulos\" href=\"./menu\"><strong>Menú</strong></a>\r\n          \r\n          </li>\r\n          <li class=\"nav-item\">\r\n            \r\n            <a class=\"nav-link\" class=\"titulos\" href=\"./home\"><strong>Home</strong></a>\r\n        \r\n        </li>\r\n\r\n          \r\n            \r\n\r\n\r\n\r\n    <!-- \r\n          <li class=\"nav-item dropdown\">\r\n\r\n\r\n         <div *ngIf=\" authService.user | async\">\r\n           <span> <a class=\"nav-link\" class=\"titulos\" style=\"color: white\" ><strong>Perfil</strong></a></span>\r\n           <br>\r\n           <br>\r\n           <br>\r\n           <br>\r\n\r\n        \r\n           <p class=\"dropdown-content\" style=\"color: white\"> ¡Bienvenido  <br>{{ (authService.user | async)?.email }}!</p>\r\n          \r\n            <br>\r\n                <a class=\"dropdown-content\" href=\"./cart\"><strong>Carrito</strong></a>\r\n            <br>\r\n            <br>\r\n                <a class=\"dropdown-content\" href=\"./perfil\"><strong>Órdenes Pasadas</strong></a>\r\n            <br>\r\n            <br>\r\n                <a class=\"dropdown-content\" href=\"#\" (click)=\"onClickLogout()\" ><strong>Cerrar Sesión</strong></a>\r\n          </div>\r\n\r\n          </li>  \r\n    -->\r\n    </ul>\r\n           </div>\r\n    </nav>\r\n     \r\n  </div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #500101;\n  width: auto; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  display: block;\n  zoom: 1; }\n\nul:after {\n  content: \" \";\n  display: block;\n  font-size: 0;\n  height: 0;\n  clear: both;\n  visibility: hidden; }\n\nul li {\n  display: inline-block;\n  padding: 0;\n  margin: 0; }\n\nul li {\n  float: right; }\n\nul {\n  text-align: center; }\n\nul li {\n  color: #ffffff;\n  text-decoration: none;\n  display: block;\n  padding: 10px 20px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 12px;\n  position: relative;\n  transition: color .25s; }\n\nul li:hover {\n  color: #4e4e4e; }\n\nul li:hover:before {\n  width: 100%; }\n\nul li:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: -3px;\n  top: 19px;\n  height: 6px;\n  width: 6px;\n  background: #ffffff;\n  opacity: .5; }\n\nul li:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 0;\n  background: #979797;\n  transition: width .25s; }\n\nul li.last > a:after,\nul li:last-child > a:after {\n  display: none; }\n\nul li.active {\n  color: #333333; }\n\nul li.active a:before {\n  width: 100%; }\n\n.liprincipal.last > a:after,\n.liprincipal:last-child > a:after {\n  display: block; }\n\nli:first-child a:after {\n  display: none; }\n\na {\n  font-family: 'PT Serif', serif;\n  font-size: 13pt;\n  text-align: center;\n  color: white;\n  margin-left: 10pt; }\n\np {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white;\n  margin-left: 10pt; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  min-width: 300px;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.801);\n  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.2); }\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\nimg {\n  border-radius: 40px; }\n\nfooter {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center; }\n\n/*\r\n\r\nnav\r\n{\r\n        background-color:black;\r\n        align-self: center;\r\n        background-size: cover;     \r\n}\r\nli {\r\n        margin: 2pt;\r\n}\r\n\r\n      \r\n.titulos\r\n{\r\n   font-family: 'Lato', sans-serif;\r\n    color: white;\r\n    font-size: 20pt;\r\n \r\n}\r\n\r\n\r\n*/\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ./header-service.service */ "./src/app/components/header/header-service.service.ts");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var authadmin_service_1 = __webpack_require__(/*! ../../services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(nav, authadmin, authService, toastr) {
        this.nav = nav;
        this.authadmin = authadmin;
        this.authService = authService;
        this.toastr = toastr;
        this.navbarOpen = false;
        this.resetPassword = false;
        this.admin = sessionStorage.getItem("isadmin");
    }
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onClickLogout = function () {
        sessionStorage.clear();
        this.authService.logout();
    };
    HeaderComponent.prototype.onClickLogout2 = function () {
        sessionStorage.clear();
        this.authadmin.logout();
    };
    HeaderComponent.prototype.changepassword = function () {
        var _this = this;
        this.emailUsuario = sessionStorage.useremail;
        this.authService.resetPassword(this.emailUsuario)
            .then(function () {
            _this.resetPassword = true,
                _this.toastr.warning('Revisa tu correo electrónico para realizar el cambio de contraseña', 'Cambio de contraseña');
        })
            .catch(function (_error) {
            console.log(_error);
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        core_2.NgModule({}),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, authadmin_service_1.AuthAdminService, auth_service_1.AuthService, ngx_toastr_1.ToastrService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \r\n<div class=\"panel panel-default\"  >\r\n \r\n<div style=\"text-align: center\" >\r\n\r\n    \r\n    <a href=\"./home\"> <img width=\"100%\" alt=\"Banner Promocional\" src=\"../assets/bannerhome1.jpg\"> </a>\r\n    <br>\r\n    <br>\r\n</div>\r\n\r\n<div style=\"text-align: center\" >\r\n\r\n    \r\n    <a href=\"./home\"> <img  width=\"100%\"alt=\"Banner Promocional\"   src=\"../assets/bannerhome2.jpg\"> </a>\r\n    <br>\r\n    <br>\r\n</div>\r\n\r\n<div style=\"text-align: center\">\r\n\r\n    \r\n    <a href=\"./home\"> <img width=\"100%\" alt=\"Banner Promocional\" src=\"../assets/bannerhome3.jpg\"> </a>\r\n    <br>\r\n    <br>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  background-color: white;\n  background-repeat: repeat-y;\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var footer_service_service_1 = __webpack_require__(/*! ../footer/footer-service.service */ "./src/app/components/footer/footer-service.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(nav, footer) {
        this.nav = nav;
        this.footer = footer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.footer.show();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, footer_service_service_1.FooterServiceService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/ingreso/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/ingreso/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align: center\">\r\n<br>\r\n<br>\r\n\r\n<div class=\"jumbotron jumbotron-fluid\" style=\"text-align: center\">\r\n\r\n  <div style=\"text-align:center\">\r\n   \r\n    <img width=\"250\" alt=\"SteakLogo\" src=\"../assets/logofondo.png\">\r\n\r\n  </div>\r\n    \r\n    <div class=\"col-md-10 col-md-offset-3\">\r\n              \r\n    \r\n<!-- Formulario de Inicio de Sesión-->      \r\n<form [formGroup]=\"loginForm\" (submit)=\"onSubmitLogin()\">\r\n            \r\n  <div class=\"form-group\">\r\n                      \r\n    <h1 class=\"titulo\"><strong>Inicia Sesión con STEAK</strong></h1>\r\n                      \r\n  <!--Ingreso del correo electrónico en el formulario-->\r\n                  \r\n<input type=\"email\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Ingresa tu correo electrónico\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" >\r\n                 \r\n                  <!--Validación de Errores-->\r\n                  <div class=\"titulo\" *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"titulo\" *ngIf=\"f.email.errors.required\">Es necesario que ingreses tu email</div>\r\n                  <div class=\"titulo\" *ngIf=\"f.email.errors.email\">El email ingresado es inválido</div>\r\n                  </div>\r\n  </div>\r\n\r\n <!--Ingreso de la contraseña en el formulario-->\r\n<div class=\"form-group\">\r\n                      \r\n<input type=\"password\" formControlName=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" name=\"password\" placeholder=\"Ingresa tu contraseña\">\r\n                \r\n                 <!--Validación de Errores-->\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <div class=\"titulo\"*ngIf=\"f.password.errors.required\">Es necesario que ingreses tu contraseña</div>\r\n                <div class=\"titulo\" *ngIf=\"f.password.errors.minlength\">Tu contraseña debe tener mínimo 6 caracteres</div>\r\n                </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <button type=\"submit\" class=\"boton3\"><strong>Ingresar</strong></button>\r\n</div>\r\n<button class=\"boton3\" (click)=\"forgotpassword()\"> <strong> Olvidé mi Contraseña </strong></button>\r\n \r\n  <p class=\"titulo\" style=\"text-align: center\"><strong>¿Aún no te has registrado?  <a href=\"/register\">Registrate en STEAK</a></strong></p>\r\n          \r\n    \r\n</form>\r\n        \r\n\r\n      </div>\r\n\r\n  </div>\r\n        \r\n\r\n        \r\n  \r\n         \r\n      </div> "

/***/ }),

/***/ "./src/app/components/ingreso/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/ingreso/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('background.jpg');\n  background-position: center;\n  position: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #525252c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput[type=\"email\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKS6H55MjAAABYElEQVQ4y7XTz0uUQRzH8dc+PAmpPAhCYUIdZMmL4kloV0LoFuSly3MMxb8g6LKIByFSrx3Fv6IOHtWtLkIUXQpXaA+15g9CYo0UHw/uLi67K2uwnznMfL/zec8MM/Ol00qBLnfa8P7wDyKL9iRttD3L+kKznsn53MYOoxYcsC0nNK33SnNkRiinQCIWKNlyu6V9wCclgVgSgDMZkffSTe3DPrgp4wyCSnJH1r53xhvsD+TtytipJhJxZdTjrT8e19mnlL3RXYliyWWA0KoT07V41qkVYS1uAOClxDyYl3hVNxdLQvXqknZsziBmHMmIHNVbLu/Qbc1vWU+U/fXUiJIt/a2O1Cdv1xgYqfRp330x0Ay45aOi+w3Xetc32+5VgaCW3tRjwtcGoOihsnx1qSqw7tiEYtOXLpn004YbF0DBEFZM+qWVDj3yWsqQQspzL8y1/b2XrldAi6L/KNFO6xxTk4iUCPdxtAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0yMFQxNzo0MTo0NiswMjowMICV3pcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMjBUMTc6NDE6NDYrMDI6MDDxyGYrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\ninput[type=\"password\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKjK4y5yvAAAAzElEQVQ4y72SsQ2DMBREH2mpKTxIQIpgEM+Qnk2yBxUToEgkMyBRhBFSReinwCAbHAKKlLP0i/PdP3/bAXOEnDlxBO5cufBkFRkNYq2GbF3eO3JB6D9bQtO9Q6NQaDqTEvoNuZFHExMZS+43FAiCdjiNIBR+w9BNOZwyqRMCa1MWjIc9sBOjoTWdWFzryLbukWRD8+CnI/1oqEhIqNaM7qAxALFvfH9CaNVNCSUA5faE3UM/rLrJ8LLqDP976dtX5UyRUi/+qb1q0kH4Bmupdt1u7rNtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTIwVDE3OjQyOjUwKzAyOjAwxNhQMAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0yMFQxNzo0Mjo1MCswMjowMLWF6IwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\nbutton {\n  color: #a89e9e;\n  padding: 14px 20px;\n  margin: 8pt 8pt;\n  margin-left: 50pt;\n  border: none;\n  cursor: pointer;\n  width: 180pt;\n  height: 40pt;\n  border-radius: 10px;\n  float: left; }\n\n.boton3 {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\nimg {\n  border-radius: 20px; }\n\n.titulo {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: justify;\n  color: white;\n  margin-left: 120pt; }\n\n.titulo2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  color: white; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n"

/***/ }),

/***/ "./src/app/components/ingreso/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ingreso/login/login.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//Métodos de autenticación
var auth_service_1 = __webpack_require__(/*! ../../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, fb, authService, afs, router) {
        this.toastr = toastr;
        this.fb = fb;
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.resetPassword = false;
        this.errorMessage = '';
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Función que valida el ingreso del usuario en la página
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else if (this.loginForm.valid) {
            this.authService.loginEmail(this.email, this.password).then(function (res) {
                sessionStorage.useremail = _this.email;
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.forgotpassword = function () {
        var _this = this;
        this.authService.resetPassword(this.email)
            .then(function () { return _this.resetPassword = true; })
            .catch(function (_error) {
            console.log(_error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/ingreso/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/ingreso/login/login.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, forms_1.FormBuilder, auth_service_1.AuthService, auth_1.AngularFireAuth, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/components/ingreso/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/ingreso/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Inicio del container fluid-->\r\n<div class=\"container-fluid\" style=\"text-align: center\">\r\n\r\n    <div class=\"jumbotron\">\r\n    \r\n      <div style=\"text-align:center\">\r\n       \r\n        <img width=\"250\" alt=\"SteakLogo\" src=\"../assets/logofondo.png\">\r\n    \r\n      </div>\r\n      <br>\r\n      <div class=\"container\">\r\n      <div class=\"row\">\r\n      \r\n        <div>\r\n\r\n\r\n<!-- Formulario de Registo-->      \r\n<form [formGroup]=\"registerForm\" (submit)=\"tryRegister()\">\r\n            \r\n  <div class=\"form-group\">\r\n                      \r\n    <h1 class=\"titulo\"><strong>Regístrate en STEAK (Nuevo Usuario)</strong></h1>\r\n                      \r\n    <!--Ingreso del correo electrónico en el formulario-->\r\n                  \r\n      <input type=\"email\" formControlName=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Ingresa tu correo electrónico\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" >\r\n                 \r\n                  <!--Validación de Errores-->\r\n                  <div class=\"titulo\" *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"titulo\" *ngIf=\"f.email.errors.required\">Es necesario que ingreses tu email</div>\r\n                  <div class=\"titulo\" *ngIf=\"f.email.errors.email\">El email ingresado es inválido</div>\r\n                  </div>\r\n  </div>\r\n\r\n <!--Ingreso de la contraseña en el formulario-->\r\n<div class=\"form-group\">\r\n                      \r\n<input type=\"password\" formControlName=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" name=\"password\" placeholder=\"Ingresa tu contraseña\">\r\n                \r\n                 <!--Validación de Errores-->\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <div class=\"titulo\"*ngIf=\"f.password.errors.required\">Es necesario que ingreses tu contraseña</div>\r\n                <div class=\"titulo\" *ngIf=\"f.password.errors.minlength\">Tu contraseña debe tener mínimo 6 caracteres</div>\r\n                </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <button type=\"submit\" class=\"boton3\"><strong>Registro</strong></button>\r\n</div>\r\n\r\n\r\n</form>\r\n\r\n        </div>\r\n    \r\n      </div>\r\n          \r\n              <div>\r\n                \r\n              <br>\r\n                  <p class=\"titulo2\"><strong>¿Ya tienes cuenta en STEAK?  <a href=\"/login\">Ingresa con tus datos</a></strong></p>\r\n              </div>\r\n            </div> \r\n    </div> \r\n    \r\n    </div> <!--Final del div container fluid-->\r\n\r\n\r\n\r\n                "

/***/ }),

/***/ "./src/app/components/ingreso/register/register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/ingreso/register/register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('background.jpg');\n  background-position: center;\n  position: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #525252c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput[type=\"email\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKS6H55MjAAABYElEQVQ4y7XTz0uUQRzH8dc+PAmpPAhCYUIdZMmL4kloV0LoFuSly3MMxb8g6LKIByFSrx3Fv6IOHtWtLkIUXQpXaA+15g9CYo0UHw/uLi67K2uwnznMfL/zec8MM/Ol00qBLnfa8P7wDyKL9iRttD3L+kKznsn53MYOoxYcsC0nNK33SnNkRiinQCIWKNlyu6V9wCclgVgSgDMZkffSTe3DPrgp4wyCSnJH1r53xhvsD+TtytipJhJxZdTjrT8e19mnlL3RXYliyWWA0KoT07V41qkVYS1uAOClxDyYl3hVNxdLQvXqknZsziBmHMmIHNVbLu/Qbc1vWU+U/fXUiJIt/a2O1Cdv1xgYqfRp330x0Ay45aOi+w3Xetc32+5VgaCW3tRjwtcGoOihsnx1qSqw7tiEYtOXLpn004YbF0DBEFZM+qWVDj3yWsqQQspzL8y1/b2XrldAi6L/KNFO6xxTk4iUCPdxtAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0yMFQxNzo0MTo0NiswMjowMICV3pcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMjBUMTc6NDE6NDYrMDI6MDDxyGYrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\ninput[type=\"password\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKjK4y5yvAAAAzElEQVQ4y72SsQ2DMBREH2mpKTxIQIpgEM+Qnk2yBxUToEgkMyBRhBFSReinwCAbHAKKlLP0i/PdP3/bAXOEnDlxBO5cufBkFRkNYq2GbF3eO3JB6D9bQtO9Q6NQaDqTEvoNuZFHExMZS+43FAiCdjiNIBR+w9BNOZwyqRMCa1MWjIc9sBOjoTWdWFzryLbukWRD8+CnI/1oqEhIqNaM7qAxALFvfH9CaNVNCSUA5faE3UM/rLrJ8LLqDP976dtX5UyRUi/+qb1q0kH4Bmupdt1u7rNtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTIwVDE3OjQyOjUwKzAyOjAwxNhQMAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0yMFQxNzo0Mjo1MCswMjowMLWF6IwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\nbutton {\n  color: #a89e9e;\n  padding: 14px 20px;\n  margin: 8pt 8pt;\n  margin-left: 50pt;\n  border: none;\n  cursor: pointer;\n  width: 180pt;\n  height: 40pt;\n  border-radius: 10px;\n  float: left; }\n\n.boton3 {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\nimg {\n  border-radius: 20px; }\n\n.titulo {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: justify;\n  color: white;\n  margin-left: 120pt; }\n\n.titulo2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  color: white; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n"

/***/ }),

/***/ "./src/app/components/ingreso/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/ingreso/register/register.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//Métodos de autenticación
var auth_service_1 = __webpack_require__(/*! ../../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toastr, fb, authService, afs, router) {
        this.toastr = toastr;
        this.fb = fb;
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.isadmin = false;
        this.submitted = false;
        this.resetPassword = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    //Al tocar el botón, se hace la función de registro
    RegisterComponent.prototype.tryRegister = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else if (this.registerForm.valid) {
            this.authService.registerUser(this.email, this.password).then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
            this.authService.createdocument(this.email, this.isadmin);
        } //Crea el documento para el registro de users
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/ingreso/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/ingreso/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, forms_1.FormBuilder, auth_service_1.AuthService, auth_1.AngularFireAuth, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/components/menu/aperitivos/aperitivos.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/menu/aperitivos/aperitivos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <img alt=\"Banner Aperitivos\" src=\"../assets/banneraperitivos.png\">\r\n</div>\r\n\r\n<div style=\"text-align:center\">\r\n   \r\n        <div style=\"text-align:center\">\r\n                <br>\r\n               \r\n              </div>\r\n              \r\n\r\n              <div *ngIf=\"items.length > 0; else noItems\">\r\n\r\n                    <div *ngFor=\"let item of items\" style=\"text-align: center\">\r\n                            <div *ngIf=\"item.disp || admin\">\r\n                                    <br>\r\n                                    <app-menu-details [item]=\"item\"></app-menu-details>\r\n                                    <br>\r\n                       \r\n                                    <h4 *ngIf=\"item.selected1 || item.selected2 || item.selected3\">Extras disponibles:</h4>\r\n                                    <input [(ngModel)]=\"item.selected1\" name=\"extra1\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra1 != ''\"><label for=\"extra1\">{{item.extra1}}</label>\r\n                                    <input [(ngModel)]=\"item.selected2\" name=\"extra2\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra2 != ''\"><label for=\"extra2\">{{item.extra2}}</label>\r\n                                    <input [(ngModel)]=\"item.selected3\" name=\"extra3\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra3 != ''\"><label for=\"extra3\">{{item.extra3}}</label>\r\n        \r\n                                    <br>\r\n\r\n\r\n\r\n                                    <button *ngIf=\"admin == 'false'\" (click)=\"selectedItem($event, item)\"><strong>ORDENAR</strong></button>\r\n                                \r\n                                    <button *ngIf=\"!editState && admin == 'true'\" (click)=\"editItem($event, item)\"><strong>MODIFICAR</strong></button>\r\n                                            \r\n                                        <button *ngIf=\"!editState && admin == 'true'\" (click)=\"deleteItem($event, item)\"><strong>ELIMINAR</strong></button>\r\n                            \r\n\r\n\r\n\r\n\r\n\r\n                                            <div class=\"jumbotron\"  *ngIf=\"editState && itemToEdit.id == item.id\">\r\n                                                <form (ngSubmit)=\"updateItem(item)\">\r\n                             \r\n                                                         <label class=\"titulos\"><strong>--- MODIFICAR PLATO ---</strong></label>  \r\n                                                         <br>  \r\n                                                         <input type=\"checkbox\" name=\"Disponible\" [(ngModel)]=\"item.disp\"> \r\n                                                         <br><label class=\"titulos2\">Disponible</label>    \r\n                                                               \r\n                                                        <div>          <label class=\"titulos2\" for=\"nombre\">  Nombre</label><br>\r\n                                                            <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.nombre\" name=\"nombre\">\r\n                                                  \r\n                                                            <br>\r\n                                                        </div>\r\n                                                                   \r\n                                                        <div>   <label for=\"descripcion\" class=\"titulos2\">  Descripción</label><br>\r\n                                                            <input type=\"text\" placeholder=\"Introduzca descripción del producto\" [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\r\n                                                         \r\n                                                            <br>\r\n                                                        </div>\r\n                                                                   \r\n                                                        <div> <label for=\"precio\" class=\"titulos2\"> Precio</label><br>\r\n                                                            <input type=\"number\" placeholder=\"Introduzca precio del producto\" [(ngModel)]=\"item.precio\" name=\"precio\">\r\n                                                           \r\n                                                            <br>\r\n                                                        </div>\r\n                                                                   \r\n                                                        <div><label for=\"imagen\" class=\"titulos2\"> Imagen</label><br>\r\n                                                            <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.imagen\" name=\"imagen\">\r\n                                                            <br>\r\n                                                        </div>\r\n                            \r\n                                                        <div>          <label for=\"extra1\" class=\"titulos2\">  Extra 1</label><br>\r\n                                                            <input type=\"text\" placeholder=\"Extra 1\" [(ngModel)]=\"item.extra1\" name=\"extra1\">\r\n                                                  \r\n                                                            <br>\r\n                                                        </div>\r\n\r\n                                                        <div>          <label for=\"extra2\" class=\"titulos2\">  Extra 2</label\r\n                                                            ><br>\r\n                                                            <input type=\"text\" placeholder=\"Extra 2\" [(ngModel)]=\"item.extra2\" name=\"extra2\">\r\n                                                  \r\n                                                            <br>\r\n                                                        </div>\r\n\r\n                                                        <div>          <label for=\"extra3\" class=\"titulos2\">  Extra 3</label><br>\r\n                                                            <input type=\"text\" placeholder=\"Extra 3\" [(ngModel)]=\"item.extra3\" name=\"extra3\">\r\n                                                  \r\n                                                            <br>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <br>\r\n                                                        <div>\r\n                                                            <button type=\"submit\" class=\"btn\" ><strong class=\"titulos2\">Actualizar Datos</strong></button>\r\n                                                        </div>  \r\n                                                                   \r\n                                                    \r\n                                                </form>\r\n                                            </div>\r\n                                        <hr>\r\n                                    </div>\r\n                    </div>\r\n\r\n              </div>\r\n            \r\n           \r\n              \r\n              <ng-template #noItems>\r\n                  <hr>\r\n                  <h5>No hay objetos para visualizar</h5>\r\n              </ng-template>\r\n\r\n             \r\n              \r\n            <div style=\"text-align: center\" *ngIf=\"!editState && admin=='true'\">\r\n            \r\n                <app-agregar-item></app-agregar-item> \r\n            </div>"

/***/ }),

/***/ "./src/app/components/menu/aperitivos/aperitivos.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/menu/aperitivos/aperitivos.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  border-collapse: collapse;\n  width: 100%; }\n\ninput.check {\n  margin: 1%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\n.content-box-red {\n  background-color: #f9dbdb;\n  border: 1px solid #e9b3b3; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #4d1b1b;\n  border-radius: 5%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  width: 80%;\n  height: 30px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px; }\n\nlabel {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: center;\n  color: black; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\nimg {\n  width: 100%;\n  height: 20%; }\n"

/***/ }),

/***/ "./src/app/components/menu/aperitivos/aperitivos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/menu/aperitivos/aperitivos.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var item_service_1 = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
var global_1 = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var AperitivosComponent = /** @class */ (function () {
    function AperitivosComponent(check, toastr, nav, aperitivosService) {
        this.check = check;
        this.toastr = toastr;
        this.nav = nav;
        this.aperitivosService = aperitivosService;
        this.items = [];
        this.editState = false;
        this.route = 'aperitivos';
        this.admin = sessionStorage.getItem('isadmin');
        this.carrito = [];
    }
    AperitivosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.aperitivosService.setRoute(this.route);
        this.aperitivosService.getData();
        this.aperitivosService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    AperitivosComponent.prototype.selectedItem = function (event, item) {
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
        else {
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
        this.toastr.success('Su producto se ha añadido al carrito', 'Operación Exitosa');
    };
    //Método que elimina el item del array
    AperitivosComponent.prototype.deleteItem = function (event, item) {
        if (confirm("¿Estás seguro que deseas eliminar este producto?")) {
            this.aperitivosService.deleteItem(item);
            this.toastr.success('Su producto se ha eliminado', 'Operación Exitosa');
        }
    };
    //Métodos que editan el item del array
    AperitivosComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    AperitivosComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    AperitivosComponent.prototype.updateItem = function (item) {
        this.aperitivosService.updateItem(item);
        this.toastr.success('Su producto se ha modificado', 'Operación Exitosa');
        this.clearState();
    };
    AperitivosComponent = __decorate([
        core_1.Component({
            selector: 'app-aperitivos',
            template: __webpack_require__(/*! ./aperitivos.component.html */ "./src/app/components/menu/aperitivos/aperitivos.component.html"),
            styles: [__webpack_require__(/*! ./aperitivos.component.scss */ "./src/app/components/menu/aperitivos/aperitivos.component.scss")]
        }),
        __metadata("design:paramtypes", [global_1.Globals, ngx_toastr_1.ToastrService, header_service_service_1.HeaderServiceService, item_service_1.ItemService])
    ], AperitivosComponent);
    return AperitivosComponent;
}());
exports.AperitivosComponent = AperitivosComponent;


/***/ }),

/***/ "./src/app/components/menu/bebidas/bebidas.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/menu/bebidas/bebidas.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <img alt=\"Banner Aperitivos\" src=\"../assets/bannerbebidas.png\">\r\n</div>\r\n\r\n      <div *ngIf=\"items.length > 0; else noItems\">\r\n\r\n            <div *ngFor=\"let item of items\" style=\"text-align: center\">\r\n                    <div *ngIf=\"item.disp || admin\">\r\n                            <br>\r\n                            <app-menu-details [item]=\"item\"></app-menu-details>\r\n                            <br>\r\n\r\n                            <h4 *ngIf=\"item.selected1 || item.selected2 || item.selected3\">Extras disponibles:</h4>\r\n                            <input [(ngModel)]=\"item.selected1\" name=\"extra1\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra1 != ''\"><label for=\"extra1\">{{item.extra1}}</label>\r\n                            <input [(ngModel)]=\"item.selected2\" name=\"extra2\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra2 != ''\"><label for=\"extra2\">{{item.extra2}}</label>\r\n                            <input [(ngModel)]=\"item.selected3\" name=\"extra3\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra3 != ''\"><label for=\"extra3\">{{item.extra3}}</label>\r\n\r\n                            <br>\r\n\r\n                            <button *ngIf=\"admin == 'false'\" (click)=\"selectedItem($event, item)\"><strong>ORDENAR</strong></button>\r\n                            <button *ngIf=\"!editState && admin == 'true'\" (click)=\"editItem($event, item)\"><strong>MODIFICAR</strong></button>\r\n                                    \r\n                                <button *ngIf=\"!editState && admin == 'true'\" (click)=\"deleteItem($event, item)\"><strong>ELIMINAR</strong></button>\r\n                    \r\n                               \r\n\r\n                                <div class=\"jumbotron\"  *ngIf=\"editState && itemToEdit.id == item.id\">\r\n                                        <form (ngSubmit)=\"updateItem(item)\">\r\n                     \r\n                                                 <label class=\"titulos\"><strong>--- MODIFICAR PLATO ---</strong></label>  \r\n                                                 <br>  \r\n                                                 <input type=\"checkbox\" name=\"Disponible\" [(ngModel)]=\"item.disp\"> \r\n                                                 <br><label class=\"titulos2\">Disponible</label>    \r\n                                                       \r\n                                                <div>          <label class=\"titulos2\" for=\"nombre\">  Nombre</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.nombre\" name=\"nombre\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div>   <label for=\"descripcion\" class=\"titulos2\">  Descripción</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca descripción del producto\" [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\r\n                                                 \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div> <label for=\"precio\" class=\"titulos2\"> Precio</label><br>\r\n                                                    <input type=\"number\" placeholder=\"Introduzca precio del producto\" [(ngModel)]=\"item.precio\" name=\"precio\">\r\n                                                   \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div><label for=\"imagen\" class=\"titulos2\"> Imagen</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.imagen\" name=\"imagen\">\r\n                                                    <br>\r\n                                                </div>\r\n                    \r\n                                                <div>          <label for=\"extra1\" class=\"titulos2\">  Extra 1</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 1\" [(ngModel)]=\"item.extra1\" name=\"extra1\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n\r\n                                                <div>          <label for=\"extra2\" class=\"titulos2\">  Extra 2</label\r\n                                                    ><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 2\" [(ngModel)]=\"item.extra2\" name=\"extra2\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n\r\n                                                <div>          <label for=\"extra3\" class=\"titulos2\">  Extra 3</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 3\" [(ngModel)]=\"item.extra3\" name=\"extra3\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n                                                <br>\r\n                                                <br>\r\n                                                <div>\r\n                                                    <button type=\"submit\" class=\"btn\" ><strong class=\"titulos2\">Actualizar Datos</strong></button>\r\n                                                </div>  \r\n                                                           \r\n                                            \r\n                                        </form>\r\n                                    </div>\r\n                                <hr>\r\n                            </div>\r\n            </div>\r\n\r\n      </div>\r\n      \r\n      <ng-template #noItems>\r\n          <hr>\r\n          <h5>No hay objetos para visualizar</h5>\r\n      </ng-template>\r\n\r\n      <div *ngIf=\"admin == 'true'\" style=\"text-align: center\">\r\n        <br>\r\n        <app-agregar-item></app-agregar-item>\r\n      </div>"

/***/ }),

/***/ "./src/app/components/menu/bebidas/bebidas.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/menu/bebidas/bebidas.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  border-collapse: collapse;\n  width: 100%; }\n\ninput.check {\n  margin: 1%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\n.content-box-red {\n  background-color: #f9dbdb;\n  border: 1px solid #e9b3b3; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #4d1b1b;\n  border-radius: 5%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  width: 80%;\n  height: 30px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px; }\n\nlabel {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: center;\n  color: black; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\nimg {\n  width: 100%;\n  height: 20%; }\n"

/***/ }),

/***/ "./src/app/components/menu/bebidas/bebidas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/bebidas/bebidas.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var item_service_1 = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
var global_1 = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var BebidasComponent = /** @class */ (function () {
    function BebidasComponent(check, nav, bebidasService) {
        this.check = check;
        this.nav = nav;
        this.bebidasService = bebidasService;
        this.items = [];
        this.editState = false;
        this.route = 'bebidas';
        this.admin = sessionStorage.getItem('isadmin');
        this.carrito = [];
    }
    BebidasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.bebidasService.setRoute(this.route);
        this.bebidasService.getData();
        this.bebidasService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    BebidasComponent.prototype.selectedItem = function (event, item) {
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
        else {
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
    };
    BebidasComponent.prototype.deleteItem = function (event, item) {
        this.bebidasService.deleteItem(item);
    };
    //Métodos que editan el item del array
    BebidasComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    BebidasComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    BebidasComponent.prototype.updateItem = function (item) {
        this.bebidasService.updateItem(item);
        this.clearState();
    };
    BebidasComponent = __decorate([
        core_1.Component({
            selector: 'app-bebidas',
            template: __webpack_require__(/*! ./bebidas.component.html */ "./src/app/components/menu/bebidas/bebidas.component.html"),
            styles: [__webpack_require__(/*! ./bebidas.component.scss */ "./src/app/components/menu/bebidas/bebidas.component.scss")]
        }),
        __metadata("design:paramtypes", [global_1.Globals, header_service_service_1.HeaderServiceService, item_service_1.ItemService])
    ], BebidasComponent);
    return BebidasComponent;
}());
exports.BebidasComponent = BebidasComponent;


/***/ }),

/***/ "./src/app/components/menu/carnes/carnes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/carnes/carnes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <img alt=\"Banner Aperitivos\" src=\"../assets/bannercarnes.png\">\r\n</div>\r\n\r\n<div *ngIf=\"items.length > 0; else noItems\">\r\n\r\n    <div *ngFor=\"let item of items\" style=\"text-align: center\">\r\n        <div *ngIf=\"item.disp || admin\">\r\n        <br>\r\n        <app-menu-details [item]=\"item\"></app-menu-details>\r\n        <br>\r\n\r\n        <h4 *ngIf=\"item.selected1 || item.selected2 || item.selected3\">Extras disponibles:</h4>\r\n        <input [(ngModel)]=\"item.selected1\" name=\"extra1\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra1 != ''\"><label for=\"extra1\">{{item.extra1}}</label>\r\n        <input [(ngModel)]=\"item.selected2\" name=\"extra2\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra2 != ''\"><label for=\"extra1\">{{item.extra2}}</label>\r\n        <input [(ngModel)]=\"item.selected3\" name=\"extra3\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra3 != ''\"><label for=\"extra1\">{{item.extra3}}</label>\r\n\r\n        <br>\r\n\r\n        <button *ngIf=\"admin == 'false'\" (click)=\"selectedItem($event, item)\"><strong>ORDENAR</strong></button>\r\n        <button *ngIf=\"!editState && admin == 'true'\" (click)=\"editItem($event, item)\"><strong>MODIFICAR</strong></button>\r\n                \r\n            <button *ngIf=\"!editState && admin == 'true'\" (click)=\"deleteItem($event, item)\"><strong>ELIMINAR</strong></button>\r\n\r\n           \r\n\r\n            <div class=\"jumbotron\"  *ngIf=\"editState && itemToEdit.id == item.id\">\r\n                    <form (ngSubmit)=\"updateItem(item)\">\r\n \r\n                             <label class=\"titulos\"><strong>--- MODIFICAR PLATO ---</strong></label>  \r\n                             <br>  \r\n                             <input type=\"checkbox\" name=\"Disponible\" [(ngModel)]=\"item.disp\"> \r\n                             <br><label class=\"titulos2\">Disponible</label>    \r\n                                   \r\n                            <div>          <label class=\"titulos2\" for=\"nombre\">  Nombre</label><br>\r\n                                <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.nombre\" name=\"nombre\">\r\n                      \r\n                                <br>\r\n                            </div>\r\n                                       \r\n                            <div>   <label for=\"descripcion\" class=\"titulos2\">  Descripción</label><br>\r\n                                <input type=\"text\" placeholder=\"Introduzca descripción del producto\" [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\r\n                             \r\n                                <br>\r\n                            </div>\r\n                                       \r\n                            <div> <label for=\"precio\" class=\"titulos2\"> Precio</label><br>\r\n                                <input type=\"number\" placeholder=\"Introduzca precio del producto\" [(ngModel)]=\"item.precio\" name=\"precio\">\r\n                               \r\n                                <br>\r\n                            </div>\r\n                                       \r\n                            <div><label for=\"imagen\" class=\"titulos2\"> Imagen</label><br>\r\n                                <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.imagen\" name=\"imagen\">\r\n                                <br>\r\n                            </div>\r\n\r\n                            <div>          <label for=\"extra1\" class=\"titulos2\">  Extra 1</label><br>\r\n                                <input type=\"text\" placeholder=\"Extra 1\" [(ngModel)]=\"item.extra1\" name=\"extra1\">\r\n                      \r\n                                <br>\r\n                            </div>\r\n\r\n                            <div>          <label for=\"extra2\" class=\"titulos2\">  Extra 2</label\r\n                                ><br>\r\n                                <input type=\"text\" placeholder=\"Extra 2\" [(ngModel)]=\"item.extra2\" name=\"extra2\">\r\n                      \r\n                                <br>\r\n                            </div>\r\n\r\n                            <div>          <label for=\"extra3\" class=\"titulos2\">  Extra 3</label><br>\r\n                                <input type=\"text\" placeholder=\"Extra 3\" [(ngModel)]=\"item.extra3\" name=\"extra3\">\r\n                      \r\n                                <br>\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <div>\r\n                                <button type=\"submit\" class=\"btn\" ><strong class=\"titulos2\">Actualizar Datos</strong></button>\r\n                            </div>  \r\n                                       \r\n                        \r\n                    </form>\r\n                </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<ng-template #noItems>\r\n    <hr>\r\n    <h5>No hay objetos para visualizar</h5>\r\n</ng-template>\r\n\r\n<div *ngIf=\"admin == 'true'\" style=\"text-align: center\">\r\n    <br>\r\n    <app-agregar-item></app-agregar-item>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/menu/carnes/carnes.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/carnes/carnes.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  border-collapse: collapse;\n  width: 100%; }\n\ninput.check {\n  margin: 1%; }\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\n.content-box-red {\n  background-color: #f9dbdb;\n  border: 1px solid #e9b3b3; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #4d1b1b;\n  border-radius: 5%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  width: 80%;\n  height: 30px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px; }\n\nlabel {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: center;\n  color: black; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\nimg {\n  width: 100%;\n  height: 20%; }\n"

/***/ }),

/***/ "./src/app/components/menu/carnes/carnes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/menu/carnes/carnes.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var item_service_1 = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../../services/autenticacion/auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var global_1 = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var CarnesComponent = /** @class */ (function () {
    function CarnesComponent(check, nav, carneService, authService, router) {
        this.check = check;
        this.nav = nav;
        this.carneService = carneService;
        this.authService = authService;
        this.router = router;
        this.items = [];
        this.editState = false;
        this.route = 'carnes';
        this.admin = sessionStorage.getItem('isadmin');
        this.carrito = [];
    }
    CarnesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.carneService.setRoute(this.route);
        this.carneService.getData();
        this.carneService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    CarnesComponent.prototype.selectedItem = function (event, item) {
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
        else {
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
    };
    CarnesComponent.prototype.deleteItem = function (event, item) {
        this.carneService.deleteItem(item);
    };
    //Métodos que editan el item del array
    CarnesComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    CarnesComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    CarnesComponent.prototype.updateItem = function (item) {
        this.carneService.updateItem(item);
        this.clearState();
    };
    CarnesComponent = __decorate([
        core_1.Component({
            selector: 'app-carnes',
            template: __webpack_require__(/*! ./carnes.component.html */ "./src/app/components/menu/carnes/carnes.component.html"),
            styles: [__webpack_require__(/*! ./carnes.component.scss */ "./src/app/components/menu/carnes/carnes.component.scss")]
        }),
        __metadata("design:paramtypes", [global_1.Globals, header_service_service_1.HeaderServiceService, item_service_1.ItemService, auth_service_1.AuthService, router_1.Router])
    ], CarnesComponent);
    return CarnesComponent;
}());
exports.CarnesComponent = CarnesComponent;


/***/ }),

/***/ "./src/app/components/menu/menu-details/menu-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/menu/menu-details/menu-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n\n    <img src=\"{{item.imagen}}\"> \n\n    <div class=\"block\">\n      <h2 class=\"title\"><strong>{{item.nombre}}</strong></h2>\n      <p class=\"description\">{{item.descripcion}}</p>\n      <p class=\"description\">Precio: {{item.precio | currency : '$ ' : 'code' : '1.2-2'}}</p>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/menu/menu-details/menu-details.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/menu/menu-details/menu-details.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 60vmax;\n  height: 24vmax;\n  padding: 3%;\n  background-color: black; }\n\n.container img {\n  width: 18vmax;\n  height: 18vmax;\n  margin: auto;\n  float: left; }\n\n.container h2 {\n  font-family: 'PT Serif', serif;\n  font-size: 5vmin;\n  color: white;\n  text-align: justify; }\n\n.container p {\n  font-family: 'PT Serif', serif;\n  font-size: 3vmin;\n  color: white;\n  text-align: justify; }\n\n.container div {\n  float: right;\n  width: 35vmax;\n  height: 20vmax;\n  margin: auto;\n  padding: 2%; }\n"

/***/ }),

/***/ "./src/app/components/menu/menu-details/menu-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/menu/menu-details/menu-details.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var MenuDetailsComponent = /** @class */ (function () {
    function MenuDetailsComponent() {
    }
    MenuDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuDetailsComponent.prototype, "item", void 0);
    MenuDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-details',
            template: __webpack_require__(/*! ./menu-details.component.html */ "./src/app/components/menu/menu-details/menu-details.component.html"),
            styles: [__webpack_require__(/*! ./menu-details.component.scss */ "./src/app/components/menu/menu-details/menu-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuDetailsComponent);
    return MenuDetailsComponent;
}());
exports.MenuDetailsComponent = MenuDetailsComponent;


/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    \r\n    <a href=\"./menu/aperitivos\" > <img width=\"25%\" height=\"50%\" alt=\"Aperitivos\" src=\"../assets/aperitivos.jpg\" > </a>\r\n    <a href=\"./menu/carnes\"> <img width=\"25%\"alt=\"Carnes\" src=\"../assets/carnes.jpg\"> </a>\r\n    <a href=\"./menu/bebidas\"> <img width=\"25%\" alt=\"Bebidas\" src=\"../assets/bebidas.jpg\"> </a>\r\n    <a href=\"./menu/postres\"> <img width=\"25%\" alt=\"Postres\" src=\"../assets/postres.jpg\"> </a>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var global_1 = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(nav, globals) {
        this.nav = nav;
        this.globals = globals;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, global_1.Globals])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "./src/app/components/menu/postres/postres.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/menu/postres/postres.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <img alt=\"Banner Aperitivos\" src=\"../assets/bannerpostres.png\">\r\n</div>\r\n\r\n      \r\n      <div *ngIf=\"items.length > 0; else noItems\">\r\n      \r\n            <div *ngFor=\"let item of items\" style=\"text-align: center\">\r\n                    <div *ngIf=\"item.disp || admin\">\r\n                            <br>\r\n                            <app-menu-details [item]=\"item\"></app-menu-details>\r\n                            <br>\r\n\r\n                            <h4 *ngIf=\"item.selected1 || item.selected2 || item.selected3\">Extras disponibles:</h4>\r\n                            <input [(ngModel)]=\"item.selected1\" name=\"extra1\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra1 != ''\"><label for=\"extra1\">{{item.extra1}}</label>\r\n                            <input [(ngModel)]=\"item.selected2\" name=\"extra2\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra2 != ''\"><label for=\"extra1\">{{item.extra2}}</label>\r\n                            <input [(ngModel)]=\"item.selected3\" name=\"extra3\" class=\"check\" type=\"checkbox\" *ngIf=\"item.extra3 != ''\"><label for=\"extra1\">{{item.extra3}}</label>\r\n\r\n                            <br>\r\n\r\n                            <button *ngIf=\"admin == 'false'\" (click)=\"selectedItem($event, item)\"><strong>ORDENAR</strong></button>\r\n                            <button *ngIf=\"!editState && admin == 'true'\" (click)=\"editItem($event, item)\"><strong>MODIFICAR</strong></button>\r\n                                    \r\n                                <button *ngIf=\"!editState && admin == 'true'\" (click)=\"deleteItem($event, item)\"><strong>ELIMINAR</strong></button>\r\n                    \r\n\r\n                                <div class=\"jumbotron\"  *ngIf=\"editState && itemToEdit.id == item.id\">\r\n                                        <form (ngSubmit)=\"updateItem(item)\">\r\n                     \r\n                                                 <label class=\"titulos\"><strong>--- MODIFICAR PLATO ---</strong></label>  \r\n                                                 <br>  \r\n                                                 <input type=\"checkbox\" name=\"Disponible\" [(ngModel)]=\"item.disp\"> \r\n                                                 <br><label class=\"titulos2\">Disponible</label>    \r\n                                                       \r\n                                                <div>          <label class=\"titulos2\" for=\"nombre\">  Nombre</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.nombre\" name=\"nombre\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div>   <label for=\"descripcion\" class=\"titulos2\">  Descripción</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca descripción del producto\" [(ngModel)]=\"item.descripcion\" name=\"descripcion\">\r\n                                                 \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div> <label for=\"precio\" class=\"titulos2\"> Precio</label><br>\r\n                                                    <input type=\"number\" placeholder=\"Introduzca precio del producto\" [(ngModel)]=\"item.precio\" name=\"precio\">\r\n                                                   \r\n                                                    <br>\r\n                                                </div>\r\n                                                           \r\n                                                <div><label for=\"imagen\" class=\"titulos2\"> Imagen</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Introduzca nombre del producto\" [(ngModel)]=\"item.imagen\" name=\"imagen\">\r\n                                                    <br>\r\n                                                </div>\r\n                    \r\n                                                <div>          <label for=\"extra1\" class=\"titulos2\">  Extra 1</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 1\" [(ngModel)]=\"item.extra1\" name=\"extra1\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n\r\n                                                <div>          <label for=\"extra2\" class=\"titulos2\">  Extra 2</label\r\n                                                    ><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 2\" [(ngModel)]=\"item.extra2\" name=\"extra2\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n\r\n                                                <div>          <label for=\"extra3\" class=\"titulos2\">  Extra 3</label><br>\r\n                                                    <input type=\"text\" placeholder=\"Extra 3\" [(ngModel)]=\"item.extra3\" name=\"extra3\">\r\n                                          \r\n                                                    <br>\r\n                                                </div>\r\n                                                <br>\r\n                                                <br>\r\n                                                <div>\r\n                                                    <button type=\"submit\" class=\"btn\" ><strong class=\"titulos2\">Actualizar Datos</strong></button>\r\n                                                </div>  \r\n                                                           \r\n                                            \r\n                                        </form>\r\n                                    </div>\r\n                                <hr>\r\n                            </div>\r\n            </div>\r\n\r\n      </div>\r\n      \r\n      <ng-template #noItems>\r\n          <hr>\r\n          <h5>No hay objetos para visualizar</h5>\r\n      </ng-template>\r\n      \r\n      <div *ngIf=\"admin == 'true'\" style=\"text-align: center\">\r\n      <br>\r\n      <app-agregar-item></app-agregar-item>\r\n      \r\n      </div>"

/***/ }),

/***/ "./src/app/components/menu/postres/postres.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/menu/postres/postres.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  border-collapse: collapse;\n  width: 100%; }\n\n.titulos {\n  font-family: 'PT Serif', serif;\n  font-size: 30pt;\n  text-align: center;\n  color: white; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: center;\n  color: white; }\n\n.content-box-red {\n  background-color: #f9dbdb;\n  border: 1px solid #e9b3b3; }\n\nbutton {\n  background-color: #b98282;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  cursor: pointer;\n  width: 200pt;\n  height: 50pt;\n  border-radius: 10px; }\n\n.titulos2 {\n  font-family: 'PT Serif', serif;\n  font-size: 16pt;\n  text-align: center;\n  color: white; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #4d1b1b;\n  border-radius: 5%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput {\n  width: 80%;\n  height: 40px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px; }\n\ninput[type=checkbox] {\n  width: 30%;\n  height: 30px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: 5px; }\n\nlabel {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: center;\n  color: black; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\nimg {\n  width: 100%;\n  height: 20%; }\n"

/***/ }),

/***/ "./src/app/components/menu/postres/postres.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/postres/postres.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var item_service_1 = __webpack_require__(/*! ../../../services/item.service */ "./src/app/services/item.service.ts");
var global_1 = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var PostresComponent = /** @class */ (function () {
    function PostresComponent(nav, postresService, check) {
        this.nav = nav;
        this.postresService = postresService;
        this.check = check;
        this.items = [];
        this.editState = false;
        this.route = 'postres';
        this.admin = sessionStorage.getItem('isadmin');
        this.carrito = [];
    }
    PostresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.postresService.setRoute(this.route);
        this.postresService.getData();
        this.postresService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    };
    PostresComponent.prototype.selectedItem = function (event, item) {
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
        else {
            this.carrito.push(item);
            sessionStorage.carritoItems = JSON.stringify(this.carrito);
        }
    };
    PostresComponent.prototype.deleteItem = function (event, item) {
        this.postresService.deleteItem(item);
    };
    //Métodos que editan el item del array
    PostresComponent.prototype.editItem = function (event, item) {
        this.editState = true;
        this.itemToEdit = item;
    };
    PostresComponent.prototype.clearState = function () {
        this.editState = false;
        this.itemToEdit = null;
    };
    PostresComponent.prototype.updateItem = function (item) {
        this.postresService.updateItem(item);
        this.clearState();
    };
    PostresComponent = __decorate([
        core_1.Component({
            selector: 'app-postres',
            template: __webpack_require__(/*! ./postres.component.html */ "./src/app/components/menu/postres/postres.component.html"),
            styles: [__webpack_require__(/*! ./postres.component.scss */ "./src/app/components/menu/postres/postres.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, item_service_1.ItemService, global_1.Globals])
    ], PostresComponent);
    return PostresComponent;
}());
exports.PostresComponent = PostresComponent;


/***/ }),

/***/ "./src/app/components/ordenes/ordenes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/ordenes/ordenes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let order of ordenes\">\n  <div *ngIf = \"order.email === email\">\n\n    <div *ngFor = \"let items of order.orden\">\n      {{items.nombre}}\n    </div>\n    \n    {{order.monto | currency : '$ ' : 'code' : '1.2-2'}}\n    <br>\n\n    <button (click)=\"Reordenar($event, order.orden)\"><strong>REORDENAR</strong></button>\n    <hr>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ordenes/ordenes.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/ordenes/ordenes.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ordenes/ordenes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ordenes/ordenes.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var orden_service_1 = __webpack_require__(/*! ../../services/orden.service */ "./src/app/services/orden.service.ts");
var OrdenesComponent = /** @class */ (function () {
    function OrdenesComponent(nav, ServicioOrden) {
        this.nav = nav;
        this.ServicioOrden = ServicioOrden;
        this.ordenes = [];
        this.carrito = [];
        this.email = sessionStorage.useremail;
    }
    OrdenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.show();
        this.ServicioOrden.getData();
        this.ServicioOrden.getItems().subscribe(function (orders) {
            _this.ordenes = orders;
        });
    };
    OrdenesComponent.prototype.Reordenar = function (event, copycart) {
        this.carrito = copycart;
        sessionStorage.carritoItems = JSON.stringify(this.carrito);
    };
    OrdenesComponent = __decorate([
        core_1.Component({
            selector: 'app-ordenes',
            template: __webpack_require__(/*! ./ordenes.component.html */ "./src/app/components/ordenes/ordenes.component.html"),
            styles: [__webpack_require__(/*! ./ordenes.component.scss */ "./src/app/components/ordenes/ordenes.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, orden_service_1.OrdenService])
    ], OrdenesComponent);
    return OrdenesComponent;
}());
exports.OrdenesComponent = OrdenesComponent;


/***/ }),

/***/ "./src/app/components/ventanapago/ventanapago.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ventanapago/ventanapago.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 5%\">\r\n\r\n    <div *ngIf = \"pago === 'select'\">\r\n        <h1>Seleccione su método de pago:</h1>\r\n        <div style=\"text-align: center\">\r\n            <img class=\"im\" src=\"../../../assets/paypal.jpg\">\r\n            <div id=\"paypal-checkout-btn\"></div>\r\n            <img class=\"imag\" (click)=\"altSelected($event)\" src=\"../../../assets/checkout.png\">\r\n        </div>        \r\n    </div>\r\n <div *ngIf = \"pago === 'alt'\">\r\n        <button (click)=\"returnSelection($event)\">REGRESAR</button>\r\n\r\n        <br>\r\n        <br>\r\n\r\n        <h2>Método de pago alternativo:</h2>\r\n        <br>\r\n\r\n        <div style=\"width: 35% ; margin-left: auto ; margin-right: auto\">\r\n            <div style=\"float: left\">\r\n                <h3>Subtotal:</h3>\r\n                <h3>IVA (16%):</h3>\r\n                <h3>Envío (4%):</h3>\r\n                <h3>Total a pagar:</h3>\r\n            </div>\r\n\r\n            <div style=\"float: right\">\r\n                <h3>{{subtotal | currency : '$ ' : 'code' : '1.2-2'}}</h3>\r\n                <h3>{{iva | currency : '$ ' : 'code' : '1.2-2'}}</h3>\r\n                <h3>{{envio | currency : '$ ' : 'code' : '1.2-2'}}</h3>\r\n                <h3>{{total | currency : '$ ' : 'code' : '1.2-2'}}</h3>\r\n            </div>\r\n        </div>\r\n    <div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h4>Introduzca datos de pago:</h4>\r\n        <div>\r\n            \r\n                <label for=\"cc\">Tarjeta de Crédito</label><br>\r\n                <input name=\"cc\" style=\"width: 30%\" type=\"string\" placeholder=\"Número de tarjeta de crédito\" minlength=\"13\" maxlength=\"18\">\r\n                <br>\r\n                <label for=\"cvv\">Código de Seguridad</label><br>\r\n                <input name=\"cvv\" style=\"width: 5%\" type=\"string\" placeholder=\"CVV\" maxlength=\"3\">\r\n                <br>\r\n                <label for=\"date\">Fecha de Vencimiento</label><br>\r\n                <input name=\"date\" type=\"month\">\r\n                <br>\r\n                <br>\r\n                <button (click)=\"submitAlt()\"><strong>PAGAR</strong></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ventanapago/ventanapago.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/ventanapago/ventanapago.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imag {\n  margin: 5%;\n  height: 50vmin;\n  text-align: center;\n  cursor: pointer; }\n\n.im {\n  margin: 5%;\n  height: 50vmin;\n  text-align: center; }\n\nh1 {\n  text-align: justify; }\n"

/***/ }),

/***/ "./src/app/components/ventanapago/ventanapago.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ventanapago/ventanapago.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var header_service_service_1 = __webpack_require__(/*! ../header/header-service.service */ "./src/app/components/header/header-service.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var orden_service_1 = __webpack_require__(/*! ../../services/orden.service */ "./src/app/services/orden.service.ts");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var VentanapagoComponent = /** @class */ (function () {
    function VentanapagoComponent(nav, fb, afs, order) {
        var _this = this;
        this.nav = nav;
        this.fb = fb;
        this.afs = afs;
        this.order = order;
        this.addScript = false;
        this.paypalLoad = false;
        this.FinalAmount = 1;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AYI7tbIPSin1phUHLX39ZjQ2WLie8wE7hr3o8tm2LdPsmSvmoyVE1rDsPDOjOEfzJXm-jqhZ1NdoyLXx',
                production: '<your-production-key here>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.FinalAmount, currency: "USD" } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    _this.enviarorden();
                });
            }
        };
        this.pago = "select";
        this.pago2 = false;
        this.carrito = [];
        this.subtotal = 0;
        this.iva = 0;
        this.envio = 0;
        this.total = 0;
        this.i = 0;
        this.index = 0;
        this.email = sessionStorage.useremail;
        this.orden = {
            email: '',
            orden: [],
            monto: 0,
            direccion: '',
        };
    }
    VentanapagoComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    VentanapagoComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    VentanapagoComponent.prototype.ngOnInit = function () {
        this.nav.show();
        this.order.getData();
        if (sessionStorage["carritoItems"]) {
            this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
            //Suma de los precios
            for (this.i = 0; this.i < this.carrito.length; this.i++) {
                this.subtotal = this.subtotal + this.carrito[this.i].precio;
            }
            this.iva = this.subtotal * 0.16;
            this.envio = this.subtotal * 0.04;
            this.total = this.subtotal + this.iva + this.envio;
            this.orden.monto = this.total;
            this.orden.orden = this.carrito;
            this.orden.email = this.email;
            this.FinalAmount = this.total;
        }
    };
    VentanapagoComponent.prototype.altSelected = function (event) {
        this.pago = "alt";
    };
    VentanapagoComponent.prototype.returnSelection = function (event) {
        window.location.reload();
    };
    VentanapagoComponent.prototype.submitAlt = function () {
        this.order.addOrder(this.orden);
        sessionStorage.removeItem("carritoItems");
        window.location.replace('home');
        alert("La transacción ha sido exitosa.");
    };
    VentanapagoComponent.prototype.setpago = function () {
        this.pago2 = true;
        this.orden.direccion = this.address;
        console.log(this.orden.direccion);
    };
    VentanapagoComponent.prototype.enviarorden = function () {
        this.order.addOrder(this.orden);
        sessionStorage.removeItem("carritoItems");
    };
    VentanapagoComponent = __decorate([
        core_1.Component({
            selector: 'app-ventanapago',
            template: __webpack_require__(/*! ./ventanapago.component.html */ "./src/app/components/ventanapago/ventanapago.component.html"),
            styles: [__webpack_require__(/*! ./ventanapago.component.scss */ "./src/app/components/ventanapago/ventanapago.component.scss")]
        }),
        __metadata("design:paramtypes", [header_service_service_1.HeaderServiceService, forms_1.FormBuilder, firestore_1.AngularFirestore, orden_service_1.OrdenService])
    ], VentanapagoComponent);
    return VentanapagoComponent;
}());
exports.VentanapagoComponent = VentanapagoComponent;


/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Globals = /** @class */ (function () {
    function Globals() {
        this.isAdmin = true;
    }
    Globals = __decorate([
        core_1.Injectable()
    ], Globals);
    return Globals;
}());
exports.Globals = Globals;


/***/ }),

/***/ "./src/app/services/autenticacion/auth-guard.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/autenticacion/auth-guard.service.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/services/autenticacion/auth.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.user = sessionStorage.getItem("isuser");
        this.admin = sessionStorage.getItem("isadmin");
        this.clave = sessionStorage.getItem("claveadmin");
    }
    //Esta función permite identificar los accesos para un usuario, si es usuario, puede acceder.
    AuthGuardService.prototype.canActivate = function () {
        this.admin = sessionStorage.getItem("isadmin");
        if (this.admin == 'true' && this.clave == 'true') {
            return true;
        }
        else if (this.user == 'true' && this.clave == 'true') {
            return true;
        }
        else if (this.user == 'true' && this.clave == 'false') {
            return true;
        }
        else if (this.user == 'true') {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            this.toastr.warning('No puedes ingresar a la página', 'Error de validación');
            return false;
        }
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, ngx_toastr_1.ToastrService])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./src/app/services/autenticacion/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/autenticacion/auth.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_2 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var firestore_1 = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
var AuthService = /** @class */ (function () {
    //Constructor del Auth Service
    function AuthService(toastr, afAuth, afs, router) {
        var _this = this;
        this.toastr = toastr;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.isuser = 'true';
        this.currentemail = "";
        this.isadmin = 'false';
        this.usuario = {
            email: "",
            isadmin: false,
        };
        this.UsuariosCollection = this.afs.collection('usuarios');
        this.user = this.afAuth.authState.pipe(operators_2.switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges(); //Crea documento en firestore
            }
            else {
                return rxjs_1.of(null);
            }
        }));
    }
    //Autenticación con EMAIL Y PASSWORD
    //Función registro de usuario, recibe como parámetro email y password
    AuthService.prototype.registerUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (credential) {
            _this.toastr.success('¡Tus datos han sido registrados exitosamente!', 'Usuario Registrado');
            _this.router.navigate(['/login']);
            return _this.updateUserData(credential.user);
        }).catch(function (error) {
            _this.handleError(error);
            _this.toastr.error('Error en el registro de datos. Por favor, intente nuevamente', 'Registro Fallido');
        });
    };
    //Función login de usuario, recibe como parámetro email y password
    AuthService.prototype.loginEmail = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (credential) {
            sessionStorage.setItem('isuser', _this.isuser);
            sessionStorage.setItem('isadmin', _this.isadmin);
            _this.toastr.success('¡Tus datos han sido ingresados exitosamente!', 'Bienvenido');
            _this.router.navigate(['/home']);
            _this.currentemail = credential.user.email;
            return _this.updateUserData(credential.user);
        }).catch(function (error) {
            _this.handleError(error);
            _this.toastr.error('Error en la autenticación de datos. Por favor, intente nuevamente', 'Inicio de Sesión Fallido');
        });
    };
    //Función que permite resetear contraseña
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email)
            .then(function () { return console.log('sent Password Reset Email!'); })
            .catch(function (error) { return console.log(error); });
    };
    //Función cerrar sesión
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            sessionStorage.clear();
            _this.router.navigate(['/']);
        });
    };
    //Manejo de errores por consola
    AuthService.prototype.handleError = function (error) {
    };
    AuthService.prototype.createdocument = function (email, isadmin) {
        this.usuario.email = email;
        this.usuario.isadmin = isadmin;
        this.UsuariosCollection.add(this.usuario);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Luego de loggear, envía la data del usuario a firestore
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
        };
        return userRef.set(data);
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(operators_1.map(function (auth) { auth; }));
    };
    AuthService.prototype.islogged = function (user) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.veruser = function () {
        return this.currentemail;
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, auth_1.AngularFireAuth, firestore_1.AngularFirestore, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/autenticacion/authadmin.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/autenticacion/authadmin.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_2 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var firestore_1 = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var AuthAdminService = /** @class */ (function () {
    //Constructor del Auth Service de Administradores
    function AuthAdminService(toastr, afAuth, afs, router) {
        var _this = this;
        this.toastr = toastr;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.isadmin = 'true';
        this.AdminCollection = this.afs.collection('admin');
        this.admin = this.afAuth.authState.pipe(operators_2.switchMap(function (admin) {
            if (admin) {
                return _this.afs.doc("admin/" + admin.uid).valueChanges(); //Crea documento en firestore
            }
            else {
                return rxjs_1.of(null);
            }
        }));
    }
    //Autenticación con EMAIL Y PASSWORD
    //Función registro de admin, recibe como parámetro email y password
    AuthAdminService.prototype.registerUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (credential) {
            _this.toastr.success('¡Tus datos han sido registrados exitosamente!', 'Administrador Registrado');
            _this.router.navigate(['/loginadmin']);
            return _this.updateUserData(credential.user);
        }).catch(function (error) {
            _this.handleError(error);
            _this.toastr.error('Error en el registro de datos. Por favor, intente nuevamente', 'Registro Fallido');
        });
    };
    //Función login de usuario, recibe como parámetro email y password
    AuthAdminService.prototype.loginEmail = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (credential) {
            sessionStorage.setItem('isadmin', _this.isadmin);
            _this.toastr.success('¡Tus datos han sido ingresados exitosamente!', 'Inicio de Sesión');
            _this.router.navigate(['/homeadmin']);
            return _this.updateUserData(credential.user);
        }).catch(function (error) {
            _this.handleError(error);
            _this.toastr.error('Error en la autenticación de datos. Por favor, intente nuevamente', 'Inicio de Sesión Fallido');
        });
    };
    //Función que permite resetear contraseña
    AuthAdminService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email)
            .then(function () { return console.log('sent Password Reset Email!'); })
            .catch(function (error) { return console.log(error); });
    };
    //Función cerrar sesión
    AuthAdminService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            sessionStorage.clear();
            _this.router.navigate(['/loginadmin']);
        });
    };
    //Manejo de errores por consola
    AuthAdminService.prototype.handleError = function (error) {
        console.log(error);
    };
    // Luego de loggear, envía la data del usuario a firestore
    AuthAdminService.prototype.updateUserData = function (admin) {
        var adminRef = this.afs.doc("admin/" + admin.uid);
        var data = {
            uid: admin.uid,
            email: admin.email || null,
        };
        return adminRef.set(data);
    };
    AuthAdminService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(operators_1.map(function (auth) { auth; }));
    };
    AuthAdminService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, auth_1.AngularFireAuth, firestore_1.AngularFirestore, router_1.Router])
    ], AuthAdminService);
    return AuthAdminService;
}());
exports.AuthAdminService = AuthAdminService;


/***/ }),

/***/ "./src/app/services/autenticacion/guard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/autenticacion/guard.service.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var authadmin_service_1 = __webpack_require__(/*! ./authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var GuardService = /** @class */ (function () {
    function GuardService(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    //Esta función permite identificar los accesos para un usuario, si es usuario, puede acceder.
    GuardService.prototype.canActivate = function () {
        if (sessionStorage.getItem("claveadmin") == 'true') {
            return true;
        }
        if (sessionStorage.getItem("isuser") == 'true') {
            this.toastr.warning('No puedes ingresar a la página', 'Error Usuario');
            this.router.navigate(['/home']);
            return false;
        }
        else {
            this.router.navigate(['/login']);
            this.toastr.warning('No puedes ingresar a la página', 'Error de validación');
            return false;
        }
    };
    GuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authadmin_service_1.AuthAdminService, router_1.Router, ngx_toastr_1.ToastrService])
    ], GuardService);
    return GuardService;
}());
exports.GuardService = GuardService;


/***/ }),

/***/ "./src/app/services/cart-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/cart-service.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CartService = /** @class */ (function () {
    function CartService() {
        this.carrito = [];
    }
    CartService.prototype.addItem = function (item) {
        this.carrito.push(item);
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;


/***/ }),

/***/ "./src/app/services/img-storage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/img-storage.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var auth_1 = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var ImgStorageService = /** @class */ (function () {
    function ImgStorageService(af) {
        this.af = af;
    }
    ImgStorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth])
    ], ImgStorageService);
    return ImgStorageService;
}());
exports.ImgStorageService = ImgStorageService;


/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
//Servicio para extraer, agregar, eliminar o modificar data del menú
var ItemService = /** @class */ (function () {
    function ItemService(afs) {
        this.afs = afs;
    }
    ItemService.prototype.setRoute = function (name) {
        this.route = name;
    };
    ItemService.prototype.getData = function () {
        this.ItemCollection = this.afs.collection("" + this.route, function (ref) { return ref.orderBy('nombre', 'asc'); }); //Esta función indica cuál es la colección y ordena los datos de forma ascendente por nombre
        //Toma el objeto en específico, crea un observable de tipo array para mostrar en pantalla
        this.items = this.ItemCollection.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    //Devuelve el array 
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    //Agrega el item a firebase
    ItemService.prototype.addItem = function (item) {
        this.ItemCollection.add(item);
    };
    //Eliminar el item de firebase
    ItemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc(this.route + "/" + item.id);
        this.itemDoc.delete();
    };
    ItemService.prototype.updateItem = function (item) {
        this.itemDoc = this.afs.doc(this.route + "/" + item.id);
        this.itemDoc.update(item);
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;


/***/ }),

/***/ "./src/app/services/orden.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/orden.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var OrdenService = /** @class */ (function () {
    function OrdenService(afs) {
        this.afs = afs;
    }
    OrdenService.prototype.getData = function () {
        this.OrderCollection = this.afs.collection('ordenes', function (ref) { return ref.orderBy('email', 'asc'); }); //Esta función indica cuál es la colección y ordena los datos de forma ascendente por nombre
        //Toma el objeto en específico, crea un observable de tipo array para mostrar en pantalla
        this.orders = this.OrderCollection.snapshotChanges().pipe(operators_1.map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    };
    //Devuelve el array 
    OrdenService.prototype.getItems = function () {
        return this.orders;
    };
    OrdenService.prototype.addOrder = function (order) {
        this.OrderCollection.add(order);
    };
    OrdenService.prototype.deleteOrder = function (order) {
        this.OrderDoc = this.afs.doc("ordenes/" + order.id);
        this.OrderDoc.delete();
    };
    OrdenService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], OrdenService);
    return OrdenService;
}());
exports.OrdenService = OrdenService;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var cart_service_service_1 = __webpack_require__(/*! ../services/cart-service.service */ "./src/app/services/cart-service.service.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [cart_service_service_1.CartService]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({})
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/validateadmin/validateadmin.component.html":
/*!************************************************************!*\
  !*** ./src/app/validateadmin/validateadmin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"text-align: center\">\r\n\r\n  <div class=\"jumbotron jumbotron-fluid\" style=\"text-align: center\">\r\n  \r\n    <div style=\"text-align:center\">\r\n     \r\n      <img width=\"250\" alt=\"SteakLogo\" src=\"../../assets/logofondo.png\">\r\n  \r\n    </div>\r\n      \r\n      <div class=\"col-md-10 col-md-offset-3\">\r\n                \r\n        <form (submit)=\"validarclave(password)\">\r\n          \r\n          <div class=\"form-group\">\r\n            \r\n            <h1 class=\"titulo2\"><strong>Indica la clave de validación para continuar</strong></h1>\r\n           \r\n\r\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Ingresa la contraseña\" required>\r\n           \r\n          </div>\r\n  \r\n          <button type=\"submit\" class=\"boton3\"><strong>Ingresar</strong></button>\r\n          </form>\r\n      </div>\r\n  \r\n    </div>\r\n          \r\n  \r\n          \r\n    \r\n       \r\n        </div> "

/***/ }),

/***/ "./src/app/validateadmin/validateadmin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/validateadmin/validateadmin.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background-image: url('background.jpg');\n  background-position: center;\n  position: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh; }\n\n.jumbotron {\n  width: 60%;\n  min-height: 80vh;\n  justify-content: center;\n  align-items: center;\n  background: #525252c2;\n  border-radius: 15%;\n  margin-left: auto;\n  margin-right: auto; }\n\ninput[type=\"password\"] {\n  width: 90%;\n  height: 60px;\n  color: #000000;\n  border-radius: 5px;\n  font-size: 14pt;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiChQRKjK4y5yvAAAAzElEQVQ4y72SsQ2DMBREH2mpKTxIQIpgEM+Qnk2yBxUToEgkMyBRhBFSReinwCAbHAKKlLP0i/PdP3/bAXOEnDlxBO5cufBkFRkNYq2GbF3eO3JB6D9bQtO9Q6NQaDqTEvoNuZFHExMZS+43FAiCdjiNIBR+w9BNOZwyqRMCa1MWjIc9sBOjoTWdWFzryLbukWRD8+CnI/1oqEhIqNaM7qAxALFvfH9CaNVNCSUA5faE3UM/rLrJ8LLqDP976dtX5UyRUi/+qb1q0kH4Bmupdt1u7rNtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTIwVDE3OjQyOjUwKzAyOjAwxNhQMAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0yMFQxNzo0Mjo1MCswMjowMLWF6IwAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 45px; }\n\nbutton {\n  color: #a89e9e;\n  padding: 14px 20px;\n  margin: 8pt 8pt;\n  margin-left: 50pt;\n  border: none;\n  cursor: pointer;\n  width: 180pt;\n  height: 40pt;\n  border-radius: 10px;\n  float: left; }\n\n.boton3 {\n  font-family: 'PT Serif', serif;\n  font-size: 14pt;\n  text-align: center;\n  color: black; }\n\nimg {\n  border-radius: 20px; }\n\n.titulo {\n  font-family: 'PT Serif', serif;\n  font-size: 15pt;\n  text-align: justify;\n  color: white;\n  margin-left: 120pt; }\n\n.titulo2 {\n  font-family: 'PT Serif', serif;\n  font-size: 20pt;\n  text-align: justify;\n  color: white; }\n\n::-webkit-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::-ms-input-placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n\n::placeholder {\n  font-family: 'PT Serif', serif;\n  font-size: 10pt;\n  text-align: justify;\n  color: #707070; }\n"

/***/ }),

/***/ "./src/app/validateadmin/validateadmin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/validateadmin/validateadmin.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var authadmin_service_1 = __webpack_require__(/*! ../services/autenticacion/authadmin.service */ "./src/app/services/autenticacion/authadmin.service.ts");
var ValidateadminComponent = /** @class */ (function () {
    function ValidateadminComponent(router, toastr, auth) {
        this.router = router;
        this.toastr = toastr;
        this.auth = auth;
        this.claveadmin = 'true';
    }
    ValidateadminComponent.prototype.ngOnInit = function () {
    };
    ValidateadminComponent.prototype.validarclave = function (password) {
        if (this.password == 'soyadmin') {
            sessionStorage.setItem('claveadmin', 'true');
            this.router.navigate(['/loginadmin']);
            this.toastr.success('Clave Correcta', 'Bienvenido Administrador');
        }
        else {
            this.router.navigate(['/login']);
            this.toastr.warning('Clave Incorrecta. No puedes ingresar a esta página', 'Página Inválida');
        }
    };
    ValidateadminComponent = __decorate([
        core_1.Component({
            selector: 'app-validateadmin',
            template: __webpack_require__(/*! ./validateadmin.component.html */ "./src/app/validateadmin/validateadmin.component.html"),
            styles: [__webpack_require__(/*! ./validateadmin.component.scss */ "./src/app/validateadmin/validateadmin.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_toastr_1.ToastrService, authadmin_service_1.AuthAdminService])
    ], ValidateadminComponent);
    return ValidateadminComponent;
}());
exports.ValidateadminComponent = ValidateadminComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//Import de los datos de la base de datos en Firestore
exports.environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDIJxieWFunR9YW7OiJOvBcVNnVcKrsO0s",
        authDomain: "steak-restaurante.firebaseapp.com",
        databaseURL: "https://steak-restaurante.firebaseio.com",
        projectId: "steak-restaurante",
        storageBucket: "steak-restaurante.appspot.com",
        messagingSenderId: "851842595463"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samue\proyecto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map