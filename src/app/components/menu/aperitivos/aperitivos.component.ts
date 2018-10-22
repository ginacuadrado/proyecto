import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-aperitivos',
  templateUrl: './aperitivos.component.html',
  styleUrls: ['./aperitivos.component.scss']
})

export class AperitivosComponent implements OnInit
{


  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(AperitivosComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }

  ngOnInit() 
  {
  }

}
