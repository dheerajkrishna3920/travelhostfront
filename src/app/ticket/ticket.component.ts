import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {


user:any
acno:any
tickets:any
date:any
destn:any
type:any
route:any

  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router) { }

  
  ngOnInit(): void {

    this.date = new Date()

    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

    this.destn = localStorage.getItem('destn')
    this.type = localStorage.getItem('type')
    this.route = localStorage.getItem('route')

    this.ds.receiptApi(this.acno).subscribe((result:any)=>{
      this.tickets=result.message
      console.log(this.tickets);
      
    })

  }




 



}
