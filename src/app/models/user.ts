import { Project } from './project';

export class User {

  public id: string;
  public email: string;
  public fullname: string;
  public projects: Project[];

  constructor(id: string, email?: string, fullname?: string, projects?: Project[]) {
    this.id = id;
    this.email = email;
    this.fullname = fullname;
    this.projects = projects;
  }
}
