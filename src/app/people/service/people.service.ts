import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatAll, map, mergeMap, toArray } from 'rxjs/operators';
import { IPeople, IPeopleResult, IPlanet } from '../interface/ipeople';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }


  public getPeople(): Observable<IPeopleResult[]> {
    return this.http.get<IPeople>('https://swapi.dev/api/people/').pipe(
      map((data: IPeople) => data.results),
      concatAll(),
      mergeMap((data: IPeopleResult) => {
        return this.getPlanet(data)
      }),
      toArray()
    )
  }

  private getPlanet(data: IPeopleResult): Observable<IPeopleResult> {
    return this.http.get<IPlanet>(data.homeworld).pipe(
      map(e => {
        data.homeworldName = e.name;
        return data;
      })
    )
  }

}
