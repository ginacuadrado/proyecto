import { Component, OnInit } from '@angular/core';
import { Item4Service } from '../../services/item4.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-agregar-item4',
  templateUrl: './agregar-item4.component.html',
  styleUrls: ['./agregar-item4.component.scss']
})
export class AgregarItem4Component implements OnInit {

  item: Item = {
    nombre: "",
    descripcion: "",
    precio: 0,
    disp: true
  }

  constructor(public itemService: Item4Service) { }

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