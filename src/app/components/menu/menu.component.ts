import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Globals } from '../../global';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public nav: HeaderServiceService, private globals: Globals) { 
    
  }

  ngOnInit() {
    this.nav.show();
  }

}
