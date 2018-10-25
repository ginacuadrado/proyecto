import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../../header/header-service.service';
import { Item4Service } from '../../../services/item4.service';
import { Item } from '../../../models/item';


@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.scss']
})
export class PostresComponent implements OnInit {

  items: Item[];

  constructor(public nav: HeaderServiceService, public postresService: Item4Service) { }

  ngOnInit() {
    this.nav.show();
    this.postresService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  deleteItem(event, item){
    this.postresService.deleteItem(item);
}

}