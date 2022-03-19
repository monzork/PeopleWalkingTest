import { Component, OnInit } from '@angular/core';
import { StartShipsFacade } from '../facade/starshipsFacade';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private starshipFacade: StartShipsFacade) { }

  ngOnInit(): void {
    this.starshipFacade.getStarships().subscribe(s => {
      this.starshipFacade.setStarshipInfo(s);
      s.forEach(e => {
        e.starshipName = this.getLenghtText(e.length);
      });
    });
  }

  private getLenghtText(starshipLenght: number): string {

    if (starshipLenght > 1000) {
      return 'Large';
    }
    if (starshipLenght > 100 || starshipLenght < 1000) {
      return 'Normal';
    }
    return 'Small';
  }

}
