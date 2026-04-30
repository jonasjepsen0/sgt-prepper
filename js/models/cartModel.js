import { request } from "../utils/http.js"

const url = "http://localhost:4000/api/cart"

export const getCart = async () => {
    try {
        const data = await request(url)
        return data
    } catch (error) {
        throw new Error("Request error on cart list", { cause: error })
    }
}

export const addToCart = async (productId, quantity = 1) => {
    try {
        const data = await request(url, "POST", { productId, quantity })
        return data
    } catch (error) {
        throw new Error("Request error on add to cart", { cause: error })
    }
}

export const removeFromCart = async cart_id => {
    try {
        const data = await request(`${url}/${cart_id}`, "DELETE")
        return data
    } catch (error) {
        throw new Error("Request error on remove from cart", { cause: error })
    }
}
