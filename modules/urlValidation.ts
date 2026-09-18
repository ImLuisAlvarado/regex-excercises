const urlRegex: RegExp = /^https?:\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?::\d+)?(?:\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;

export function isValidURL(url: string): boolean {
    return urlRegex.test(url);
}