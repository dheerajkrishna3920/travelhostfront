import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hotelticket',
  templateUrl: './hotelticket.component.html',
  styleUrls: ['./hotelticket.component.css']
})
export class HotelticketComponent {




  date: any
  acno: any
  user: any

  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router, private datepipe: DatePipe) { }

  hbookingForm = this.fb.group({

    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    adress: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    nadm: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    nac: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    cn: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cdstn: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    type: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  })

  ngOnInit(): void {


    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

  }





  hconfbook() {



    this.date = new Date()
    let latest_date = this.datepipe.transform(this.date, 'short')
    let name = this.hbookingForm.value.name
    let age = this.hbookingForm.value.age
    let adress = this.hbookingForm.value.adress
    let nadm = this.hbookingForm.value.nadm
    let nac = this.hbookingForm.value.nac
    let cn = this.hbookingForm.value.cn
    let cdstn = this.hbookingForm.value.cdstn
    let type = this.hbookingForm.value.type
    let psw = this.hbookingForm.value.psw


    this.ds.hticketapi(name, this.acno, age, adress, nadm, nac, cn,cdstn,type, psw, latest_date)
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