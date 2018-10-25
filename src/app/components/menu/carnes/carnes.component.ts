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

  constructor(public nav: HeaderServiceService, public carneService: ItemService) {
    
   }

  ngOnInit() {
    this.nav.show();
    this.carneService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
      this.carneService.deleteItem(item);
  }

}
