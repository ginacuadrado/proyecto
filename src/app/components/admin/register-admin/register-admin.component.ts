import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthService } from '../../../services/autenticacion/auth.service'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register.admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']

})

export class RegisterAdminComponent {

//Propiedades para el formulario
public email: string;
public password: string;
public isadmin: boolean = true;

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

