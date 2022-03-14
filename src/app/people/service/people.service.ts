import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from '../interface/ipeople';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  public getPeople(): Observable<IPeople> {
    return this.http.get<IPeople>('../../../assets/people.json');
  }
}
