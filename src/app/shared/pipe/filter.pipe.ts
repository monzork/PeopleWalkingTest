// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    const itemsFiltrado: any[] = [];

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    const filterList = (): any => (items).map(e => e.value || e);
    const filterListKeys = filterList().flat()[0];
    searchText = searchText.toLocaleLowerCase();

    filterList().flat().filter((el: any) => {
      Object.keys(filterListKeys).map(e => {
        if (typeof el[e] == 'string' && el[e].toLocaleLowerCase().includes(searchText)) {
          itemsFiltrado.push(el);
        }
      });
    });

    return itemsFiltrado.length ? itemsFiltrado : items;
  }
}
