import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { FooterServiceService } from '../footer/footer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public nav: HeaderServiceService, public footer: FooterServiceService) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
  }

}
