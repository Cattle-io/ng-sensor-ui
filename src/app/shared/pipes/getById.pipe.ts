
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getById'})
export class GetByIdPipe implements PipeTransform {
  transform(values: any[], Id: string): any[] {
    return values.filter(value => value.id && value.id === Id)[0];
  }
}
