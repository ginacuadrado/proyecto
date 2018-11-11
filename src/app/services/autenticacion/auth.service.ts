import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { map } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase';


interface User {
  uid: string;
  email: string;
}


@Injectable({ providedIn: 'root' })
export class AuthService {

//Definición campos del Usuario
    user: Observable<User | null>;

//Constructor del Auth Service
    constructor( private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, )
    {
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
 loginEmail(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  //Función que permite resetear contraseña
  resetPassword(email: string) {
    const fbAuth = auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .catch(error => this.handleError(error));
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

  // Luego de loggear, envía la data del usuario a firestore
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,

    };
    return userRef.set(data);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {

        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

getAuth()
{
    return this.afAuth.authState.pipe(map (auth => {auth}));  
}

}