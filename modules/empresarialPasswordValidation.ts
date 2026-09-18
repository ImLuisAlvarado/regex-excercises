const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-])(?!.*\s)(?!.*[pP][aA][sS][sS][wW][oO][rR][dD])(?!.*1234)[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-]{12,20}$/;

export function isValidEmpresarialPassword(password: string): boolean {
    return passwordRegex.test(password);
}