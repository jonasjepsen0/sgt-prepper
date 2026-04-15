// Paragraph Atom.
export const Paragraph = (className = '') => {
    const element = document.createElement('p')
    element.className = className
    return element
}

export const Div = (className = "") => {
    const element = document.createElement("div")
    element.className = className
    return element
}

// Heading Atom
export const Heading = (num, text, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.innerText = text
    return element
}

export const Ul = (className = "") => {
    const element = document.createElement("ul")
    element.className = className
    return element
}

export const Li = (className = "") => {
    const element = document.createElement("li")
    element.className = className
    return element
}