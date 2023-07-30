import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelcat',
  templateUrl: './hotelcat.component.html',
  styleUrls: ['./hotelcat.component.css']
})
export class HotelcatComponent {



  constructor(private rout: Router) { }

  UltraPremium() {
    localStorage.setItem('type', 'Ultrapremium')
    this.rout.navigateByUrl('/hotelform')

  }
  premium() {
    localStorage.setItem('type', 'Premium')
    this.rout.navigateByUrl('/hotelform')

  }
standard() {
    localStorage.setItem('type', 'Standard')
    this.rout.navigateByUrl('/hotelform')

  }


}
