import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { ImgStorageService } from '../../../services/img-storage.service';
import { Upload } from '../../../models/upload';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.scss']
})
export class AgregarItemComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  item: Item = {
    nombre: "",
    descripcion: "",
    precio: 0,
    disp: true
  }
  selectedFile=null;

  constructor(private http: HttpClient, public itemService: ItemService, public imgStorageService: ImgStorageService, ) { }


  ngOnInit() {
  }

  onSubmit(){
    if(this.item.nombre != '' && this.item.descripcion != '' && this.item.precio > 0 && this.item.imagen != ''){
      this.itemService.addItem(this.item);
      this.item.nombre = '';
      this.item.descripcion = '';
      this.item.precio = 0;
      this.item.imagen = '';
    }
  }

 onFileSelected(event)
 {
   this.selectedFile= event.target.files[0];
   
 }

 onUpload()
 {
    this.http.post
 }

}
