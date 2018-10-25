import { Component, OnInit } from '@angular/core';
import { Item3Service } from '../../services/item3.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-agregar-item3',
  templateUrl: './agregar-item3.component.html',
  styleUrls: ['./agregar-item3.component.scss']
})
export class AgregarItem3Component implements OnInit {

  item: Item = {
    nombre: "",
    descripcion: "",
    precio: 0,
    disp: true
  }

  constructor(public itemService: Item3Service) { }

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
