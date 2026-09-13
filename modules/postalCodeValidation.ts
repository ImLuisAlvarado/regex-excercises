const postalCodeRegex: RegExp = /^[0-9]{5}$/;

export function isValidPostalCode(postalCode: string): boolean {
    return postalCodeRegex.test(postalCode);
}