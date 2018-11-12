import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.scss']
})
export class CarnesComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  route: string = 'carnes';

  constructor(public nav: HeaderServiceService, public carneService: ItemService) {
     
   }

  ngOnInit() {
    this.nav.show();
    this.carneService.setRoute(this.route);
    this.carneService.getData();
    this.carneService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
      this.carneService.deleteItem(item);
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
    this.carneService.updateItem(item);
    this.clearState();
  }


}
