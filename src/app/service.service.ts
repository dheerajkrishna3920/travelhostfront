import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


type:any

  constructor(private http: HttpClient) { }




  ngOnInit(): void {

 this.type= localStorage.getItem('type')

  }
 

  registerapi(acno: any, uname: any, psw: any) {

    const body = {
      acno: acno,
      uname: uname,
      psw: psw
    }
    return this.http.post('http://localhost:3000/register', body)

  }

  loginapi(acno: any, psw: any) {

    const body = {
      acno: acno,
      psw: psw
    }
    return this.http.post('http://localhost:3000/login', body)
  }

  ticketapi(name: any, acno: any, age: any, adress: any, npass: any, cn: any, cdstn:any, psw: any, date: any) {
    const body = {
      name: name,
      acno: acno,
      age: age,
      adress: adress,
      npass: npass,
      cn: cn,
      cdstn:cdstn,
      psw: psw,
      date: date

    }
    return this.http.post('http://localhost:3000/ticket', body)
  }


  hticketapi(name: any, acno: any, age: any, adress: any, nadm: any, nac:any, cn: any,cdstn:any,type:any, psw: any, date: any) {
    const body = {
      name: name,
      acno: acno,
      age: age,
      adress: adress,
      nadm: nadm,
      nac:nac,
      cn: cn,
      cdstn:cdstn,
      type:type,
      psw: psw,
      date: date

    }
    return this.http.post('http://localhost:3000/hticket', body)
  }
  
  uticketapi(name: any, acno: any, age: any, adress: any, nadm: any, nac:any, cn: any, psw: any, date: any) {
    const body = {
      name: name,
      acno: acno,
      age: age,
      adress: adress,
      nadm: nadm,
      nac:nac,
      cn: cn,
      psw: psw,
      date: date

    }
    return this.http.post('http://localhost:3000/uticket', body)
  }




  receiptApi(acno: any) {
    return this.http.get('http://localhost:3000/receipt/' + acno)
  }


  hreceiptApi(acno: any) {

    return this.http.get('http://localhost:3000/hreceipt/' + acno)
  }

  deleteApi(acno: any) {
    return this.http.get('http://localhost:3000/deleteac/' + acno)
  }



}
  

