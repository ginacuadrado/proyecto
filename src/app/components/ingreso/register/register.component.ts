import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthService } from '../../../services/autenticacion/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent {
 
//Propiedades para el formulario
public email: string;
public password: string;

constructor(public authService: AuthService, public router : Router)
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

  }).catch ( (err) => 
      {
          console.log(err);
      }
  )
}


}
