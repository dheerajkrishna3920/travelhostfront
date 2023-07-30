import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

 
  user: any
  acno: any
  constructor(private rout: Router) { }
  ngOnInit(): void {



    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

  }
  logOut() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.rout.navigateByUrl('')
    alert('bye...')
  }




  


}
