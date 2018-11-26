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

public validarclave(password: string): boolean
{
    return this.auth.validar(password);
}
  
}
