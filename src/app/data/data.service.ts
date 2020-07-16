import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    
    // https://putsreq.com/
    return this.http.post('https://putsreq.com/L4vCjI5szf4dC8ijBYNs', userSettings);
    
    //return of(userSettings);
  }
}
