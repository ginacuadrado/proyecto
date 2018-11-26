import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin'
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthAdminService {

//Definición campos del Usuario
admin: Observable<Admin | null>;
AdminCollection: AngularFirestoreCollection<Admin>;
isadmin:string='true';

//Constructor del Auth Service de Administradores
constructor( private toastr: ToastrService, private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router)
{
      this.AdminCollection = this.afs.collection('admin');
      this.admin = this.afAuth.authState.pipe(
        switchMap(admin => {
          if (admin) {
            return this.afs.doc<Admin>(`admin/${admin.uid}`).valueChanges();    //Crea documento en firestore
          } else {
            return of(null)
          }
        }))
}

//Autenticación con EMAIL Y PASSWORD

//Función registro de admin, recibe como parámetro email y password
registerUser(email: string, password: string) 
{

 return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credential =>
{

    this.toastr.success('¡Tus datos han sido registrados exitosamente!', 'Administrador Registrado');
    this.router.navigate(['/loginadmin']);
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
            this.toastr.success('¡Tus datos han sido registrados exitosamente!', 'Administrador Registrado');
            this.router.navigate(['/homeadmin']);
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
      this.router.navigate(['/loginadmin']);

    });
  }

  //Manejo de errores por consola
  private handleError(error: Error) {
    
        console.log(error)
   
  }

  // Luego de loggear, envía la data del usuario a firestore
 updateUserData(admin:Admin) 
  {
    const adminRef: AngularFirestoreDocument<Admin> = this.afs.doc(`admin/${admin.uid}`);

    const data: Admin =
     {
      uid: admin.uid,
      email: admin.email || null,
    };

    return adminRef.set(data);
  }

getAuth()
{
    return this.afAuth.authState.pipe(map (auth => {auth}));  
}

validar(clave: string):boolean
{

    if(clave=='soyadmin')
    {
      sessionStorage.setItem('claveadmin','true');
      this.router.navigate(['/loginadmin'])
      this.toastr.success('Clave Correcta','Bienvenido Administrador')
      return true;
    }
    
    else if(clave!='soyadmin')
    {

      sessionStorage.setItem('claveadmin','false');
      this.router.navigate(['./admin']) 
      this.toastr.warning('Clave Incorrecta. No puedes ingresar a esta página','Página Inválida')
      return false;
    }
}



}