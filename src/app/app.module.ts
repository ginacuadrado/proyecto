import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemService } from './services/item.service';

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
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AgregarItemComponent } from './components/agregar-item/agregar-item.component';

//Componentes de Administrador
import { AdminComponent } from './components/admin/admin.component';

//Router para la navegación entre las páginas

const router: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',                     //Primera vista que se observe al usuario entrar en la página web es el Log-In
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full' 
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
    ProductlistComponent,
    ProductdetailsComponent,
    AgregarItemComponent,
    AdminComponent,
    
  ],

  imports:
  [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Viene de firestore, inicializa el environmet
    AngularFirestoreModule, // Viene de firestore, usado para features de la base de datos
    AngularFireAuthModule,  // Viene de firestore, usado para la autenticación

  ],

  providers:[AuthService, ItemService,],
  bootstrap: [AppComponent],


})
export class AppModule { }
