import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Item } from '../../models/item';
import { Orden } from '../../models/orden';
import { OrdenService } from '../../services/orden.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-ventanapago',
  templateUrl: './ventanapago.component.html',
  styleUrls: ['./ventanapago.component.scss']
})
export class VentanapagoComponent implements OnInit 
{
  
  address: string;
  carrito: Item[] = [];
  pago: boolean=false;
  subtotal: number = 0;
  iva: number = 0;
  envio: number = 0;
  total: number = 0;
  i: number = 0;
  index: number = 0;
  myForm: FormGroup;
  email: string = sessionStorage.useremail;
  orden: Orden = {
    email: '',
    orden: [],
    monto: 0,
    direccion:'',
  };
  
  
  constructor(private nav: HeaderServiceService, private fb: FormBuilder, private afs: AngularFirestore, public order: OrdenService) { }

  ngOnInit() 
  {
    this.nav.show();
    this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));
    this.order.getData();
    this.myForm = this.fb.group
    ({
         address:['',Validators.required], 
     })

  //Suma de los precios
    for(this.i = 0; this.i<this.carrito.length; this.i++)
    {
      this.subtotal = this.subtotal + this.carrito[this.i].precio;
    }

    this.iva = this.subtotal * 0.16;
    this.envio = this.subtotal * 0.04;
    this.total = this.subtotal + this.iva + this.envio;

    this.orden.email = this.email;
    this.orden.orden = this.carrito;
    this.orden.monto = this.total;
    this.orden.direccion= this.address;

  }

  setpago()
  {
    this.pago=true;
    this.orden.direccion= this.address;
    console.log(this.orden.direccion)
  }

  enviarorden(event)
  {
    this.order.addOrder(this.orden);
    sessionStorage.removeItem("carritoItems");
  }
  

  

}
