import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { Globals } from '../../../global';

@Component({
  selector: 'app-aperitivos',
  templateUrl: './aperitivos.component.html',
  styleUrls: ['./aperitivos.component.scss']
})
export class AperitivosComponent implements OnInit {

  items: Item[] = [];
  editState: boolean = false;
  itemToEdit: Item;
  route = 'aperitivos';
  admin: string = sessionStorage.getItem('isadmin');
  carrito: Item[] = [];

  constructor(private check: Globals, public nav: HeaderServiceService, public aperitivosService: ItemService) { }

  ngOnInit() {
    this.nav.show();
    this.aperitivosService.setRoute(this.route);
    this.aperitivosService.getData();
    this.aperitivosService.getItems().subscribe(items => {
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

  //Método que elimina el item del array
  deleteItem(event, item: Item){
    this.aperitivosService.deleteItem(item);
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
    this.aperitivosService.updateItem(item);
    this.clearState();
  }

}
