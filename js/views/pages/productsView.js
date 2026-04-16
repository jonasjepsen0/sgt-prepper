import { Div, Heading } from "../components/atoms/index.js"


export const productsView = products => {

    const root = document.querySelector("#root")

    const div = Div()
    const h1 = Heading(1, "Produkter", "font-bold text-2xl")
    div.append(h1)
    root.append(div)

    products.map(product => {
     
        const { name, imageUrl, teaser, price, stock, slug } = product

        const card = Div("p-4 border rounded-lg mb-4 shadow-md")

        const link = Link(`/index.htm#/produkter/`)

        card.innerText = name

        root.append(card)
    })
}