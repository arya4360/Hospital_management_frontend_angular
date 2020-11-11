import { Component, OnInit } from '@angular/core';
import {PatientRegistrationService} from '../patient-registration.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private service: PatientRegistrationService) { }

  ngOnInit(): void {
  }

}
