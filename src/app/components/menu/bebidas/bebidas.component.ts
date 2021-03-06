import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { Globals } from '../../../global';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  items: Item[] = [];
  editState: boolean = false;
  itemToEdit: Item;
  route = 'bebidas';
  admin: string = sessionStorage.getItem('isadmin');
  carrito: Item[] = [];

  constructor(private check: Globals, public nav: HeaderServiceService, public bebidasService: ItemService) { }

  ngOnInit() {
    this.nav.show();
    this.bebidasService.setRoute(this.route);
    this.bebidasService.getData();
    this.bebidasService.getItems().subscribe(items => {
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
    this.bebidasService.deleteItem(item);
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
    this.bebidasService.updateItem(item);
    this.clearState();
  }


}