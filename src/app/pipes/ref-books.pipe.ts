import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refBooks'
})
export class RefBooksPipe implements PipeTransform {

  transform(value: string): string {

    let result:string;

    result = "Ref-" + value;

    return result;
  }

}