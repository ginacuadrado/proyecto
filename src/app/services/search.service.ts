import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {ItemService} from '../services/item.service';

@Injectable()
export class SearchService {

  constructor(private afs: AngularFirestoreCollection, public itemservice: ItemService) { }


  getcomida() 
  {
   
    

  }

  

}