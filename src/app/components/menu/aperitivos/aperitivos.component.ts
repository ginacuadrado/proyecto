import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { Item2Service } from '../../../services/item2.service';
import { Item } from '../../../models/item';



@Component({
  selector: 'app-aperitivos',
  templateUrl: './aperitivos.component.html',
  styleUrls: ['./aperitivos.component.scss']
})
export class AperitivosComponent implements OnInit {

  items: Item[];

  constructor(public nav: HeaderServiceService, public aperitivosService: Item2Service) { }

  ngOnInit() {
    this.nav.show();
    this.aperitivosService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  //Método que elimina el item del array
  deleteItem(event, item){
    this.aperitivosService.deleteItem(item);
  }

}
