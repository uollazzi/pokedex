import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startswith'
})
export class StartsWithPipe implements PipeTransform {

  transform(value: any[], searchTerm: string = ""): any[] {
    if (searchTerm == "")
      return value;

    return value.filter(t => t.title.startsWith(searchTerm));
  }

}
