const curpRegex: RegExp = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{1}\d{1}$/;

export function isValidCURP(curp: string): boolean {
    return curpRegex.test(curp);
}