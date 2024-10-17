import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/api'; // Backend API URL

  constructor(private http: HttpClient) { }

  addClient(clientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, clientData);
  }

  addMeeting(meetingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/meetings`, meetingData);
  }
}
