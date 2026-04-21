// Tømmer indholdet af et HTML-element baseret på id
export const clearElement = id => {
    // Finder elementet i DOM'en via id
    const element = document.querySelector(`#${id}`)

    // Tjekker om elementet findes
    if (element) {
        // Fjerner alt indhold inde i elementet
        element.innerHTML = ''
    }
}