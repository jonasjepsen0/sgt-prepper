/**
 * Formaterer et tal til dansk valuta (DKK)
 * @param {number} value - Beløb der skal formateres
 * @returns {string} - Fx "kr. 100,00"
 */
export const price2Dkk = value => {
  // Formaterer tallet til dansk valuta
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',      // Formatter som valuta
    currency: 'DKK',        // Dansk krone
    currencyDisplay: 'symbol' // Viser "kr." i stedet for "DKK"
  }).format(value);
}