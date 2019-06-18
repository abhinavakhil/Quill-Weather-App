import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sunset'
})
export class SunsetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sec=1551185351;
    let date=new Date(sec*1000);
    let timestr =date.toLocaleTimeString();
    return timestr;
  }

}
