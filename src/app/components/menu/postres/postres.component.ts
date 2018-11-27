import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { Globals } from '../../../global';


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
  admin: string = sessionStorage.getItem('isadmin');
  carrito: Item[] = [];

  constructor(public nav: HeaderServiceService, public postresService: ItemService, private check: Globals) { }

  ngOnInit() {

    this.nav.show();
    this.postresService.setRoute(this.route);
    this.postresService.getData();
    this.postresService.getItems().subscribe(items => {
    this.items = items;
    });
  }

  selectedItem(event, item: Item){
    if(sessionStorage["carritoItems"])
    {
      this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
      this.carrito.push(item);
      sessionStorage.carritoItems = JSON.stringify(this.carrito);
    }else{
      this.carrito.push(item);
      sessionStorage.carritoItems = JSON.stringify(this.carrito);
    }
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