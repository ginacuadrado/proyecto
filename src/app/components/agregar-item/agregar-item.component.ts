import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.scss']
})
export class AgregarItemComponent implements OnInit {

  item: Item = {
    nombre: "",
    descripcion: "",
    precio: 0,
    disp: true
  }

  constructor(public itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.nombre != '' && this.item.descripcion != '' && this.item.precio > 0 && this.item.imagen != ''){
      this.itemService.addItem(this.item);
      this.item.nombre = '';
      this.item.descripcion = '';
      this.item.precio = 0;
      this.item.imagen = '';
    }
  }

}
