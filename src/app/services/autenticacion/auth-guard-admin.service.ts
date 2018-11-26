import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthAdminService } from './authadmin.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuardAdminService implements CanActivate
{

  public admin:string;

  constructor(public auth: AuthAdminService, public router: Router, public toastr: ToastrService) {}


//Esta función permite identificar los accesos para un usuario, si es usuario, puede acceder.
  canActivate(): boolean 
  {

    this.admin = sessionStorage.getItem("isadmin")
  
    if(this.admin=='true')
    {
      return true;
    }

    else if(this.admin=='false')
    {
      this.router.navigate(['/login']);
      this.toastr.warning('No puedes ingresar a la página', 'Error de validación')
      return false;
    }


  }

 

}