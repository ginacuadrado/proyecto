import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthService } from '../../../services/autenticacion/auth.service'
import { AngularFireAuth } from 'angularfire2/auth';


import { ToastrService } from 'ngx-toastr';

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
registerForm: FormGroup;
submitted= false;
resetPassword = false;

constructor( private toastr: ToastrService, private fb: FormBuilder, public authService: AuthService, public afs: AngularFireAuth, public router : Router)
{

}

ngOnInit() 
{
      this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]] });

}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }



//Al tocar el botón, se hace la función de registro
tryRegister()
{
  this.submitted = true;
 
  if (this.registerForm.invalid) 
  {
      return;
  }

  else if (this.registerForm.valid)
  {
      this.authService.registerUser(this.email, this.password).then ( (res) => 
      {
          console.log(res);

      }).catch ( (err) => 
        {
              console.log(err);

        })

      this.authService.createdocument(this.email,this.isadmin);}     //Crea el documento para el registro de users
  }





}

