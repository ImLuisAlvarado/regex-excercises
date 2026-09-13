const nameRegex: RegExp = /^[\p{L}\s]+$/u;   

export function isValidName(name: string): boolean {
    return nameRegex.test(name);
}