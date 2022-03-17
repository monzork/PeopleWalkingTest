import { Component, OnInit } from '@angular/core';
import { PeopleFacade } from '../facade/peopleFacade';
import { IPeopleResult } from '../interface/ipeople';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleFacade: PeopleFacade) { }

  peopleGroupByHomeWorld: { [key: string]: IPeopleResult[] } = {}

  ngOnInit(): void {

    this.peopleFacade.getPeopleList().subscribe((results: IPeopleResult[]) => {
      this.peopleFacade.setPeopleINfo(results);
      this.peopleGroupByHomeWorld = this.groupByHomeWorld(results);
    });
  }

  private groupByHomeWorld(peopleList: IPeopleResult[]): any {
    const peopleMap: { [key: string]: IPeopleResult[] } = {};
    peopleList.forEach(p => ((peopleMap[p.homeworldName]) = (peopleMap[p.homeworldName] || [])).push(p));
    return peopleMap;
  }


  public getHeightValue(height: number): string {
    let heightValue = ''
    if (height > 200) {
      heightValue = 'high';
    } else if (height > 100 && height < 200) {
      heightValue = 'normal';
    } else {
      heightValue = 'low';
    }
    return heightValue;
  }
}
