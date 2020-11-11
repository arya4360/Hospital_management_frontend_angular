import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  public doRegistration(patient){
    return this.http.post('http://localhost:8080/patient/addPatient', patient, {responseType: 'text'as 'json'}) ;
  }
  // tslint:disable-next-line:typedef
  public deletePatient(id: any){
    return this.http.get('http://localhost:8080/remove/' + id);
  }
  // tslint:disable-next-line:typedef
  public login(patientLoginData): Observable<any>{
    const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(patientLoginData.username + ':' + patientLoginData.password)}).set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.post<any>('http://localhost:8080/loginPatient', patientLoginData , {responseType: 'text'as 'json'});
  }
}
