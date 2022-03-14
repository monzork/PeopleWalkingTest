import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IAPI } from "../shared/interface/iapi";
import { SharedService } from "../shared/service/shared.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SharedFacade {

  constructor(private sharedService: SharedService) { }

  private apiInfo: IAPI = {}

  public getAPIInfo() {
    return this.apiInfo;
  }

  public setAPIInfo(apiInfo: IAPI): void {
    if (!Object.keys(apiInfo).length) {
      return;
    }
    this.apiInfo = apiInfo;
  }

  public getListAPIInfo(): Observable<IAPI> {
    if (Object.keys(this.apiInfo).length) {
      return of(this.apiInfo);
    }
    return this.sharedService.getInfoApi();
  }
}
