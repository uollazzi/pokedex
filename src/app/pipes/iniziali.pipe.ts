import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniziali'
})
export class InizialiPipe implements PipeTransform {
  transform(value: string, separatore: string = "."): string {
    // Mario Rossi => M.R.
    const parole = value.split(" ");

    let s = "";
    for (const parola of parole) {
      s += parola[0] + separatore;
    }

    return s;
  }

}
