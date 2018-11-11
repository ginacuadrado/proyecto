import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../../services/autenticacion/auth.service';

//Servicio para extraer, agregar, eliminar o modificar data del menú

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  UserCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  route: string;
  id: string;

  constructor(public afs: AngularFirestore) {

    
    }

   

   getData(){
    this.UserCollection = this.afs.collection(`${AuthService.user.uid}`, ref => ref.orderBy('nombre','asc'));

    //this.items = this.afs.collection('carnes').valueChanges();
    this.users = this.UserCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getItems(){
     return this.users;
   }

 

}

