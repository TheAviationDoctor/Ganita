/** Remove Latin combining accents only. Preserve Devanagari vowel signs. */
export const normalizeSearch = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[\u200b-\u200d\ufeff]/g, '').toLocaleLowerCase();
