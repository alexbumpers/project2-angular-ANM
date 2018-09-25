export class Users {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
    gender: string;
    orientation: string;
    aboutMe: string;
    location: {
        city: string;
        state: string;
    }
}