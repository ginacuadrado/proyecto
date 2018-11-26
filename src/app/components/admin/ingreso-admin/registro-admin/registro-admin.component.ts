import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Métodos de autenticación
import { AuthAdminService } from '../../../../services/autenticacion/authadmin.service'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

//Propiedades para el formulario
public email: string;
public password: string;
public isadmin: boolean = true;
registerForm: FormGroup;
submitted= false;

constructor(public authService: AuthAdminService,public fb: FormBuilder, public afs: AngularFireAuth, public router : Router, /*public userservice: UserItemsService*/)
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

  }
}}

