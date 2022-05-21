import randomstring from 'randomstring';

export function passwordGenerator(): string {
    let password = randomstring.generate({
        length: 15,
        charset: 'alphanumeric'
    });
    return password;
}