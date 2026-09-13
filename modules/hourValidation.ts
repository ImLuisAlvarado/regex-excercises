const hourRegex: RegExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

export function isValidHour(hour: string): boolean {
    return hourRegex.test(hour);
}