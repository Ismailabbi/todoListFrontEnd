import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idGenerator',
})
export class IdGeneratorPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').join('') + Math.floor(Math.random() * 100);
  }
}
