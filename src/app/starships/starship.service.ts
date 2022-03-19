import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStarship, IStarshipResult } from './interface/istarship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  public getStarships(): Observable<IStarship[]> {
    return this.http.get<IStarshipResult>('https://swapi.dev/api/starships').pipe(
      map(is => is.results)
    );
  }
}
