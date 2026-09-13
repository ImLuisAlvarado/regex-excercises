const usernameRegex: RegExp = /^(?=[a-zA-Z])[A-Za-z\d_]{5,15}$/;   

export function isValidUsername(username: string): boolean {
    return usernameRegex.test(username);
}