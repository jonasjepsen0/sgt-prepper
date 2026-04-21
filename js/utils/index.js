// Utility fil med forskellige hjælpefunktioner 

/**
 * Funktion til at slette indhold i root element
 */
export const clearMain = () => {
    const app = document.querySelector('#root')
    app.innerHTML = ''
}

export const price2Dkk = value => {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    currencyDisplay: 'code'
  }).format(value);
} 

export const stockStatus = function inStock(stock) {
  return stock >= 1 
    ? `<span class="text-green-500">In stock</span>` 
    : `<span class="text-red-500">Out of stock</span>`;
}