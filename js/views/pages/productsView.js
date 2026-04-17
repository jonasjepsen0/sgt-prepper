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
        

        const priceCol = Div('shrink-0 w-[96px] text-right')
        const priceElm = Paragraph(price, 'mb-2 font-bold')

        const stockCol = Div("text-right")
        const inStockElm = Paragraph(stock, "mb-2 font-bold")
        
        const infoCol = Div("flex-1 min-w-0")
        const header = Heading(3, name, "font-bold truncate")
        const teaserElm = Paragraph(teaser)
        
        infoCol.append(header, teaserElm)
        
        priceCol.append(priceElm)

        stockCol.append(inStockElm)

        link.append(imageCol, infoCol, priceCol, stockCol)

        card.append(link)

        root.append(card)
    })
}