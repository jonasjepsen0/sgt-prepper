import { getToken, clearToken, isTokenExpired } from "./token.js";

// Sender en HTTP-anmodning til API'et
export const request = async (url = undefined, method = 'GET', body = {}) => {
  // Stop hvis der ikke er sendt en URL med
  if (!url) throw new Error('Missing url');

  // Henter token fra cookie/local auth-løsning
  const token = getToken();

  // Tjekker om token er udløbet, før request sendes
  if (token && isTokenExpired(token.accessToken)) {
    clearToken(); // Fjerner token

    // Sender brugeren til login, hvis de ikke allerede er der
    if (!window.location.pathname.includes('login')) {
      window.location.href = '/index.htm#/login';
    }

    throw new Error('Token expired');
  }

  // Tjekker om requesten skal have body med
  const hasBody = body !== undefined && body !== null && method !== 'GET';

  // Opretter headers til requesten
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'fetch',
    // Tilføjer Authorization-header hvis der findes et access token
    ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
  });

  // Samler indstillingerne til fetch
  const options = {
    method,
    headers,
    ...(hasBody ? { body: JSON.stringify(body) } : {}),
  }

  try {
    // Sender requesten til serveren
    const response = await fetch(url, options);

    // Hvis serveren svarer 401, er brugeren ikke længere godkendt
    if (response.status === 401) {
      clearToken(); // Fjerner token

      // Sender brugeren til login
      if (!window.location.pathname.includes('login')) {
        window.location.href = '/index.htm#/login';
      }

      throw new Error('Unauthorized - please login again');
    }

    // Konverterer svaret fra JSON til JavaScript
    const result = await response.json();

    // Hvis requesten fejlede, laves en fejl med ekstra information
    if (!response.ok) {
      const err = new Error(result?.message || response.statusText);
      err.status = response.status; // Gemmer statuskode på fejlen
      err.body = result; // Gemmer hele response body på fejlen
      throw err;
    }

    // Returnerer data hvis alt gik godt
    return result;
  } catch (error) {
    // Sender login-fejl videre
    if (
      error.message === 'Unauthorized - please login again' ||
      error.message === 'Token expired'
    ) {
      throw error;
    }

    // Sender alle andre fejl videre
    throw error;
  }
}