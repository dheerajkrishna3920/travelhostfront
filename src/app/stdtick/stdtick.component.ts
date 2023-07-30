import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stdtick',
  templateUrl: './stdtick.component.html',
  styleUrls: ['./stdtick.component.css']
})
export class StdtickComponent {

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
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  })

 ngOnInit(): void {



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
  let psw = this.hbookingForm.value.psw


  this.ds.uticketapi(name, this.acno, age, adress, nadm, nac, cn, psw, latest_date)
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


