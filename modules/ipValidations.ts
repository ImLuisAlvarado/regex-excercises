const ipOctet: string = '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
const ipv4Regex: RegExp = new RegExp(`^(${ipOctet}\\.){3}${ipOctet}$`);

export function isValidIPv4(ip: string): boolean {
    return ipv4Regex.test(ip);
}