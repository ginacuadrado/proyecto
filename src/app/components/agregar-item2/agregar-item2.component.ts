import { Component, OnInit } from '@angular/core';
import { Item2Service } from '../../services/item2.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-agregar-item2',
  templateUrl: './agregar-item2.component.html',
  styleUrls: ['./agregar-item2.component.scss']
})
export class AgregarItem2Component implements OnInit {

  item: Item = {
    nombre: "",
    descripcion: "",
    precio: 0,
    disp: true
  }

  constructor(public itemService: Item2Service) { }

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
