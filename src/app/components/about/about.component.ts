import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']

})
export class AboutComponent implements OnInit {

  
  constructor(public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
