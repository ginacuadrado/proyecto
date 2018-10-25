import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
