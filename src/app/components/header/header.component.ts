import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { NgModule } from '@angular/core';
import { AuthService } from '../../services/autenticacion/auth.service';

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
 
  toggleNavbar() 
  {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor( public nav: HeaderServiceService, public authService: AuthService ) {

   
   }

  ngOnInit() 
  {
   
  }

  onClickLogout()
  {
    sessionStorage.clear();
    this.authService.logout();
  }
}


