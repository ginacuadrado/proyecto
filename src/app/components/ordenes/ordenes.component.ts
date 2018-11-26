import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  constructor(private nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
