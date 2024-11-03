import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCasePipe',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
