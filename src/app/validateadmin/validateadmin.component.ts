import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import {AuthAdminService} from '../services/autenticacion/authadmin.service'
@Component({
  selector: 'app-validateadmin',
  templateUrl: './validateadmin.component.html',
  styleUrls: ['./validateadmin.component.scss']
})
export class ValidateadminComponent implements OnInit {

public password: string;
public claveadmin: string = 'true';


  constructor(public router : Router, public toastr: ToastrService, public auth: AuthAdminService) { }

  ngOnInit() 
  {
  }

public validarclave(password: string)
{
   
  if(this.password=='soyadmin')
  {
    sessionStorage.setItem('claveadmin','true');
    this.router.navigate(['/loginadmin']);
    this.toastr.success('Clave Correcta','Bienvenido Administrador')
  
  }

  else
  {
    this.router.navigate(['/login']) ;
    this.toastr.warning('Clave Incorrecta. No puedes ingresar a esta página','Página Inválida');
  
  }
}
  
}
