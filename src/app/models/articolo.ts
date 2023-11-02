export interface Articolo {
  id: number;
  userId: number;
  title: string;
  published: boolean;
  text: string;
  pokemonId: string;
}

export class NuovoArticoloDto {
  constructor(
    public userId: number,
    public title: string = "",
    public text: string = "",
    public published: boolean = false,
    public pokemonId: string = ""
  ) {

  }
}

export class ModificaArticoloDto {
  constructor(
    public id: number,
    public userId: number,
    public title: string = "",
    public text: string = "",
    public published: boolean = false,
    public pokemonId: string = ""
  ) {

  }
}
