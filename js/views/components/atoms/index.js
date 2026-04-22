
export const Paragraph = (text = "", className = '') => {
    const element = document.createElement('p')
    element.innerHTML = text
    element.className = className
    return element
}

export const Div = (className = "") => {
    const element = document.createElement("div")
    element.className = className
    return element
}

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

export const Link = (href, className = "", eventName = "link_click") => {
    const element = document.createElement("a")
    element.className = className
    element.href = href
    element.addEventListener("click", () => {
        gtag("event", eventName, {
            link_url: href,
            link_class: className
        })
    })
    return element
}

export const Image = (src, title, className = "") => {
    const element = document.createElement("img")
    element.src = src
    element.className = className
    element.alt = title
    return element
}