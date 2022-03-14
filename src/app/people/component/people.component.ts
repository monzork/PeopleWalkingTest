import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.peopleService.getPeople().subscribe(results => {
      console.log(results);
    });

  }

}
