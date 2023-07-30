import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  user: any
  acno: any
  constructor(private rout: Router, private ds: ServiceService) { }
  ngOnInit(): void {

   

      if (!localStorage.getItem("currentAcno")) {
        this,this.rout.navigateByUrl('')
        alert("please login first")
      }
    

    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

  }

  logOut() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.rout.navigateByUrl('')
    alert('Comeback Soon')
  }

  deleteAc() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.ds.deleteApi(this.acno).subscribe((result: any) => {
      alert(result.message)
      this.rout.navigateByUrl('')
    },
      result => {
        alert(result.error.message)
      }
    )


  }
}
