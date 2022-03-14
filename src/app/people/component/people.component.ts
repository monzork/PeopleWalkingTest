import { Component, OnInit } from '@angular/core';
import { PeopleFacade } from '../facade/peopleFacade';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleFacade: PeopleFacade) { }

  ngOnInit(): void {

    this.peopleFacade.getPeopleList().subscribe(results => {
      this.peopleFacade.setPeopleINfo(results);
      console.log(results);
    });

  }

}
