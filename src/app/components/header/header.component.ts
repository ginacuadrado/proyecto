import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public nav: HeaderServiceService ) { }

  ngOnInit() {
  }

}
