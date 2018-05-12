import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horaFormatada'
})
export class HoraFormatadaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toLocaleTimeString() +  " - " + value.toLocaleDateString();
  }
}
