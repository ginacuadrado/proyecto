import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/autenticacion/auth.service'
import { userInfo } from 'os';

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

  constructor(public authService: AuthService, public router: Router) 
  {
   
  }

  onSubmitLogin()
  {
      this.authService.loginEmail(this.email,this.password)
      .then ((res) => 
      {
         console.log('Usuario Ingresado'),
         
         
         
         this.router.navigate(['/home'])

      }).catch((err) =>
      
      {
        console.log(err);
        
      })

      
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
 
    this.errorMessage = ''
 
    return true
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
