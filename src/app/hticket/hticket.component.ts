import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hticket',
  templateUrl: './hticket.component.html',
  styleUrls: ['./hticket.component.css']
})
export class HticketComponent {

  user: any
  date: any
  acno: any
  htickets: any
  destn: any
  type: any

  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router) { }


  ngOnInit(): void {

    this.date = new Date()

    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')
    


    
    this.ds.hreceiptApi(this.acno).subscribe((result: any) => {
      this.htickets = result.message
      console.log(this.htickets);

    })

  }

}
