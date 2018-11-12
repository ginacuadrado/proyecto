import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/autenticacion/auth.service'

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

public email: string;
public password: string;
public isAdmin: boolean;
  

  constructor(public authService: AuthService, public router: Router) 
  {
   
  }

  onSubmitLogin()
  {
      this.authService.loginEmail(this.email,this.password)
      .then ((res) => 
      {
         console.log('Usuario Ingresado')
      }).catch((err) =>
      
      {
        console.log(err);
        this.router.navigate(['/'])
      })

      if(this.email=='admin' && this.password=='admin')
      {
          this.isAdmin=true;
          this.router.navigate(['./admin']);
      }

      else
      {
        this.router.navigate(['./home']);
      }

  }

  
}
