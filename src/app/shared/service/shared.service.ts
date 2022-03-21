import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPI } from '../interface/iapi';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public getInfoApi(): Observable<IAPI> {
    return this.http.get<IAPI>('https://swapi.dev/api/');
  }
}
