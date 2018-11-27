import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-ventanapago',
  templateUrl: './ventanapago.component.html',
  styleUrls: ['./ventanapago.component.scss']
})
export class VentanapagoComponent implements OnInit {

  pago: string = "alt";
  carrito: Item[] = [];
  subtotal: number = 0;
  iva: number = 0;
  envio: number = 0;
  total: number = 0;
  i: number = 0;

  constructor(private nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();

    if(sessionStorage["carritoItems"]){
      this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));

    //Suma de los precios
      for(this.i = 0; this.i<this.carrito.length; this.i++)
      {
        this.subtotal = this.subtotal + this.carrito[this.i].precio;
      }

      this.iva = this.subtotal * 0.16;
      this.envio = this.subtotal * 0.04;
      this.total = this.subtotal + this.iva + this.envio;
    }
  }

  paypalSelected(event){
    this.pago = "paypal";
  }

  altSelected(event){
    this.pago = "alt";
  }

  returnSelection(event){
    this.pago = "select";
  }

  SubmitAlt(){
    
  }

}
