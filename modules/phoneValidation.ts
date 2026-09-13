const phoneRegex: RegExp = /^[0-9]{10}$/;

export function isValidPhoneNumber(phoneNumber: string): boolean {
    return phoneRegex.test(phoneNumber);
}