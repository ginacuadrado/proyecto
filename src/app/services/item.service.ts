import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  ItemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {

    this.ItemCollection = this.afs.collection('carnes', ref => ref.orderBy('nombre','asc'));

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
     this.itemDoc = this.afs.doc(`carnes/${item.id}`)
     this.itemDoc.delete();
   }

}

