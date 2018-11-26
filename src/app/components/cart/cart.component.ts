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
  string: string = '';

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() { 
    this.nav.show();

    if(sessionStorage["carritoItems"]){
      this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
      
    }else{
      
    }
  }

}
