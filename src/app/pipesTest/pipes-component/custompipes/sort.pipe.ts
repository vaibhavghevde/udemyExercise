import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any) {
    if (value.length === 0) {
      return value;
    }
    return value.sort();
  }
}
