import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginoriginal',
  templateUrl: './loginoriginal.component.html',
  styleUrls: ['./loginoriginal.component.css']
})
export class LoginoriginalComponent {




  erremsg: any
  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router) { }

  logInForm = this.fb.group({


    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],


  })



  logIn() {

    if (this.logInForm.valid) {


      this.ds.loginapi(
        this.logInForm.value.acno,
        this.logInForm.value.psw).subscribe((result: any) => {
          console.log(result);
          localStorage.setItem('token',JSON.stringify(result.token))
         
          alert(result.message)
          this.rout.navigateByUrl('home')
          localStorage.setItem('currentAcno', result.currentAcno)
          localStorage.setItem('currentUser', result.currentUser)
        },
          result => {
            alert(result.error.message)

          }
        )



    }
    else {
      alert("Invalid Data")
    }


  }

}
