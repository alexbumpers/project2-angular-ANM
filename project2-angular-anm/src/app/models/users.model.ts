export class Users {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;

    
constructor(userId: number, firstname: string, lastname: string, email: string, username: string, password: string){
    this.userId = userId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.username = username;
    this.password = password;
}
}
