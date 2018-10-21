import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
