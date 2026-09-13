const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d!@#$%^&*]{8,}$/;

export function isValidPassword(password: string): boolean {
    return passwordRegex.test(password);
}