import { price2Dkk } from "../../utils/index.js"
import { Heading, Paragraph } from "../components/atoms/index.js"

export const productView = (product) => {
    const { name, price } = product
    const root = document.querySelector("#root")

    const h1 = Heading(1, name, "font-bold text-2xl")
    const p = Paragraph()
    p.textContent = price

    root.append(h1, p)
}