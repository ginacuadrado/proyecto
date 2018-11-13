import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrito: Item[] = [];

  constructor() { 

  }

  addItem(item: Item){
    this.carrito.push(item);
  }
}
