import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';

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
    disp: true,
    extra1: '',
    extra2: '',
    extra3: '',
    selected1: false,
    selected2: false,
    selected3: false,
    imagen: ''
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
      this.item.extra1 = '';
      this.item.extra2 = '';
      this.item.extra3 = '';
      this.item.selected1 = false;
      this.item.selected2 = false;
      this.item.selected3 = false;
    }
  }

}
