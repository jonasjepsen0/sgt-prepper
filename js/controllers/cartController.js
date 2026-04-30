import { getCart } from "../models/cartModel.js"
import { cartView } from "../views/pages/cartView.js"

export const cartController = async () => {
    const data = await getCart()
    cartView(data)
}
