import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

else:any
  pswCheck: any = false

  constructor(private ds: ServiceService, private fb: FormBuilder, private rout: Router) { }

  registerForm = this.fb.group({


    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]


  })


  register() {

    if (this.registerForm.valid) {

      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {

        this.ds.registerapi(
          this.registerForm.value.acno,
          this.registerForm.value.uname,
          this.registerForm.value.psw).subscribe((result: any) => {
            alert(result.message)
            this.rout.navigateByUrl('')
           
          },
            result => {
            alert(result.error.message)
              this.rout.navigateByUrl('')
        
            }
            )



      }


      else {
        this.pswCheck = true
      }
    }

    else {
      alert(this.else)
    }
  }

}



