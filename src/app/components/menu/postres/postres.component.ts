import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';


@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss']
})
export class PostresComponent implements OnInit {

  items: Item[];
  route = 'postres'; 

  constructor(public nav: HeaderServiceService, public postresService: ItemService) { }

  ngOnInit() {
    this.nav.show();
    this.postresService.setRoute(this.route);
    this.postresService.getData();
    this.postresService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
    this.postresService.deleteItem(item);
}

}