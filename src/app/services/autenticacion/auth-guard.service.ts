import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate
{
  public user:string = sessionStorage.getItem("isuser")
  public admin:string= sessionStorage.getItem("isadmin")
  public clave:string= sessionStorage.getItem("claveadmin")
  constructor(public auth: AuthService, public router: Router, public toastr: ToastrService) {}


//Esta función permite identificar los accesos para un usuario, si es usuario, puede acceder.
  canActivate(): boolean 
  {

    this.admin = sessionStorage.getItem("isadmin")

    if(this.admin=='true' && this.clave=='true')
    {
        return true;
    }
    else if(this.user=='true' && this.clave=='true')
    {
      return true;
    }
    else if(this.user=='true' && this.clave=='false')
    {
      return true;
    }
    else if(this.user=='true')
    {
      return true;
    }
    
    else
  {
    this.router.navigate(['/login']);
    this.toastr.warning('No puedes ingresar a la página', 'Error de validación')
    return false;
  }

  }

}