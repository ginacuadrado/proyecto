import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { Item3Service } from '../../../services/item3.service';
import { Item } from '../../../models/item';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {

  items: Item[];

  constructor(public nav: HeaderServiceService, public bebidasService: Item3Service) { }

  ngOnInit() {
    this.nav.show();
    this.bebidasService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
    this.bebidasService.deleteItem(item);
  }

}