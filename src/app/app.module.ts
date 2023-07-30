import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}  from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { TicketComponent } from './ticket/ticket.component';
import { DatePipe } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { HotelticketComponent } from './hotelticket/hotelticket.component';
import { ProfileComponent } from './profile/profile.component';
import { HticketComponent } from './hticket/hticket.component';
import { LoginoriginalComponent } from './loginoriginal/loginoriginal.component';
import { AboutComponent } from './about/about.component';
import { HotelcatComponent } from './hotelcat/hotelcat.component';
import { UltraticketComponent } from './ultraticket/ultraticket.component';
import { StdtickComponent } from './stdtick/stdtick.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TicketbookingComponent,
    TicketComponent,
    BookingComponent,
    HotelticketComponent,
    ProfileComponent,
    HticketComponent,
    LoginoriginalComponent,
    AboutComponent,
    HotelcatComponent,
    UltraticketComponent,
    StdtickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
