import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { NgModule } from '@angular/core';
import { AuthService } from '../../services/autenticacion/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AuthAdminService } from '../../services/autenticacion/authadmin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


@NgModule
({


})

export class HeaderComponent implements OnInit {

  navbarOpen = false;
  public isLogin: boolean;
  public emailUsuario: string;
  public uid: string;
  resetPassword = false;
 
  toggleNavbar() 
  {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor( public nav: HeaderServiceService, public authadmin: AuthAdminService, public authService: AuthService, public toastr: ToastrService ) {

   
   }

  ngOnInit() 
  {
   
  }

  onClickLogout()
  {
    sessionStorage.clear();
    this.authService.logout();
  }

  onClickLogout2()
  {
    sessionStorage.clear();
    this.authadmin.logout();
  }

  changepassword()
  {

    this.emailUsuario= sessionStorage.useremail;
    this.authService.resetPassword(this.emailUsuario)
    .then(() => {this.resetPassword = true,
                this.toastr.warning('Revisa tu correo electrónico para realizar el cambio de contraseña','Cambio de contraseña');}
    )
    .catch(_error => {
    console.log(_error);
    })

  }
}


