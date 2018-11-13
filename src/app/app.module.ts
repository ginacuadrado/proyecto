import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemService } from './services/item.service';
import { Globals } from './global';

 //Importado para el enrutamiento
import { RouterModule, Routes } from '@angular/router';

//Importados desde FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment'; //Aquí se encuentra la conexión a Firebase

//Servicios de autenticación
import { AuthService } from './services/autenticacion/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthGuard } from './services/guards/authguard.service'

//Componentes del Proyecto
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/ingreso/login/login.component';
import { RegisterComponent } from './components/ingreso/register/register.component';
import { CarnesComponent } from './components/menu/carnes/carnes.component';
import { PostresComponent } from './components/menu/postres/postres.component';
import { AperitivosComponent } from './components/menu/aperitivos/aperitivos.component';
import { BebidasComponent } from './components/menu/bebidas/bebidas.component';
import { MenuDetailsComponent } from './components/menu/menu-details/menu-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from './shared/shared.module';

//Componentes de Administrador
import { AdminComponent } from './components/admin/admin.component';
import { AgregarItemComponent } from './components/admin/agregar-item/agregar-item.component';
import { RegisterAdminComponent } from '../app/components/admin/register-admin/register-admin.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { VentanapagoComponent } from './components/ventanapago/ventanapago.component';




//Router para la navegación entre las páginas

const router: Routes = [
  {
    path: 'home',
    component: HomeComponent,
   
  },

  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'menu/carnes',
    component: CarnesComponent
  },
  
  {
    path: 'menu/aperitivos',
    component: AperitivosComponent
  },
  {
    path: 'menu/postres',
    component: PostresComponent
  },
  {
    path: 'menu/bebidas',
    component: BebidasComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'menu-details',
    component: MenuDetailsComponent
  },
  {	  
    path: 'login',	   
    component: LoginComponent	   
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'pago',
    component: VentanapagoComponent
  },
  {
    path: '',                     //Primera vista que se observe al usuario entrar en la página web es el Log-In
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'register-admin',
    component: RegisterAdminComponent,
  },

  /*{ 
    path: 'login', 
    component: LoginComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: 'register',
    component: RegisterComponent,
     canActivate: [AuthGuard] 
  },
  { 
    path: 'perfil',
    component: PerfilComponent,
    resolve: { data: UserResolver}
  }*/
];

@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,      //Componentes relacionados con el ingreso del usuario
    RegisterComponent,   //Componentes relacionados con el ingreso del usuario
    PerfilComponent,     //Componentes relacionados con el ingreso del usuario
    CarnesComponent,
    PostresComponent,
    AperitivosComponent,
    BebidasComponent,
    AgregarItemComponent,
    AdminComponent,
    MenuDetailsComponent,
    RegisterAdminComponent,
    CartComponent,
    ChangepasswordComponent,
    VentanapagoComponent,

  ],

  imports:
  [
    BrowserModule,
    RouterModule.forRoot(router),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Viene de firestore, inicializa el environmet
    AngularFirestoreModule, // Viene de firestore, usado para features de la base de datos
    AngularFireAuthModule,  // Viene de firestore, usado para la autenticación

  ],

  providers:[AuthService, ItemService, Globals /*AuthGuard*/ ],
  bootstrap: [AppComponent],


})
export class AppModule { }
