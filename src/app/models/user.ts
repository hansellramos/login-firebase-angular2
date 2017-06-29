import { Project } from './project';

export class User {

  public email: string;
  public fullname: string;
  public projects: Project[];

  constructor(email?: string, fullname?: string, projects?: Project[]) {
    this.email = email;
    this.fullname = fullname;
    this.projects = projects;
  }
}
