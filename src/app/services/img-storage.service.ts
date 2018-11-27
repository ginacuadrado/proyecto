import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Upload}from '../models/upload';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ImgStorageService {

  
  constructor(private af: AngularFireAuth) { }

  
  



}