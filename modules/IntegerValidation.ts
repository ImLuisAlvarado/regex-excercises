const IntegerRegex: RegExp = /^[0-9-]+$/;

export function isValidInteger(Integer: string): boolean {
    return IntegerRegex.test(Integer);
}