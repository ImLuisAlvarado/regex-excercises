const DecimalRegex: RegExp = /^[0-9]+\.[0-9]+$/;

export function isValidDecimal(Decimal: string): boolean {
    return DecimalRegex.test(Decimal);
}