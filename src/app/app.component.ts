import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchParam } from './actions/search.actions';
import { SharedFacade } from './facade/sharedFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headersList: string[] = [];
  lastSearch: string[] = [];
  search: string = '';

  constructor(private sharedFacade: SharedFacade, private store: Store<{ search: string }>) { }

  ngOnInit(): void {
    this.sharedFacade.getListAPIInfo().subscribe(result => {
      this.sharedFacade.setAPIInfo(result);
      this.headersList = Object.keys(result);
    });
  }

  searchFilter(searchQuery: string) {
    this.store.dispatch(searchParam({ searchParam: searchQuery }));
  }

  addSearch() {
    if (!this.search) {
      return;
    }
    if (this.lastSearch.length == 4) {
      this.lastSearch.splice(1, 0, this.search);
      this.lastSearch.length = 4;
    }

    this.lastSearch.push(this.search);
    this.searchFilter(this.search);

  }
}
