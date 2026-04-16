import { request } from "../utils/apiClient.js";

export const getProductList = async category_slug => {
    try {
        const data = await request(`http://localhost:4000/api/products/${category_slug}`)
        return data
    } catch (error) {
        throw new Error("Request error on product list", { cause: error })
    }
}