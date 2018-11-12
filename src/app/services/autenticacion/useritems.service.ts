/*import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuarios} from '../../models/usuarios';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class UserItemsService
{

  user: Observable< Usuarios | null>;
  userId: string;
  userName: string;
  isadmin: boolean;
  ItemCollection: AngularFirestoreCollection<Usuarios>;
  items: Observable<Usuarios[]>;
  itemDoc: AngularFirestoreDocument<Usuarios>;
  id: string;
  name: string;
  route: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth,public afs: AngularFirestore)
  {
   
  }

  //Defino la ruta USUARIOS para el documento  
  setRoute(nombre: string)
  {
    this.route = nombre;
  }

  //Captar Data del documento
   getData(){
    this.ItemCollection = this.afs.collection(`${this.route}`, ref => ref.orderBy('nombre','asc'));

   
    this.items = this.ItemCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuarios;
        data.useruid = a.payload.doc.id;
        return data;
      });
    }));
   }

   //Captar array de items
   getItems(){
     return this.items;
   }

  //Agregar Item a la colección
   addItem(user: Usuarios){
      this.ItemCollection.add(user);
   }

  //Eliminar Item de la colección
   deleteItem(user: Usuarios)
   {
     this.itemDoc = this.afs.doc(`${this.route}/${user.useruid}`)
     this.itemDoc.delete();
   }




}
*/
