import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sencon'
})
export class SenconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     let sec= 1551143947;
     let date=new Date(sec*1000);
     let timestr=date.toLocaleTimeString();
     return (timestr);
  }

}
