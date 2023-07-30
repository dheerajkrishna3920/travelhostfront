import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookingComponent } from './booking/booking.component';
import { HotelticketComponent } from './hotelticket/hotelticket.component';
import { ProfileComponent } from './profile/profile.component';
import { HticketComponent } from './hticket/hticket.component';
import { LoginoriginalComponent } from './loginoriginal/loginoriginal.component';
import { AboutComponent } from './about/about.component';
import { HotelcatComponent } from './hotelcat/hotelcat.component';
import { UltraticketComponent } from './ultraticket/ultraticket.component';
import { StdtickComponent } from './stdtick/stdtick.component';
const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'loginoriginal',component: LoginoriginalComponent},
  {path:'about',component: AboutComponent},
  {path:'register',component: RegisterComponent},
  {path:'home',component: HomeComponent},
  {path:'ticket',component: TicketbookingComponent},
  {path:'ticketconf',component: TicketComponent},
  {path:'booking',component: BookingComponent},
  {path:'hotelform',component: HotelticketComponent},
  {path:'profile',component:  ProfileComponent},
  {path:'hticket',component:  HticketComponent},
  {path:'hotelcat',component:  HotelcatComponent},
  {path:'ultratick',component:  UltraticketComponent},
  {path:'stdtick',component:  StdtickComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
