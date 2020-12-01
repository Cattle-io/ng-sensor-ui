
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getByDeviceId'})
export class GetByDeviceIdPipe implements PipeTransform {
  transform(values: any[], deviceId: string): any[] {
    return values.filter(value => value.device_id && value.device_id === deviceId);
  }
}
