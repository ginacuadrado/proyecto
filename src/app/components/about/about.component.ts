import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { FooterServiceService } from '../footer/footer-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']

})
export class AboutComponent implements OnInit {

  
  constructor(public nav: HeaderServiceService, public footer: FooterServiceService) { }

  ngOnInit() {
    this.nav.show();
    this.footer.show();
  }

}
