import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carrito: Item[] = [];
  subtotal: number = 0;
  iva: number = 0;
  envio: number = 0;
  total: number = 0;
  i: number = 0;
  index: number = 0;

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() { 
    this.nav.show();

    //Validación para carrito vacío
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
    }else{
      
    }
  }

  removeItem(event, item: Item){
    this.index = this.carrito.indexOf(item);
    this.subtotal = 0;
    
    if(this.index > -1){
      this.carrito.splice(this.index, 1);
      sessionStorage.carritoItems = JSON.stringify(this.carrito);

      for(this.i = 0; this.i<this.carrito.length; this.i++)
      {
        this.subtotal = this.subtotal + this.carrito[this.i].precio;
      }
      this.iva = this.subtotal * 0.16;
      this.envio = this.subtotal * 0.04;
      this.total = this.subtotal + this.iva + this.envio;
    }
  }

}
