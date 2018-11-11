import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
