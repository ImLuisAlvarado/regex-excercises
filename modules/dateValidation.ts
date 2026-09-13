//DD/MM/YYYY
const dateRegex: RegExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

export function isValidDate(date: string): boolean {
    return dateRegex.test(date);
}