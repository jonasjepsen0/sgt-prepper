import { Button, Div, Heading, Image, Paragraph } from "../components/atoms/index.js"
import { addToCart } from "../../models/cartModel.js"


export const productView = product => {

    const { id, name, imageUrl, teaser, description, price, stock } = product

    const root = document.querySelector("#root")

    const wrapper = Div("flex flex-col gap-3 max-w-2xl")

    const img = Image(`http://localhost:4000${imageUrl}`, name, "w-[300px] h-auto rounded")

    const h1 = Heading(1, name, "font-bold text-2xl")

    const teaserElm = Paragraph(teaser, "italic")

    const priceElm = Paragraph(price, "font-bold text-xl")

    const stockElm = Paragraph(stock)

    const descElm = Paragraph(description)

    const cartBtn = Button("Læg i kurv", "bg-slate-700 text-white px-3 py-2 rounded w-fit")

    const status = Paragraph("", "text-green-600")

    cartBtn.addEventListener("click", async () => {
        try {
            await addToCart(id, 1)
            status.innerText = "Tilføjet til kurv"
            status.className = "text-green-600"
        } catch {
            status.innerText = "Kunne ikke tilføje til kurv"
            status.className = "text-red-500"
        }
    })

    wrapper.append(img, h1, teaserElm, priceElm, stockElm, descElm, cartBtn, status)

    root.append(wrapper)
}
