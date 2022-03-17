import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { IPeopleResult } from "../interface/ipeople";
import { PeopleService } from "../service/people.service";

@Injectable({
  providedIn: 'root'
})

export class PeopleFacade {

  constructor(private peopleService: PeopleService) { }

  private peopleList: IPeopleResult[] = [];

  public setPeopleINfo(peopleInfo: IPeopleResult[]): void {
    if (!peopleInfo.length) {
      return;
    }
    this.peopleList = peopleInfo;
  }

  public getPeopleList(): Observable<IPeopleResult[]> {
    if (Object.keys(this.peopleList).length) {
      return of(this.peopleList);
    }
    return this.peopleService.getPeople();
  }

}
