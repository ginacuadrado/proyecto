import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../../models/user'
import { Usuarios } from '../../models/usuarios';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase/app'

@Injectable({ providedIn: 'root' })
export class AuthService {

//Definición campos del Usuario
user: Observable<User | null>;
UserCollection: AngularFirestoreCollection<User>;
UsuariosCollection: AngularFirestoreCollection<Usuarios>;
database: any;
onuser: Observable<Usuarios[]>;
isadmin:string = 'false';
currentemail:string;

usuario: Usuarios = 
  {
      email:"",
      isadmin: false,
  }

queryRef: string
    
//Constructor del Auth Service
    constructor( private toastr: ToastrService, private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, /*private uis: UserItemsService*/)
    {
      this.UsuariosCollection = this.afs.collection('usuarios');
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();    //Crea documento en firestore
          } else {
            return of(null)
          }
        }))
    }

//Autenticación con EMAIL Y PASSWORD

//Función registro de usuario, recibe como parámetro email y password
registerUser(email: string, password: string) 
{

 return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credential =>
{

    return this.updateUserData(credential.user);

  }).catch(error => 
        
    {
      this.handleError(error)
      this.toastr.error('Error en el registro de datos. Por favor, intente nuevamente', 'Registro Fallido');

    });

}

//Función login de usuario, recibe como parámetro email y password
loginEmail(email: string, password: string,) 
{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credential => 
        {  
            sessionStorage.setItem('isadmin',this.isadmin);
            this.toastr.success('¡Tus datos han sido registrados exitosamente!', 'Usuario Registrado');
            this.router.navigate(['/home']);
            this.currentemail=credential.user.email;
            return this.updateUserData(credential.user);

        }).catch(error => 
        {
              this.handleError(error)
              this.toastr.error('Error en la autenticación de datos. Por favor, intente nuevamente', 'Inicio de Sesión Fallido');
        });
}

  
  //Función que permite resetear contraseña
  resetPassword(email: string) 
  {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }


//Función cerrar sesión
  logout() {
    this.afAuth.auth.signOut().then(() => {
      
      sessionStorage.clear();
      this.router.navigate(['/']);
    });
  }

  //Manejo de errores por consola
  private handleError(error: Error) {
    

   
  }

  createdocument(email: string, isadmin: boolean)
  {

    this.usuario.email= email;
    this.usuario.isadmin= isadmin;
    this.UsuariosCollection.add(this.usuario);
  }

private oAuthLogin(provider: any) {
  return this.afAuth.auth
    .signInWithPopup(provider)
    .then(credential => {

      return this.updateUserData(credential.user);
    })
    .catch(error => this.handleError(error));
}


  // Luego de loggear, envía la data del usuario a firestore
 updateUserData(user: User) 
  {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User =
     {
      uid: user.uid,
      email: user.email || null,
    };

    return userRef.set(data);
  }

getAuth()
{
    return this.afAuth.authState.pipe(map (auth => {auth}));  
}


islogged(user:User)
{
    firebase.auth().onAuthStateChanged((user: firebase.User) =>
     {
      if (user) {
        return true;
      } else {
        
        return false;
      }})}
    

veruser():string
    {
    
      return this.currentemail;
      
    }

  }
