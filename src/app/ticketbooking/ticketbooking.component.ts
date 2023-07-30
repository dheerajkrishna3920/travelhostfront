import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent {



  user: any
  acno: any
  date: any
  name: any
  age: any
  adress: any
  npass: any
  bp: any
  tb: any
  cn: any
  psw: any
  errormsg: any

  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router, private datepipe: DatePipe) { }




  bookingForm = this.fb.group({

    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    adress: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    npass: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cdstn: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  })


  ngOnInit(): void {



    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

  }






  confbook() {



    this.date = new Date()
    let latest_date = this.datepipe.transform(this.date, 'short')
    let name = this.bookingForm.value.name
    let age = this.bookingForm.value.age
    let adress = this.bookingForm.value.adress
    let npass = this.bookingForm.value.npass
    let cn = this.bookingForm.value.cn
    let cdstn=this.bookingForm.value.cdstn
    let psw = this.bookingForm.value.psw


      this.ds.ticketapi(name, this.acno, age, adress, npass, cn,cdstn, psw, latest_date)
      .subscribe((result: any) => {
        console.log(result.message);
        alert(result.message)
        this.rout.navigateByUrl('profile')
      },
        result => {
         alert(result.error.message)

        })
    

    
      
  
    


  }











}









