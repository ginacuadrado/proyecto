import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/autenticacion/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeaderServiceService } from '../header/header-service.service'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  newpassword:string;
  oldpassword:string;
  user: any;

  constructor(afAuth: AngularFireAuth, public nav: HeaderServiceService, authservice: AuthService)
   {
    
   
  
  }

    

  ngOnInit() {
    this.nav.show();
  

  }


}
