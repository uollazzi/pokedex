export class Profile {
  address: Address = new Address();

  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public gender: string = "",
    public age: number = 0,
    public active: boolean = false
  ) {

  }
}

export class Address {
  constructor(
    public street: string = "Via...",
    public city: string = "",
    public province: string = "",
    public zip: string = "",
  ) {

  }

}
