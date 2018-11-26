
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthAdminService } from './authadmin.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GuardService implements CanActivate
{

constructor(public auth: AuthAdminService, public router: Router, public toastr: ToastrService) {}


//Esta función permite identificar los accesos para un usuario, si es usuario, puede acceder.
 
canActivate():boolean
{
    if(sessionStorage.getItem("claveadmin")=='true')
    {
        this.router.navigate(['/login']);
        this.toastr.warning('No puedes ingresar a la página', 'Error de validación')
      return true;
    }
    else {

        this.router.navigate(['/login']);
        this.toastr.warning('No puedes ingresar a la página', 'Error de validación')
        return false;
    }
    
   

}
 

}
