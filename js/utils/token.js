import { getCookie, setCookie, deleteCookie } from './cookies.js';

// Navn på den cookie hvor token gemmes
const TOKEN_KEY = 'sgtprepper_token';

// Henter token fra cookie
export function getToken() {
  try {
    const token = getCookie(TOKEN_KEY); // Læser cookie
    return token ? JSON.parse(token) : null; // Parser JSON hvis den findes
  } catch {
    return null; // Returnerer null hvis noget går galt
  }
}

// Gemmer token i cookie (som JSON)
export function setToken(token) {
  setCookie(TOKEN_KEY, JSON.stringify(token), 7); // Gemmes i 7 dage
}

// Sletter token fra cookie
export function clearToken() {
  deleteCookie(TOKEN_KEY);
}

// Tjekker om et JWT token er udløbet
export function isTokenExpired(token) {
  // Hvis der ikke er noget token, betragtes det som udløbet
  if (!token) return true;

  try {
    // JWT er opdelt i 3 dele: header.payload.signature
    // Vi henter payload (den midterste del)
    const payload = JSON.parse(atob(token.split('.')[1]));

    // exp er i sekunder → konverteres til millisekunder
    return payload.exp ? payload.exp * 1000 < Date.now() : true;
  } catch {
    // Hvis token ikke kan læses, betragtes det som udløbet
    return true;
  }
}