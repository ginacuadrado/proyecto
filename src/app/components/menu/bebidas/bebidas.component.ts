import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  items: Item[];
  route = 'bebidas';

  constructor(public nav: HeaderServiceService, public bebidasService: ItemService) { }

  ngOnInit() {
    this.nav.show();
    this.bebidasService.setRoute(this.route);
    this.bebidasService.getData();
    this.bebidasService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
    this.bebidasService.deleteItem(item);
  }

}