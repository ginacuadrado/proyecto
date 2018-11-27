import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  aperitivos: Item[] = [];
  carnes: Item[] = [];
  bebidas: Item[] = [];
  postres: Item[] = [];
  comida: Item[]= [];

  constructor(public itemservice: ItemService,public fire: AngularFirestore, afc: AngularFirestoreCollection) 
  { }

  ngOnInit() 
  {
    this.itemservice.setRoute('bebidas');
    this.itemservice.getData();
    this.itemservice.getItems().subscribe(items => {this.postres=items});
    this.itemservice.setRoute('carnes');
    this.itemservice.getData();
    this.itemservice.getItems().subscribe(items => {this.carnes=items});
    
  }

  getComidas()
  {
    
          return this.fire.collection('aperitivos', ref => ref.where('disp','==',true)).snapshotChanges();
  }

  aperitivoson()
  {
    
    //this.comida= this.fire.collection('aperitivos', ref => ref.where('disp','==',true)).snapshotChanges();
      
  }
}
