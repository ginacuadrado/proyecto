import { Injectable } from '@angular/core';
import { Orden } from '../models/orden';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  OrderCollection: AngularFirestoreCollection<Orden>;
  orders: Observable<Orden[]>;
  OrderDoc: AngularFirestoreDocument<Orden>;

  constructor(public afs: AngularFirestore) { }

  getData(){
    this.OrderCollection = this.afs.collection('ordenes', ref => ref.orderBy('email','asc')); //Esta función indica cuál es la colección y ordena los datos de forma ascendente por nombre

    //Toma el objeto en específico, crea un observable de tipo array para mostrar en pantalla
    this.orders = this.OrderCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Orden;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  //Devuelve el array 
  getItems(){
     return this.orders;
  }

  addOrder(order: Orden)
  {
    this.OrderCollection.add(order);
  }

  deleteOrder(order: Orden){
    this.OrderDoc = this.afs.doc(`ordenes/${order.id}`)
    this.OrderDoc.delete();
  }
}
