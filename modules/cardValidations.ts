const cardRegex: RegExp = /^\p{N}(?:\s*\p{N}){15}$/u; 

export function isValidCard(card: string): boolean {
    return cardRegex.test(card);
}