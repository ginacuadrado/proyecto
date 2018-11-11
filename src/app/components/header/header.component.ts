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

  constructor( public nav: HeaderServiceService, public authService: AuthService ) { }

  ngOnInit() 
  {
   
    /*this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.emailUsuario = auth.email;
        this.uid=auth.uid;
       
      } else {
        this.isLogin = false;
      }
    });   */
   
  }

  onClickLogout()
  {
      this.authService.logout();
  }


}


