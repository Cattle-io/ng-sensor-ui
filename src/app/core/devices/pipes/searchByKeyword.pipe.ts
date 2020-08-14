import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchByKeyword'})
export class SearchByKeywordPipe implements PipeTransform {
  transform(values: any[], keyword: string): any[] {
    return values
    .map(value => JSON.stringify(value))
    .filter(value => value.includes(keyword))
    .map(value => JSON.parse(value));
  }
}