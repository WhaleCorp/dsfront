export class User {
    Id: number = 0;
    Login: string;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Role: number;

    constructor(
        Login: string,
        FirstName: string,
        LastName: string,
        Email: string,
        PhoneNumber: string,
        Role: number) {
        this.Login = Login;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Role = Role;
    }
}

export class UserPassword {
    Id: number = 0;
    UserId: number = 0;
    Password: string;
    constructor(Password: string) {
        this.Password = Password;
    }
}

export class CreateUserModel {
    User: User;
    UserPassword: UserPassword;
    constructor(User: User, UserPassword: UserPassword) {
        this.User = User;
        this.UserPassword = UserPassword;
    }
}