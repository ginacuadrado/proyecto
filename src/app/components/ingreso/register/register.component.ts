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
<<<<<<< HEAD
=======
errorMessage = '';
error: {name: string, message: string} = {name: '', message: ''};
isNewUser = true;
resetPassword = false;
>>>>>>> 3fe2113ce0069859ae6cafd669730dfa7f9f3384

constructor(public authService: AuthService, public afs: AngularFireAuth, public router : Router, /*public userservice: UserItemsService*/)
{
 
}

validateForm(email: string, password: string): boolean {
  if (email.length === 0) {
    this.errorMessage = 'Please enter Email!'
    return false
  }

  if (password.length === 0) {
    this.errorMessage = 'Please enter Password!'
    return false
  }

  if (password.length < 6) {
    this.errorMessage = 'Password should be at least 6 characters!'
    return false
  }

}

clearErrorMessage() {
  this.errorMessage = '';
  this.error = {name: '', message: ''};
}

changeForm() {
  this.isNewUser = !this.isNewUser
}

isValidMailFormat(email: string) {
  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
    return false;
  }

  return true;
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

