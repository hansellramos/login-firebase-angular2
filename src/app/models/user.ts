export class User {

  public email: string;
  public fullname: string;

  constructor(email?: string, fullname?: string) {
    this.email = email;
    this.fullname = fullname;
  }
}
