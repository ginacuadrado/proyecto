import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthService } from '../../../services/autenticacion/auth.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastrService } from 'ngx-toastr';


@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

public email: string;
public password: string;
public isAdmin: boolean;
resetPassword = false;
errorMessage = '';
loginForm: FormGroup;
submitted=false;
correo:string;

  constructor(private toastr: ToastrService, private fb: FormBuilder, public authService: AuthService, public afs: AngularFireAuth, public router : Router) 
  {
   
  }

ngOnInit() 
{
      this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]] });

}


get f() { return this.loginForm.controls; }


//Función que valida el ingreso del usuario en la página
onSubmitLogin()
{

  this.submitted = true;

  if (this.loginForm.invalid) 
  {
      return;
  }
    
  else if(this.loginForm.valid)
  {
      this.authService.loginEmail(this.email,this.password).then((res) => 
      {
            
            

      }).catch((err) =>
      
      {
        console.log(err);
        
      })}
      
}

forgotpassword()
  {
    
        this.authService.resetPassword(this.email)
          .then(() => this.resetPassword = true)
          .catch(_error => {
          console.log(_error);
          })
      
  }


  
}
