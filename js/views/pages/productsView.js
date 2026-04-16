import { Div, Heading, Link, Image, Paragraph } from "../components/atoms/index.js"


export const productsView = (products, category_slug) => {

    const root = document.querySelector("#root")

    const div = Div()
    const h1 = Heading(1, "Produkter", "font-bold text-2xl")
    div.append(h1)
    root.append(div)

    products.map(product => {
     
        const { name, imageUrl, teaser, price, stock, slug } = product

        const card = Div("p-4 border rounded-lg mb-4 shadow-md")

        const link = Link(`/index.htm#/produkter/${category_slug}/${slug}`, "flex items-center gap-4 min-w-0")

        const imageCol = Div("shrink-0 w-[120px]")
        const img = Image(`http://localhost:4000${imageUrl}`, name, "w-[80px] h-auto rounded")
        img.loading = "lazy"
        imageCol.append(img)
        link.append(imageCol)

        const infoCol = Div("flex-1 min-w-0")
        const header = Heading(3, name, "font-bold truncate")
        const teaserElm = Paragraph()
        teaserElm.innerText = teaser

        infoCol.append(header, teaserElm)
        link.append(infoCol)

        card.append(link)

        root.append(card)
    })
}