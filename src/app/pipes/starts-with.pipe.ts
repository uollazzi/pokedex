import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

  transform(value: Pokemon[], searchTerm: string = ""): Pokemon[] {
    if (!searchTerm) return value;

    return value.filter(p => p.name.startsWith(searchTerm));
  }


}
