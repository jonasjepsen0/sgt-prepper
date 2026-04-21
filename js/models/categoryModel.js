import { request } from "../utils/http.js"

export const getCategoryList = async () => {
    try {
        const data = await request("http://localhost:4000/api/categories")
        return data
    } catch (error) {
        throw new Error("Request error on category list", { cause: error })
    }
}