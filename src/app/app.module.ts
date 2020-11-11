import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import {PatientRegistrationService} from './patient-registration.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShowPatientsComponent } from './show-patients/show-patients.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PatientDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

