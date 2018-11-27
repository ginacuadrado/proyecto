import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HeaderServiceService } from '../header/header-service.service';
import { Item } from '../../models/item';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Orden } from '../../models/orden';
import { OrdenService } from '../../services/orden.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalModule } from 'ngx-bootstrap';
import { throwIfEmpty } from 'rxjs/operators';

declare let paypal: any;

@Component({
  selector: 'app-ventanapago',
  templateUrl: './ventanapago.component.html',
  styleUrls: ['./ventanapago.component.scss']
})
export class VentanapagoComponent implements OnInit, AfterViewChecked 
{
  addScript: boolean = false;
  paypalLoad: boolean = false; 
  FinalAmount: number = 1;
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AYI7tbIPSin1phUHLX39ZjQ2WLie8wE7hr3o8tm2LdPsmSvmoyVE1rDsPDOjOEfzJXm-jqhZ1NdoyLXx',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: {total: this.FinalAmount, currency: "USD"}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.enviarorden();
      })
    }
  };

  ngAfterViewChecked(){
    if(!this.addScript){
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  pago: string = "select";
  pago2: boolean = false;
  carrito: Item[] = [];
  subtotal: number = 0;
  iva: number = 0;
  envio: number = 0;
  total: number = 0;
  i: number = 0;
  address: string;
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

  ngOnInit() {
    this.nav.show();
    this.order.getData();

    if(sessionStorage["carritoItems"]){
      this.carrito = JSON.parse(sessionStorage.getItem('carritoItems'));

    //Suma de los precios
      for(this.i = 0; this.i<this.carrito.length; this.i++)
      {
        this.subtotal = this.subtotal + this.carrito[this.i].precio;
      }

      this.iva = this.subtotal * 0.16;
      this.envio = this.subtotal * 0.04;
      this.total = this.subtotal + this.iva + this.envio;
      this.orden.monto = this.total;
      this.orden.orden = this.carrito;
      this.orden.email = this.email;
      this.FinalAmount = this.total;
    }
  }
  
  altSelected(event){
    this.pago = "alt";
  }

  returnSelection(event){
    window.location.reload();
  }

  submitAlt(){
    this.order.addOrder(this.orden);
    sessionStorage.removeItem("carritoItems");
    window.location.replace('home');
    alert("La transacción ha sido exitosa.")
  }

  setpago()
  {
    this.pago2 = true;
    this.orden.direccion = this.address;
    console.log(this.orden.direccion)
  }

  enviarorden()
  {
    this.order.addOrder(this.orden);
    sessionStorage.removeItem("carritoItems");
  }
  

  

}
