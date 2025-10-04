import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): unknown {
    let sum = 0;
    for(let num of args) {
      sum += num;
    }
    return 'Total for ' + value + ' is ' + sum;
  }

}
