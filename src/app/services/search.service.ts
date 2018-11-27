/*import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import {ItemService} from '../services/item.service';

@Injectable()
export class SearchService {

  route: string = '';

  constructor(private db: AngularFireDatabase, public itemservice: ItemService) { }

  getItems(start, end): Observable<Item[]>{

    return this.db.list(`/${this.route}`, ref  => {
      ref.limitToFirst(10).orderByKey()
    });

  }
  

}*/