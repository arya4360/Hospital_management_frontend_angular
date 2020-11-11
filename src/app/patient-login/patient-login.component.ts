import { Component, OnInit } from '@angular/core';
import {PatientLoginData} from '../patientLoginData';
import {PatientRegistrationService} from '../patient-registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  public patientLoginData = new PatientLoginData('', '');
  message: any;

  constructor(private service: PatientRegistrationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public loginPatient(value: any) {
    const res = this.service.login(this.patientLoginData);
    this.router.navigate(['/patient-dashboard']);
    res.subscribe(data => this.message = data,
      error => console.log('Exception occoured'));
    console.log(value);
  }
}
