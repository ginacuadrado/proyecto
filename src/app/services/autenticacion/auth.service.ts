import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { map } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { userInfo } from 'os';



interface User 
{
    uid: string;
    email: string;
   
}

@Injectable()
export class AuthService
{


    constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public router: Router)
    {
    
        
    }

    
//Métodos para la construcción de la autenticación

//Método para el logout, proviene de la documentación de Firebase
logout()
{
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
}

//Método para registrar a un usuario, proviene de la documentación de Firebase
registerUser(email: string, password: string )
{
    


    return new Promise((resolve,reject) =>
    {
        this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then (userData => resolve(userData)),
        err=> reject (err);

    });
}

//Método para realizar el login, proviene de la documentación de Firebase
loginEmail(email: string, password: string )
{



    return new Promise((resolve,reject) =>
    {
        this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then (userData => resolve(userData)),
        err=> reject (err);

    });
}

//Comprueba si el usuario está logado, devuelve datos de dicho usuario

getAuth()
{
    console.log("funcionó");
    return this.afAuth.authState.pipe(map (auth => {auth}));
    
}

}