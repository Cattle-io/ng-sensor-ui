import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterRemoveItemById'})
export class FilterRemoveItemByIdPipe implements PipeTransform {
  transform(values: any[], id: string|number): any[] {
    return values && values.length > 0 ? values.filter(value =>  !((id + '') === (value.id + ''))) : [];
  }
}
