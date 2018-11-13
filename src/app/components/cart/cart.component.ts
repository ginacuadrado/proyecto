import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carrito: Item[] = JSON.parse(localStorage.getItem('carritoItems'));

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() { 
    this.nav.show();
  }

}
