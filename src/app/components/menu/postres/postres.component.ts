import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { Globals } from '../../../global';
import { CartService } from '../../../services/cart-service.service';


@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss']
})
export class PostresComponent implements OnInit {

  items: Item[] = [];
  editState: boolean = false;
  itemToEdit: Item;
  route = 'postres'; 
  admin: boolean = false;
  carrito: Item[] = [];

  constructor(public data: CartService, public nav: HeaderServiceService, public postresService: ItemService, private check: Globals) { }

  ngOnInit() {
    this.nav.show();
    this.carrito = this.data.carrito;
    this.admin = this.check.isAdmin;
    this.postresService.setRoute(this.route);
    this.postresService.getData();
    this.postresService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  selectedItem(event, item: Item){
    this.data.addItem(item); 
    this.carrito = this.data.carrito;
  }

  deleteItem(event, item){
    this.postresService.deleteItem(item);
}

//Métodos que editan el item del array
editItem(event, item: Item){
  this.editState = true;
  this.itemToEdit = item;
}

clearState(){
  this.editState = false;
  this.itemToEdit = null;
}

updateItem(item: Item){
  this.postresService.updateItem(item);
  this.clearState();
}


}