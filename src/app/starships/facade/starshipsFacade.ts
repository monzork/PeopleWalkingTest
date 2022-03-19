import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IStarship } from "../interface/istarship";
import { StarshipService } from "../starship.service";

@Injectable({
  providedIn: 'root'
})

export class StartShipsFacade {

  constructor(private starshipService: StarshipService) { }

  private starshipsList: any[] = [];

  public setStarshipInfo(starshipInfo: IStarship[]): void {
    if (!starshipInfo.length) {
      return;
    }
    this.starshipsList = starshipInfo;
  }

  public getStarships(): Observable<IStarship[]> {
    if (Object.keys(this.starshipsList).length) {
      return of(this.starshipsList);
    }
    return this.starshipService.getStarships();
  }

}
