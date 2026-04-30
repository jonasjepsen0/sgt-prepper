import { Button, Div, Heading, Paragraph } from "../components/atoms/index.js"
import { removeFromCart } from "../../models/cartModel.js"
import { price2Dkk } from "../../utils/index.js"

export const cartView = items => {
    const root = document.querySelector("#root")

    const wrapper = Div("flex flex-col gap-3 max-w-2xl")
    const h1 = Heading(1, "Kurv", "text-2xl font-bold mb-2")
    wrapper.append(h1)

    if (items.length === 0) {
        const empty = Paragraph("Din kurv er tom")
        wrapper.append(empty)
        root.append(wrapper)
        return
    }

    let total = 0

    items.map(item => {
        const lineTotal = item.quantity * item.product.price
        total += lineTotal

        const card = Div("p-4 border rounded-lg shadow-md flex justify-between items-center gap-4")

        const info = Div("flex-1 min-w-0")
        const name = Heading(3, item.product.name, "font-bold truncate")
        const qty = Paragraph(`Antal: ${item.quantity}`)
        const linePrice = Paragraph(price2Dkk(lineTotal), "font-bold")
        info.append(name, qty, linePrice)

        const removeBtn = Button("Fjern", "bg-red-500 text-white px-3 py-1 rounded shrink-0")
        removeBtn.addEventListener("click", async () => {
            await removeFromCart(item.id)
            window.location.reload()
        })

        card.append(info, removeBtn)
        wrapper.append(card)
    })

    const totalElm = Paragraph(`Total: ${price2Dkk(total)}`, "text-xl font-bold mt-2")
    wrapper.append(totalElm)

    root.append(wrapper)
}
