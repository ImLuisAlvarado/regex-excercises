const rfcRegex: RegExp = /^[A-Z]{4}\d{6}[A-Z]{3}$/;

export function isValidRFC(rfc: string): boolean {
    return rfcRegex.test(rfc);
}