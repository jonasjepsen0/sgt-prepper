import { Div } from "../components/atoms/index.js"

const productsView = () => {
    const root = document.querySelector("#root")

    const div = Div()
    const h1 = Heading(1, "produkter", "font-bold text-2xl")
    div.append(h1)
    root.append(div)
}