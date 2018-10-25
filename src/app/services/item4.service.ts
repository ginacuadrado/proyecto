import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Item4Service {

  ItemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument;

  constructor(public afs: AngularFirestore) {
    this.ItemCollection = this.afs.collection('postres', ref => ref.orderBy('nombre','asc'));

    //this.items = this.afs.collection('carnes').valueChanges();
    this.items = this.ItemCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getItems(){
     return this.items;
   }

   addItem(item: Item){
    this.ItemCollection.add(item);
 }

 deleteItem(item: Item){
   this.itemDoc = this.afs.doc(`postres/${item.id}`)
   this.itemDoc.delete();
 }

}
