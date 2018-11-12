import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthService } from '../../../services/autenticacion/auth.service'
//import { UserItemsService } from '../../../services/autenticacion/useritems.service'
import { Usuarios } from 'src/app/models/usuarios';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent {

//Propiedades para el formulario
public email: string;
public password: string;
public isadmin: boolean = false;

constructor(public authService: AuthService, public afs: AngularFireAuth, public router : Router, /*public userservice: UserItemsService*/)
{
 
}

onSubmitAddUser()
{
  
  this.authService.registerUser(this.email, this.password)
  .then ( (res) => 
  {
    console.log('Usuario Registrado');  //Mensajes de éxito
    console.log(res);
   
    this.router.navigate(['./login']) 
  
  }

  ).catch ( (err) => 
      {
          console.log(err);
      }
  )

  this.authService.createdocument(this.email,this.isadmin);
}

}

