import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: any
  acno: any
  destn:any
  constructor(private rout: Router) { }
  ngOnInit(): void {


  


    this.user = localStorage.getItem('currentUser')
    this.acno = localStorage.getItem('currentAcno')

  }
  logOut() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    this.rout.navigateByUrl('')
    alert('Comeback Soon')
  }

  routing(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Trivandrum')
    localStorage.setItem('route','Trivandrum')
  }
  routing1(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Kollam')
    localStorage.setItem('route','Kollam')

  }
  routing2(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Alappuzha')
    localStorage.setItem('route','Alappuzha')

  }
  routing3(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Pathanamthitta')
    localStorage.setItem('route','Pathanamthitta')

  }
  routing4(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Kottayam')
    localStorage.setItem('route','Kottyam')

  }
  routing5(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Idukki')
    localStorage.setItem('route','idukki')

  }
  routing6(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Ernakulam')
    localStorage.setItem('route','Ernakulam')

  }
  routing7(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Thrissur')
    localStorage.setItem('route','Thrissur')

  }
  routing8(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Palakkad')
    localStorage.setItem('route','Palakkad')

  }
  routing9(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Malappuram')
    localStorage.setItem('route','Malappuram')

  }
  routing10(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Kozhikode')
    localStorage.setItem('route','Kozhikode')

  }
  routing11(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Wayanad')
    localStorage.setItem('route','wayanad')

  }
  routing12(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Kannur')
    localStorage.setItem('route','Kannur')

  }
  routing13(){
    this.rout.navigateByUrl('booking')
    localStorage.setItem('destn','Kasargod')
    localStorage.setItem('route','Kasargod')

  }


}
