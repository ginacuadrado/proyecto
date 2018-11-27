import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Orden } from '../../models/orden';
import { Item } from '../../models/item';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  ordenes: Orden[] = [];
  carrito: Item[] = [];
  email: string = sessionStorage.useremail;

  constructor(private nav: HeaderServiceService, public ServicioOrden: OrdenService) { }

  ngOnInit() {
    this.nav.show();
    this.ServicioOrden.getData();
    this.ServicioOrden.getItems().subscribe(orders => {
      this.ordenes = orders;
      });
  }

  Reordenar(event, copycart: Item[]){
    this.carrito = copycart;
    sessionStorage.carritoItems = JSON.stringify(this.carrito);
  }
}
