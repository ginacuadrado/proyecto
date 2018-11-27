import { Component, OnInit } from '@angular/core';
import { FooterServiceService } from './footer-service.service';
import { AuthAdminService } from '../../services/autenticacion/authadmin.service';
import { AuthService} from '../../services/autenticacion/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerOpen = false;

  toggleNavbar() 
  {
    this.footerOpen = !this.footerOpen;
  }

  constructor( public footer: FooterServiceService, public authadmin: AuthAdminService, public authService: AuthService ) { }

  ngOnInit() {
  }

}




