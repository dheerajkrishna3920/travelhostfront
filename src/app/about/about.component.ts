import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  constructor(private rout: Router) { }


  letsgo() {

    this.rout.navigateByUrl('loginoriginal')

  }

}
