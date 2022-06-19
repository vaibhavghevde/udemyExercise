import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], searchText: string): any {
    if (value.length == 0) {
      return value;
    }
    const arr = [];
    for (const i of value) {
      if (i.toLowerCase().includes(searchText.toLowerCase())) {
        arr.push(i);
      }
    }
    return arr;
  }
}
