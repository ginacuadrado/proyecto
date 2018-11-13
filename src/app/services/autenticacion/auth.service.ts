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

//import { UserItemsService } from './useritems.service'

@Injectable({ providedIn: 'root' })
export class AuthService {

//Definición campos del Usuario
    user: Observable<User | null>;
    UserCollection: AngularFirestoreCollection<User>;
    UsuariosCollection: AngularFirestoreCollection<Usuarios>;

    usuario: Usuarios = 
    {
      useremail:"",
      userisadmin: false
    }
    
//Constructor del Auth Service
    constructor( private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, /*private uis: UserItemsService*/)
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

//Registro de usuario

 registerUser(email: string, password: string) {

 
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        
        return this.updateUserData(credential.user); // 
      })
      .catch(error => this.handleError(error));

   
  }

//Login de Usuario
 loginEmail(email: string, password: string,) {

    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));

      
  }

  //Función para crear documento 

  
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
      this.router.navigate(['/']);
    });
  }

  //Manejo de errores por consola
  private handleError(error: Error) {
    console.error(error);
   
  }

  createdocument(email: string, isadmin: boolean)
  {

    this.usuario.useremail= email;
    this.usuario.userisadmin= isadmin;
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

deleteuser()
{

  
}


}