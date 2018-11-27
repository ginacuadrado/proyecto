import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-ventanapago',
  templateUrl: './ventanapago.component.html',
  styleUrls: ['./ventanapago.component.scss']
})
export class VentanapagoComponent implements OnInit 
{
  pago: boolean=false;
  
  constructor(private nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

  

}
