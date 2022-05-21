import randomstring from 'randomstring';
import { passwordGenerator } from './passwordGenerator';
import { generateDate } from './dateMaker';

export class User {
    userId: string;
    username: string;
    password: string;
    createdDate: string;

    constructor(userId: string, username: string, password: string, createdDate: string) {
        this.userId = randomstring.generate({
                length: 4,
                charset: 'alphanumeric'
            });
        this.username = username;
        this.password = passwordGenerator();
        this.createdDate = generateDate();
    }

    prettyPrint() {
        console.log(`ID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}`)
    }
}

// Add a method called prettyPrint which prints the user information in separate lines of the console.
// Export the class as default