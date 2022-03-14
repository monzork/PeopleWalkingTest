import { Component, OnInit } from '@angular/core';
import { SharedFacade } from './facade/sharedFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PeopleWalkingTest';

  constructor(private sharedFacade: SharedFacade) { }

  ngOnInit(): void {
    this.sharedFacade.getListAPIInfo().subscribe(result => {
      this.sharedFacade.setAPIInfo(result);
      console.log(result);

      this.sharedFacade.getListAPIInfo().subscribe(result => {
        console.log(result);
      });
    });


  }
}
