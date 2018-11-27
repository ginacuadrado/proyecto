import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, first } from 'rxjs/operators';
import { HeaderServiceService } from '../header/header-service.service';
import {ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private route: Router, private toastr: ToastrService, private afs: AngularFirestore, public nav: HeaderServiceService) { }

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

    if(this.myForm.invalid)
    {
        this.toastr.error('No podemos enviar un formulario inválido. Intente de nuevo', 'Error en el formulario')
    }
  
    else if(this.myForm.valid)
    {

      this.toastr.success('Su mensaje fue enviado exitosamente', 'Formulario Enviado');
      this.route.navigate(['/contacto']);
      try {
        await this.afs.collection('contacto').add(formValue);
        this.success = true;
        console.log(this.success)
        ;
      } catch(err) {
        console.error(err)
      }

    }
     

  }

  preloadData() {
    this.afs.doc('/contacto/l7F25jNh1PXFNiNxbX65').valueChanges().pipe(
      tap(data => {
        this.myForm.patchValue(data)
      })
    )
    .subscribe()
  }


}