import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StartShipsFacade } from '../facade/starshipsFacade';
import { IStarship } from '../interface/istarship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private starshipFacade: StartShipsFacade, private store: Store<{ search: string }>) {
    this.store.select('search').subscribe(s => {
      this.searchText = s;
    })
  }

  public starshipsList: IStarship[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.starshipFacade.getStarships().subscribe(s => {
      this.starshipFacade.setStarshipInfo(s);
      this.starshipsList = s;
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
