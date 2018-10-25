import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './header-service.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


@NgModule
({


})

export class HeaderComponent implements OnInit {

  constructor( public nav: HeaderServiceService ) { }

  ngOnInit() {
  }

}


