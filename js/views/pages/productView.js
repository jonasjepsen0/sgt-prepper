import { Div, Heading, Image, Paragraph } from "../components/atoms/index.js"


export const productView = product => {

    const { name, imageUrl, teaser, description, price, stock } = product

    const root = document.querySelector("#root")

    const wrapper = Div("flex flex-col gap-3 max-w-2xl")

    const img = Image(`http://localhost:4000${imageUrl}`, name, "w-[300px] h-auto rounded")

    const h1 = Heading(1, name, "font-bold text-2xl")

    const teaserElm = Paragraph(teaser, "italic")

    const priceElm = Paragraph(price, "font-bold text-xl")

    const stockElm = Paragraph(stock)

    const descElm = Paragraph(description)

    wrapper.append(img, h1, teaserElm, priceElm, stockElm, descElm)

    root.append(wrapper)
}
