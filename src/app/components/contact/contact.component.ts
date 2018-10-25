import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';
import { HeaderServiceService } from '../header/header-service.service';

@Component({

  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']

})

@NgModule({

  imports: [ FormsModule ]

})

export class ContactComponent implements OnInit{

  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore, public nav: HeaderServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre:['',Validators.required],
      email: ['', Validators.required],
      motivo:[''],
      mensaje: ['', Validators.required]
    })

    this.preloadData();
    this.nav.show();
  }



  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('contacto').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
  }

  preloadData() {
    this.afs.doc('/contacto/WJlBJgmDNgtjGD1DfFcU').valueChanges().pipe(
      tap(data => {
        this.myForm.patchValue(data)
      })
    )
    .subscribe()
  }


}