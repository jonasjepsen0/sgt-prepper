// Opretter en cookie med navn, værdi og antal dage den skal være gyldig
export const setCookie = (name, value, days = 7) => {
    const expires = new Date(); // Opretter en dato
    // Sætter udløbsdato til nu + antal dage
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    // Gemmer cookie i browseren
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

// Henter værdien af en cookie ud fra dens navn
export const getCookie = name => {
    const nameEQ = name + "="; // Det vi leder efter (fx "token=")
    const cookies = document.cookie.split(';'); // Splitter alle cookies

    // Gennemgår alle cookies
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim(); // Fjerner mellemrum

        // Tjekker om cookien starter med det rigtige navn
        if (cookie.indexOf(nameEQ) === 0) {
            // Returnerer værdien af cookien
            return cookie.substring(nameEQ.length);
        }
    }

    // Returnerer null hvis cookien ikke findes
    return null;
}

// Sletter en cookie ved at sætte udløbsdato til en dato i fortiden
export const deleteCookie = name => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}