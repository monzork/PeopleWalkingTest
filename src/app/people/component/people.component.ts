import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PeopleFacade } from '../facade/peopleFacade';
import { IPeopleResult } from '../interface/ipeople';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleFacade: PeopleFacade, private store: Store<{ search: string }>) {
    this.store.select('search').subscribe(e => {
      this.searchText = e;
    });
  }

  peopleGroupByHomeWorld: { [key: string]: IPeopleResult[] } = {};
  searchText: string = '';

  ngOnInit(): void {

    this.peopleFacade.getPeopleList().subscribe((results: IPeopleResult[]) => {
      this.peopleFacade.setPeopleINfo(results);
      this.peopleGroupByHomeWorld = this.groupByHomeWorld(results);
    });
  }

  private groupByHomeWorld(peopleList: IPeopleResult[]): { [key: string]: IPeopleResult[] } {
    const peopleMap: { [key: string]: IPeopleResult[] } = {};
    peopleList.forEach(p => ((peopleMap[p.homeworldName]) = (peopleMap[p.homeworldName] || [])).push(p));
    return peopleMap;
  }

  public getHeightValue(height: number): string {
    if (height > 200) {
      return 'high';
    }
    if (height > 100 && height < 200) {
      return 'normal';
    }
    return 'low';
  }
}
