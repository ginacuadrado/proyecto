import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

//Servicio para extraer, agregar, eliminar o modificar data del menú

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  ItemCollection: AngularFirestoreCollection<Item>; //Copia la colección de datos de Items
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  route: string;

  constructor(public afs: AngularFirestore) {

    
    }

   setRoute(name: string){
      this.route = name;
   }

   getData(){
    this.ItemCollection = this.afs.collection(`${this.route}`, ref => ref.orderBy('nombre','asc')); //Esta función indica cuál es la colección y ordena los datos de forma ascendente por nombre

    //Toma el objeto en específico, crea un observable de tipo array para mostrar en pantalla
    this.items = this.ItemCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   //Devuelve el array 
   getItems(){
     return this.items;
   }

   //Agrega el item a firebase
   addItem(item: Item){
      this.ItemCollection.add(item);
   }

  //Eliminar el item  a firebase
   deleteItem(item: Item){
     this.itemDoc = this.afs.doc(`${this.route}/${item.id}`)
     this.itemDoc.delete();
   }

}

